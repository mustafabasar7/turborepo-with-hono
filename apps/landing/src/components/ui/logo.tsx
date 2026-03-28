import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: number;
}

/** Geometric construction mark — two pillars + crossbeam */
export function LogoMark({ className, size = 32 }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Amber background square */}
      <rect width="32" height="32" rx="7" fill="hsl(45 100% 48%)" />
      {/* Left pillar */}
      <rect x="7" y="9" width="4" height="16" rx="1" fill="hsl(200 20% 10%)" />
      {/* Right pillar */}
      <rect x="21" y="9" width="4" height="16" rx="1" fill="hsl(200 20% 10%)" />
      {/* Top beam */}
      <rect x="7" y="9" width="18" height="3.5" rx="1" fill="hsl(200 20% 10%)" />
      {/* Mid beam */}
      <rect x="7" y="17.5" width="18" height="2.5" rx="1" fill="hsl(200 20% 10%)" opacity="0.45" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
}

export function Logo({ className, iconSize = 28, showText = true }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark size={iconSize} />
      {showText && (
        <span className="text-base font-bold tracking-tight">
          İnşaat Kontrol
        </span>
      )}
    </span>
  );
}
