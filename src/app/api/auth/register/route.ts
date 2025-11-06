import { NextRequest, NextResponse } from "next/server";
import { createUser, findUserByEmail, findUserByUsername } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, username, email, password, address, bankName, bankAccountNumber, phoneNumber, role } = body;

    // Validation
    if (!fullName || !username || !email || !password || !address || !bankName || !bankAccountNumber || !phoneNumber) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUserByEmail = await findUserByEmail(email);
    if (existingUserByEmail) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    const existingUserByUsername = await findUserByUsername(username);
    if (existingUserByUsername) {
      return NextResponse.json(
        { error: "Username already taken" },
        { status: 400 }
      );
    }

    // Create user
    const user = await createUser({
      fullName,
      username,
      email,
      password,
      address,
      bankName,
      bankAccountNumber,
      phoneNumber,
      role: role || "student",
    });

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { message: "User registered successfully", user: userWithoutPassword },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration error:", error);
    
    // Handle Prisma unique constraint errors
    if (error.code === "P2002") {
      const field = error.meta?.target?.[0];
      return NextResponse.json(
        { error: `${field} already exists` },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Registration failed. Please try again." },
      { status: 500 }
    );
  }
}

