"use client";

import { useRouter } from "next/navigation";
import { useSession, signOut } from "../../lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.push("/login");
  }

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Yükleniyor...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">
          Oturum bulunamadı.{" "}
          <a href="/login" className="text-primary underline">
            Giriş yap
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button variant="outline" onClick={handleSignOut}>
            Çıkış Yap
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Hesap Bilgileri</CardTitle>
            <CardDescription>
              Oturum açık hesabınızın detayları
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground w-24">
                Ad Soyad
              </span>
              <span className="text-sm font-semibold">{session.user.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground w-24">
                E-posta
              </span>
              <span className="text-sm">{session.user.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground w-24">
                Durum
              </span>
              <Badge variant="secondary">
                {session.user.emailVerified ? "Doğrulandı" : "Doğrulanmadı"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
