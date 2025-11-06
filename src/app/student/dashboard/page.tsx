"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { User, Mail, Phone, MapPin, Building2, CreditCard, LogOut, GraduationCap } from "lucide-react";

interface UserData {
  id: number;
  fullName: string;
  username: string;
  email: string;
  address: string;
  role: string;
  bankName: string;
  bankAccountNumber: string;
  phoneNumber: string;
  createdAt: string;
}

export default function StudentDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get user from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
    router.refresh();
  };

  if (isLoading) {
    return (
      <div className="bg-white text-zinc-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-zinc-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="bg-white text-zinc-900 min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user.fullName}!</h1>
                <p className="mt-2 text-zinc-600">Manage your financial aid applications and profile</p>
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-md border border-red-300 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-gradient-to-br from-blue-50 to-blue-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700">Role</p>
                  <p className="mt-1 text-2xl font-bold text-blue-900 capitalize">{user.role}</p>
                </div>
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-gradient-to-br from-teal-50 to-teal-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-teal-700">Account Status</p>
                  <p className="mt-1 text-2xl font-bold text-teal-900">Active</p>
                </div>
                <User className="h-8 w-8 text-teal-600" />
              </div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-gradient-to-br from-purple-50 to-purple-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-700">Member Since</p>
                  <p className="mt-1 text-lg font-bold text-purple-900">
                    {new Date(user.createdAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </p>
                </div>
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Personal Information */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold tracking-tight mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-500">Full Name</p>
                    <p className="mt-1 text-base font-semibold text-zinc-900">{user.fullName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-500">Username</p>
                    <p className="mt-1 text-base font-semibold text-zinc-900">{user.username}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-500">Email</p>
                    <p className="mt-1 text-base font-semibold text-zinc-900">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-500">Phone Number</p>
                    <p className="mt-1 text-base font-semibold text-zinc-900">{user.phoneNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-500">Address</p>
                    <p className="mt-1 text-base font-semibold text-zinc-900">{user.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Banking Information */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold tracking-tight mb-6">Banking Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-green-50">
                    <Building2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-500">Bank Name</p>
                    <p className="mt-1 text-base font-semibold text-zinc-900">{user.bankName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-green-50">
                    <CreditCard className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-500">Account Number</p>
                    <p className="mt-1 text-base font-semibold text-zinc-900">{user.bankAccountNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <button className="rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-left transition hover:bg-blue-100">
                <p className="font-semibold text-blue-900">Apply for Financial Aid</p>
                <p className="mt-1 text-sm text-blue-700">Submit a new application</p>
              </button>
              <button className="rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3 text-left transition hover:bg-zinc-100">
                <p className="font-semibold text-zinc-900">View Applications</p>
                <p className="mt-1 text-sm text-zinc-700">Check your application status</p>
              </button>
              <button className="rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3 text-left transition hover:bg-zinc-100">
                <p className="font-semibold text-zinc-900">Update Profile</p>
                <p className="mt-1 text-sm text-zinc-700">Edit your information</p>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

