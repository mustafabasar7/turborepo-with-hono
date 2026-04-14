import { db } from "@repo/db";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function statusBadge(status: string) {
  const map: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
    active: "default",
    on_trial: "secondary",
    cancelled: "destructive",
    expired: "destructive",
    paused: "outline",
  };
  return (
    <Badge variant={map[status] ?? "outline"}>
      {status}
    </Badge>
  );
}

function fmt(date: Date | null) {
  if (!date) return "—";
  return date.toLocaleDateString("tr-TR");
}

export default async function SubscriptionsPage() {
  const subs = await db.subscription.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Abonelikler</h1>
        <span className="text-sm text-muted-foreground">{subs.length} kayıt</span>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Ad</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>Trial Bitiş</TableHead>
              <TableHead>Yenileme</TableHead>
              <TableHead>Kayıt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subs.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                  Henüz abone yok
                </TableCell>
              </TableRow>
            )}
            {subs.map((s) => (
              <TableRow key={s.id}>
                <TableCell className="font-medium">{s.email}</TableCell>
                <TableCell>{s.name ?? "—"}</TableCell>
                <TableCell>{s.planName}</TableCell>
                <TableCell>{statusBadge(s.status)}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{fmt(s.trialEndsAt)}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{fmt(s.renewsAt)}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{fmt(s.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
