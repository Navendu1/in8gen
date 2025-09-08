// Wealth Legacy System Features
// This file will contain additional features for the Wealth Legacy System

export interface WealthLegacyFeatures {
  investmentCalculator: boolean;
  generationPlanner: boolean;
  legacyVault: boolean;
  aiAdvisor: boolean;
}

// Future feature implementations will go here
export const features: WealthLegacyFeatures = {
  investmentCalculator: false, // Coming soon: Calculate investment growth over generations
  generationPlanner: false,    // Coming soon: Plan wealth distribution across family tree
  legacyVault: false,          // Coming soon: Secure digital vault for important documents
  aiAdvisor: false             // Coming soon: AI-powered financial advisor
};

// Placeholder for future API integrations
export const apiEndpoints = {
  calculateGrowth: '/api/wealth/calculate',
  createVault: '/api/wealth/vault/create',
  getAdvice: '/api/wealth/advice'
};
