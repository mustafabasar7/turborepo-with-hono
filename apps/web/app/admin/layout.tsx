import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboard, Users, DollarSign } from "lucide-react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/subscriptions", label: "Abonelikler", icon: Users },
  { href: "/admin/pricing", label: "Fiyatlandırma", icon: DollarSign },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r bg-card flex flex-col">
        <div className="flex h-14 items-center px-4">
          <span className="font-bold text-sm tracking-tight">YapiPlan Admin</span>
        </div>
        <Separator />
        <nav className="flex flex-col gap-1 p-2 flex-1">
          {NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Icon className="size-4" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  );
}
