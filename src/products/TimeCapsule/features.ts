// Time Capsule Features
// This file contains features for capturing and preserving memories across time

export interface TimeCapsuleFeatures {
  scheduledRelease: boolean;
  multimediaStorage: boolean;
  encryptedSecurity: boolean;
  collaborativeCreation: boolean;
}

// Future feature implementations will go here
export const features: TimeCapsuleFeatures = {
  scheduledRelease: false,      // Coming soon: Set specific dates for content unlocking
  multimediaStorage: false,     // Coming soon: Store photos, videos, documents, and audio
  encryptedSecurity: false,     // Coming soon: Military-grade encryption for secure storage
  collaborativeCreation: false  // Coming soon: Allow multiple people to contribute to capsules
};

// Placeholder for future API integrations
export const apiEndpoints = {
  createCapsule: '/api/timecapsule/create',
  scheduleRelease: '/api/timecapsule/schedule',
  uploadMedia: '/api/timecapsule/upload',
  manageAccess: '/api/timecapsule/access'
};
