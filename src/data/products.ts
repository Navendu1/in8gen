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
    title: "AI-Powered Analytics",
    description: "Transform your data into actionable insights with our cutting-edge artificial intelligence platform.",
    detailedDescription: "Our AI-Powered Analytics platform leverages advanced machine learning algorithms to analyze vast amounts of data in real-time. Get predictive insights, automated reports, and intelligent recommendations that drive business growth and optimization.",
    icon: "🤖",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    features: [
      "Real-time data processing",
      "Predictive modeling",
      "Custom dashboard creation",
      "Automated report generation",
      "Integration with 100+ data sources",
      "Advanced visualization tools"
    ],
    benefits: [
      "Increase decision-making speed by 75%",
      "Reduce operational costs by 30%",
      "Improve forecast accuracy by 85%",
      "24/7 automated monitoring"
    ],
    pricing: {
      starter: "$99/month",
      professional: "$299/month",
      enterprise: "Custom pricing"
    }
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    description: "Scalable, secure, and lightning-fast cloud solutions that grow with your business needs.",
    detailedDescription: "Our Cloud Infrastructure service provides enterprise-grade hosting solutions with 99.99% uptime guarantee. Built on cutting-edge technology with automatic scaling, advanced security, and global content delivery networks.",
    icon: "☁️",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    features: [
      "Auto-scaling infrastructure",
      "Global CDN network",
      "Advanced security protocols",
      "99.99% uptime SLA",
      "One-click deployments",
      "Real-time monitoring"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve website speed by 60%",
      "Scale instantly with traffic spikes",
      "Enterprise-grade security"
    ],
    pricing: {
      starter: "$49/month",
      professional: "$149/month",
      enterprise: "Custom pricing"
    }
  },
  {
    id: 3,
    title: "Smart Automation",
    description: "Streamline your workflows with intelligent automation that learns and adapts to your processes.",
    detailedDescription: "Smart Automation combines RPA (Robotic Process Automation) with AI to create intelligent workflows that handle repetitive tasks, learn from patterns, and continuously optimize processes for maximum efficiency.",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    features: [
      "Drag-and-drop workflow builder",
      "AI-powered process optimization",
      "Integration with 200+ apps",
      "Conditional logic & branching",
      "Scheduled & triggered automation",
      "Comprehensive audit trails"
    ],
    benefits: [
      "Save 20+ hours per week",
      "Reduce human errors by 95%",
      "Improve process efficiency by 70%",
      "Focus on strategic tasks"
    ],
    pricing: {
      starter: "$79/month",
      professional: "$199/month",
      enterprise: "Custom pricing"
    }
  },
  {
    id: 4,
    title: "Secure Communication",
    description: "End-to-end encrypted communication platform for teams that prioritize privacy and security.",
    detailedDescription: "Our Secure Communication platform provides military-grade encryption for all your team communications. Features include encrypted messaging, secure file sharing, video conferencing, and compliance tools for regulated industries.",
    icon: "🔐",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    features: [
      "End-to-end encryption",
      "Secure file sharing",
      "HD video conferencing",
      "Message self-destruct",
      "Compliance reporting",
      "Multi-factor authentication"
    ],
    benefits: [
      "100% secure communications",
      "GDPR & HIPAA compliant",
      "Zero data retention policy",
      "Advanced threat protection"
    ],
    pricing: {
      starter: "$19/month",
      professional: "$49/month",
      enterprise: "Custom pricing"
    }
  }
];
