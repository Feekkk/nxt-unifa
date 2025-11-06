import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Test Prisma connection
    await prisma.$connect();
    
    // Test query - count users
    const userCount = await prisma.user.count();
    
    // Test query - try to find a user
    const testQuery = await prisma.user.findMany({
      take: 1
    });
    
    await prisma.$disconnect();
    
    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      userCount,
      hasUsers: testQuery.length > 0,
      sampleUser: testQuery[0] ? {
        id: testQuery[0].id,
        username: testQuery[0].username,
        email: testQuery[0].email,
        // Don't expose password
      } : null,
      databaseUrl: process.env.DATABASE_URL ? 
        process.env.DATABASE_URL.replace(/:[^:@]+@/, ':****@') : 
        'Not set'
    });
  } catch (error: any) {
    console.error("Database test error:", error);
    
    return NextResponse.json({
      success: false,
      error: error.message,
      code: error.code,
      meta: error.meta,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined
    }, { status: 500 });
  }
}

