import Link from "next/link";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <XCircle className="mx-auto h-16 w-16 text-red-500 mb-6" />
        <h1 className="text-3xl font-bold mb-4">Ödeme İptal Edildi</h1>
        <p className="text-muted-foreground mb-8">
          Ödeme işleminiz iptal edildi. Herhangi bir ücret alınmadı. İstediğiniz
          zaman tekrar deneyebilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/#pricing">Planlara Geri Dön</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Ana Sayfa</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
