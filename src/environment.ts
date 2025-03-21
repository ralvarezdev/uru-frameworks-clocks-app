import "dotenv/config";

// Environment variables keys
export const environmentKeys: Record<string, string> = {
  FIREBASE_API_KEY: 'URU_FRAMEWORKS_CLOCKS_API_FIREBASE_API_KEY',
  FIREBASE_AUTH_DOMAIN: 'URU_FRAMEWORKS_CLOCKS_API_FIREBASE_AUTH_DOMAIN',
  FIREBASE_PROJECT_ID: 'URU_FRAMEWORKS_CLOCKS_API_FIREBASE_PROJECT_ID',
  FIREBASE_STORAGE_BUCKET: 'URU_FRAMEWORKS_CLOCKS_API_FIREBASE_STORAGE_BUCKET',
  FIREBASE_MESSAGING_SENDER_ID: 'URU_FRAMEWORKS_CLOCKS_API_FIREBASE_MESSAGING_SENDER_ID',
  FIREBASE_APP_ID: 'URU_FRAMEWORKS_CLOCKS_API_FIREBASE_APP_ID',
  FIREBASE_MEASUREMENT_ID: 'URU_FRAMEWORKS_CLOCKS_API_FIREBASE_MEASUREMENT_ID',
};

// Environment variables
export const environment: Record<string, string> = {}

// Validate the environment variables
export function validateEnvironmentKeys(): void {
  Object.keys(environmentKeys).forEach((key) => {
    // Check if the environment variable is defined
    if (!process.env[environmentKeys[key]]) {
      throw new Error(`Environment variable ${environmentKeys[key]} is required.`);
    }

    // Assign the environment variable to the environment object
    environment[key] = process.env[environmentKeys[key]] as string;
  })
}
