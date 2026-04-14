import { db } from "@repo/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Clock } from "lucide-react";

export default async function AdminDashboard() {
  const [total, active, trial] = await Promise.all([
    db.subscription.count(),
    db.subscription.count({ where: { status: "active" } }),
    db.subscription.count({ where: { status: "on_trial" } }),
  ]);

  const stats = [
    { label: "Toplam Abone", value: total, icon: Users, desc: "Tüm zamanlar" },
    { label: "Aktif", value: active, icon: TrendingUp, desc: "Şu an aktif" },
    { label: "Trial", value: trial, icon: Clock, desc: "Deneme süresi" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon, desc }) => (
          <Card key={label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
              <Icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-xs text-muted-foreground mt-1">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
