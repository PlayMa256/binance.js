module.exports = {
  cache: true,
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testTimeout: 20000,
  // preset configs
  // preset: 'ts-jest/presets/js-with-ts',
  // which files to test and which to ignore
  testMatch: ['**/tests/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/tmp/', '/coverage/', '/stories/', '/\\.storybook/'],
  // don't watch for file changes in node_modules
  watchPathIgnorePatterns: ['/node_modules/'],
  // jest automock settings
  automock: false,
  unmockedModulePathPatterns: ['/node_modules/'],
  // test environment setup
  // setupFiles: [`${__dirname}/setup/setup.js`],
  // setupFilesAfterEnv: [`${__dirname}/setup/setupAfterEnv.ts`],
  // coverage settings
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['/node_modules/', '\\.json$', '/tests/', '/stories/', '/\\.storybook/'],

  globals: {
    'ts-jest': {
      tsconfig: `${__dirname}/tsconfig.json`,

      // https://huafu.github.io/ts-jest/user/config/diagnostics
      diagnostics: false,

      // Makes jest test run much faster, BUT, without type checking.
      // Type checking in CI is done with `tsc --noEmit` or `yarn typecheck` command.
      // https://huafu.github.io/ts-jest/user/config/isolatedModules
      isolatedModules: true,
    },
  },

  transformIgnorePatterns: ['/node_modules/(?!(lodash-es|antd|[^/]+/es|rc-animate|rc-util)/).*'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '/node_modules/((lodash-es|[^/]+/es)|rc-animate|rc-util)/.*': 'ts-jest',
  },
  setupFiles: ["./jest-setup.js"]
};
