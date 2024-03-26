import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@slices/(.*)$': '<rootDir>/src/state/slices/$1',
    '^@models/(.*)$': '<rootDir>/src/shared/models/$1',
    '^@utils/(.*)$': '<rootDir>/src/shared/utils/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@globalStyles$': '<rootDir>/src/styles/globals.css',
    '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^store$': '<rootDir>/src/state/store/store.ts',
    '^shared$': '<rootDir>/src/shared'
    // Agrega cualquier otro alias que necesites aquí
  }
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
