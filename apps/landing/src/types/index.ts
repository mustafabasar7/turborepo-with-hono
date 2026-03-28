export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  badge?: string;
  category: "sahada" | "ofiste" | "akilli";
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}
