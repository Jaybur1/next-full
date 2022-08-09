module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
    '<rootDir>/dist',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
    'pages',
  ],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@utils/(.*)': '<rootDir>/src/_utils/$1',
    '@constants/(.*)': '<rootDir>/src/constants/$1',
    '@types/(.*)': '<rootDir>/src/types/$1',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@test/(.*)': '<rootDir>/test/$1',
    '@styles/(.*).(scss|sass|css)$': 'identity-obj-proxy',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/unit/__mocks__/fileMocks.js',
  },
  testEnvironment: '<rootDir>/test/custom-test-env.js',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', 'pages/**/*.{js,ts,tsx,jsx}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statement: 0,
    }
  }
};
