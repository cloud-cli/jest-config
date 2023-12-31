export default {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/.spec.[jt]s$/', '/__tests__/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transformIgnorePatterns: ['/node_modules/', '/\\.mjs$/', '/\\.js$/'],
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/*.spec.[tj]s', '**/*.spec.m[tj]s'],
  moduleFileExtensions: ['ts', 'mts', 'js', 'mjs', 'cjs', 'json'],
  extensionsToTreatAsEsm: ['.ts', '.mts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.[m]?js$': '$1',
  },
  transform: {
    '^.+\\.[tj]s?$': ['ts-jest', { useESM: true }],
    '^.+\\.m[tj]s$': ['ts-jest', { useESM: true }],
  },
};
