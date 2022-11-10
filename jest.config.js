const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: '.'})

const customJestConfig = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleDirectories: [
    'node_modules',
    'src',
    'pages',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
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

}

module.exports = createJestConfig(customJestConfig)