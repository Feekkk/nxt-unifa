import { NextRequest, NextResponse } from "next/server";
import { findUserByUsername, verifyPassword } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Validation
    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    // Find user
    const user = await findUserByUsername(username);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { message: "Login successful", user: userWithoutPassword },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Login error:", error);
    
    // Handle Prisma errors
    if (error.code === "P1001" || error.code === "P1017") {
      return NextResponse.json(
        { error: "Database connection failed. Please contact support." },
        { status: 500 }
      );
    }
    
    // Return detailed error in development
    const errorMessage = process.env.NODE_ENV === "development" 
      ? error.message 
      : "Login failed. Please try again.";
    
    return NextResponse.json(
      { 
        error: errorMessage,
        code: error.code,
        details: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

