import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export async function createUser(userData: {
  fullName: string;
  username: string;
  email: string;
  password: string;
  address: string;
  bankName: string;
  bankAccountNumber: string;
  phoneNumber: string;
  role?: string;
}) {
  const hashedPassword = await hashPassword(userData.password);
  
  return prisma.user.create({
    data: {
      ...userData,
      password: hashedPassword,
      role: userData.role || "student",
    },
  });
}

export async function findUserByUsername(username: string) {
  return prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      fullName: true,
      username: true,
      email: true,
      password: true,
      address: true,
      role: true,
      bankName: true,
      bankAccountNumber: true,
      phoneNumber: true,
      createdAt: true,
    },
  });
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

