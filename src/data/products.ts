export interface Product {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  icon: string;
  gradient: string;
  features: string[];
  benefits: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    title: "Legacy for the Future Generation",
    description: "Preserve your values, pass down your vision.",
    detailedDescription: "Our Legacy for the Future Generation service helps you create a comprehensive digital archive of your values, wisdom, and vision to pass down to future generations. Build a lasting legacy that transcends time and ensures your most important principles live on.",
    icon: "🏛️",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    features: [
      "Digital legacy preservation",
      "Values documentation system",
      "Multi-generational access control",
      "Wisdom sharing platform",
      "Heritage storytelling tools",
      "Legacy milestone tracking"
    ],
    benefits: [
      "Preserve family heritage permanently",
      "Strengthen generational bonds",
      "Share wisdom across time",
      "Create lasting impact"
    ],
    pricing: {
      starter: "$99/month",
      professional: "$299/month",
      enterprise: "Custom pricing"
    }
  },
  {
    id: 2,
    title: "Time Capsule",
    description: "Capture today, unlock tomorrow.",
    detailedDescription: "Our Time Capsule service allows you to create digital time capsules that preserve precious memories, important documents, and meaningful content to be opened at specific future dates. Perfect for capturing life's special moments and sharing them with future generations.",
    icon: "⏰",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    features: [
      "Scheduled content release",
      "Multi-media preservation",
      "Secure encrypted storage",
      "Customizable unlock dates",
      "Memory organization tools",
      "Collaborative capsule creation"
    ],
    benefits: [
      "Preserve memories forever",
      "Create anticipation and excitement",
      "Strengthen emotional connections",
      "Build family traditions"
    ],
    pricing: {
      starter: "$49/month",
      professional: "$149/month",
      enterprise: "Custom pricing"
    }
  },
  {
    id: 3,
    title: "Dream Preservation & Fulfillment",
    description: "Keep your dreams alive for generations.",
    detailedDescription: "Dream Preservation & Fulfillment helps individuals and families document, preserve, and actively work towards achieving their dreams across generations. Track progress, share aspirations, and ensure dreams don't fade with time.",
    icon: "✨",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    features: [
      "Dream documentation system",
      "Progress tracking tools",
      "Goal achievement pathways",
      "Generational dream sharing",
      "Motivation and inspiration feeds",
      "Dream fulfillment planning"
    ],
    benefits: [
      "Keep dreams alive across generations",
      "Increase goal achievement rates",
      "Build family legacy of success",
      "Inspire future generations"
    ],
    pricing: {
      starter: "$79/month",
      professional: "$199/month",
      enterprise: "Custom pricing"
    }
  },
  {
    id: 4,
    title: "Future Children Legacy Fund",
    description: "Secure a brighter tomorrow for your loved ones.",
    detailedDescription: "The Future Children Legacy Fund is a comprehensive financial planning and legacy management platform designed to secure financial futures for your children and future generations. Combine smart investing, education funding, and wealth preservation strategies.",
    icon: "�",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    features: [
      "Smart investment planning",
      "Education fund management",
      "Wealth preservation strategies",
      "Legacy financial planning",
      "Multi-generational portfolios",
      "Financial literacy programs"
    ],
    benefits: [
      "Secure children's financial future",
      "Build generational wealth",
      "Reduce financial stress",
      "Create lasting prosperity"
    ],
    pricing: {
      starter: "$19/month",
      professional: "$49/month",
      enterprise: "Custom pricing"
    }
  }
];
