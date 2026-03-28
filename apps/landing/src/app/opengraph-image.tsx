import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "İnşaat Kontrol — Türkiye'nin İnşaat ERP Platformu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#f5a800",
          }}
        />

        {/* Background grid dots */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.4,
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              background: "#f5a800",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Construction frame mark */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="6" width="5" height="20" rx="1.5" fill="white" />
              <rect x="23" y="6" width="5" height="20" rx="1.5" fill="white" />
              <rect x="4" y="6" width="24" height="5" rx="1.5" fill="white" />
              <rect x="4" y="17" width="24" height="3" rx="1.5" fill="white" opacity="0.5" />
            </svg>
          </div>
          <span style={{ fontSize: "28px", fontWeight: "700", color: "#111827" }}>
            İnşaat Kontrol
          </span>
          <div
            style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#f5a800",
              background: "#fef3c7",
              borderRadius: "6px",
              padding: "4px 10px",
            }}
          >
            Beta
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: "800",
              color: "#111827",
              lineHeight: "1.1",
              letterSpacing: "-2px",
            }}
          >
            Maliyet Aşımı Bitti.
          </div>
          <div
            style={{
              fontSize: "68px",
              fontWeight: "800",
              color: "#f5a800",
              lineHeight: "1.1",
              letterSpacing: "-2px",
            }}
          >
            Kontrol Sizde.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#6b7280",
              maxWidth: "680px",
              lineHeight: "1.5",
            }}
          >
            Şantiyeden ofise tek platform. Proje yönetimi, maliyet kontrolü ve
            AI araçları — hepsi bir arada.
          </div>
        </div>

        {/* Bottom stats row */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { value: "%35", label: "Maliyet Tasarrufu" },
            { value: "20+", label: "İnşaat Firması" },
            { value: "14 gün", label: "Ücretsiz Deneme" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "32px", fontWeight: "800", color: "#111827" }}>
                {stat.value}
              </span>
              <span style={{ fontSize: "16px", color: "#9ca3af" }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
