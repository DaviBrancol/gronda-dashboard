module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!jest.config.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@context(.*)$': '<rootDir>/src/context$1',
    '^@css(.*)$': '<rootDir>/src/css$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@mock(.*)$': '<rootDir>/src/mock$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@screens(.*)$': '<rootDir>/src/screens$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@typings(.*)$': '<rootDir>/src/typings$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  setupFiles: ['<rootDir>/test-setup-file.js'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/.next/', '/out/', '/node_modules/', '/tests/', '/coverage/'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
}
