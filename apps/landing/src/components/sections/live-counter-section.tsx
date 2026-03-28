import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import { Activity } from "@/components/animate-ui/icons/activity";
import { ChartBarIncreasing } from "@/components/animate-ui/icons/chart-bar-increasing";
import { BadgeCheck } from "@/components/animate-ui/icons/badge-check";
import { UsersRound } from "@/components/animate-ui/icons/users-round";

const COUNTERS = [
  {
    Icon: ChartBarIncreasing,
    value: 500,
    suffix: "+",
    label: "Aktif Proje",
    description: "Aynı anda yönetilen inşaat projesi",
    colorClass: "text-primary",
  },
  {
    Icon: UsersRound,
    value: 12000,
    suffix: "+",
    label: "Kullanıcı",
    description: "Mühendis, şef ve müteahhit",
    colorClass: "text-chart-2",
  },
  {
    Icon: Activity,
    value: 2,
    suffix: " Milyar ₺",
    label: "Yönetilen Bütçe",
    description: "Platform üzerinden takip edilen",
    colorClass: "text-chart-3",
  },
  {
    Icon: BadgeCheck,
    value: 98,
    suffix: "%",
    label: "Memnuniyet",
    description: "Kullanıcı memnuniyeti skoru",
    colorClass: "text-chart-4",
  },
] as const;

export function LiveCounterSection() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <BlurFade delay={0.1} inView>
          <div className="mb-10 text-center">
            <Badge variant="secondary" className="mb-4 gap-1">
              <Activity size={14} animateOnView />
              Canlı Veriler
            </Badge>
            <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
              Rakamlar Konuşuyor
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Binlerce proje, on binlerce kullanıcı. Türkiye inşaat sektörünün
              güvendiği platform.
            </p>
          </div>
        </BlurFade>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {COUNTERS.map((item, i) => (
            <BlurFade key={item.label} delay={0.15 + i * 0.1} inView>
              <div className="flex flex-col items-center gap-2 rounded-xl border bg-card p-6 text-center shadow-sm">
                <item.Icon
                  size={28}
                  animateOnView
                  className={item.colorClass}
                />
                <div className="flex items-baseline gap-0.5">
                  <NumberTicker
                    value={item.value}
                    delay={0.3 + i * 0.1}
                    className={`text-4xl font-extrabold tabular-nums ${item.colorClass}`}
                  />
                  <span className={`text-2xl font-bold ${item.colorClass}`}>
                    {item.suffix}
                  </span>
                </div>
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        <Separator className="mx-auto mt-12 max-w-xs" />
      </div>
    </section>
  );
}
