import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { UserList } from "@/components/dashboard/user-list";

export default function DashboardPage() {
  return (
    <main className="min-h-dvh bg-[#fafafa]">
      <DashboardHeader />
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-8">
        <h1 className="mb-1 text-2xl font-semibold text-black">Welcome back</h1>
        <p className="mb-8 text-sm text-[#808080]">
          Here&apos;s a look at hosts on Venuze.
        </p>
        <UserList />
      </div>
    </main>
  );
}
