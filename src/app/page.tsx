import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsCard } from "@/components/StatsCard";
import { FundingCard } from "@/components/FundingCard";
import { ProgramCard } from "@/components/ProgramCard";
import { Banknote, GraduationCap, HandCoins, Landmark, Library, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white text-zinc-900" id="home">
      <Header />

      <section className="relative isolate min-h-[70vh] overflow-hidden bg-gradient-to-br from-blue-600 via-teal-500 to-blue-700 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.25),transparent)]" aria-hidden />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-24 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-28">
          <div className="animate-[fadeIn_0.8s_ease_0s_both]">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Welcome to RCMP UniFa</h1>
            <p className="mt-3 text-lg font-medium">UniKL Financial Aid System - Supporting Student Success</p>
            <p className="mt-4 max-w-xl text-zinc-100">
              Empowering UniKL students to achieve their academic dreams through comprehensive financial support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#applications" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50">
                Apply Now
              </Link>
              <Link href="#about" className="inline-flex items-center justify-center rounded-md border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:block animate-[fadeIn_1s_ease_0.1s_both]">
            <div className="mx-auto h-64 w-full max-w-md rounded-2xl bg-white/10 p-6 shadow-xl ring-1 ring-white/20 backdrop-blur">
              <div className="text-sm font-medium">RCMP UniFa</div>
              <p className="mt-2 text-sm text-white/80">
                A streamlined platform for students to explore and apply for financial aid programs at UniKL RCMP.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-md bg-white/10 p-4">
                  <div className="text-lg font-bold">5,000+</div>
                  <div className="text-white/80">Students</div>
                </div>
                <div className="rounded-md bg-white/10 p-4">
                  <div className="text-lg font-bold">RM 2.5M+</div>
                  <div className="text-white/80">Funds</div>
                </div>
                <div className="rounded-md bg-white/10 p-4">
                  <div className="text-lg font-bold">95%</div>
                  <div className="text-white/80">Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">History of Student Welfare Fund</h2>
            <p className="mt-4 text-lg text-zinc-600">
              The Student Welfare Fund (SWF) was established in [YEAR] to provide financial assistance to UniKL RCMP students facing economic hardships. Our mission is to ensure that no deserving student is unable to complete their education due to financial constraints.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-zinc-700">
                Since its inception, SWF has been a cornerstone of support, enabling thousands of students to continue their academic journey with dignity.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-zinc-700">
                <li>Mission: To support UniKL students through equitable financial assistance.</li>
                <li>Milestones: Growing partnerships and increased fund availability year-on-year.</li>
                <li>Impact: Improved retention and graduation rates across faculties.</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatsCard label="Students Supported" value="5,000+" />
              <StatsCard label="Funds Distributed" value="RM 2.5M+" />
              <StatsCard label="Success Rate" value="95%" />
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How Our Fund Raises Money</h2>
              <p className="mt-4 text-zinc-600">
                Our financial aid programs are supported by diverse funding sources working together to maximize impact.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FundingCard icon={<Landmark className="h-5 w-5" />} title="University Budget Allocation" description="Annual allocations dedicated to student welfare and retention." />
              <FundingCard icon={<Users className="h-5 w-5" />} title="Alumni Donations" description="Generous contributions from alumni to support future generations." />
              <FundingCard icon={<HandCoins className="h-5 w-5" />} title="Corporate Sponsorships" description="Partnerships with industry to sponsor targeted aid." />
              <FundingCard icon={<Banknote className="h-5 w-5" />} title="Government Grants" description="Grants and matching funds from government agencies." />
              <FundingCard icon={<Library className="h-5 w-5" />} title="Fundraising Events" description="Community events and campaigns that drive contributions." />
              <FundingCard icon={<GraduationCap className="h-5 w-5" />} title="Student Contributions" description="Optional contributions that strengthen the fund." />
            </div>
          </div>
        </section>

        <section id="applications" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Available Financial Aid Programs</h2>
            <p className="mt-4 text-zinc-600">Explore programs tailored to support a variety of student needs.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProgramCard icon={<HandCoins className="h-5 w-5" />} name="Emergency Financial Assistance" description="Immediate support for students facing urgent financial difficulties." />
            <ProgramCard icon={<GraduationCap className="h-5 w-5" />} name="Tuition Fee Support" description="Partial coverage of tuition fees for eligible students." />
            <ProgramCard icon={<Library className="h-5 w-5" />} name="Book & Study Material Grants" description="Grants to purchase textbooks and essential learning materials." />
            <ProgramCard icon={<Users className="h-5 w-5" />} name="Living Allowance Support" description="Assistance with living costs for students in need." />
            <ProgramCard icon={<Banknote className="h-5 w-5" />} name="Project/Research Funding" description="Funding for approved academic projects and research." />
            <ProgramCard icon={<Landmark className="h-5 w-5" />} name="Technology & Equipment Aid" description="Support for laptops, software, and specialized equipment." />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

