"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr"; // or your client setup

import Sidebar from "@/components/home/sidebar";
import Dashboard from "../../components/home/dashboard";

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    supabase.auth.getUser().then(({ data, error }) => {
      if (error || !data.user) {
        router.push("/login");
      } else {
        setAuthenticated(true);
      }
      setLoading(false);
    });
  }, []);

  if (loading || !authenticated) return null;

  return (
    <div>
      <Sidebar
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      <div
        className={`transition-all duration-300 ${
          sidebarCollapsed ? "md:ml-20" : "md:ml-60"
        }`}
      >
        <Dashboard />
      </div>
    </div>
  );
}
