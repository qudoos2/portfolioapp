/* eslint-disable no-undef */
// Jest configuration
// https://facebook.github.io/jest/docs/en/configuration.html
module.exports = {
    // Modules can be explicitly auto-mocked using jest.mock(moduleName).
    // https://facebook.github.io/jest/docs/en/configuration.html#automock-boolean
    automock: false, // [boolean]
  
    // Respect Browserify's "browser" field in package.json when resolving modules.
    // https://facebook.github.io/jest/docs/en/configuration.html#browser-boolean
    browser: false, // [boolean]
  
    // This config option can be used here to have Jest stop running tests after the first failure.
    // https://facebook.github.io/jest/docs/en/configuration.html#bail-boolean
    bail: false, // [boolean]
  
    // The directory where Jest should store its cached dependency information.
    // https://facebook.github.io/jest/docs/en/configuration.html#cachedirectory-string
    // cacheDirectory: '/tmp/<path>', // [string]
  
    // Indicates whether the coverage information should be collected while executing the test.
    // Because this retrofits all executed files with coverage collection statements,
    // it may significantly slow down your tests.
    // https://facebook.github.io/jest/docs/en/configuration.html#collectcoverage-boolean
    // collectCoverage: false, // [boolean]
  
    // https://facebook.github.io/jest/docs/en/configuration.html#collectcoveragefrom-array
    collectCoverageFrom: ['src/client/*/.{ts,tsx}', 'src/server/*/.{ts,tsx}'],
  
    // https://facebook.github.io/jest/docs/en/configuration.html#coveragedirectory-string
    coverageDirectory: '<rootDir>/coverage', // [string]
  
    // coveragePathIgnorePatterns: // [array<string>]
    coverageReporters: ['lcov', 'text', 'text-summary'], // [array<string>]
    //   reporters: ['default', './tools/coverage-total-reporter.js'],
    reporters: ['default'],
  
    coverageThreshold: {
      './src/client/': {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
      './src/server/': {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    }, // [object]
  
    globals: {
      _DEV_: true,
      GIT_SHORT: 'GIT_SHORT',
      GIT_LONG: 'GIT_LONG',
      GIT_BRANCH: 'GIT_BRANCH',
      GIT_TAG: 'GIT_TAG',
      GIT_DATE: 'GIT_DATE',
      APP_NESTED_PATH: '',
      ESRI_JS_MAP_API: '',
      STATIC_URL: '',
      'ts-jest': {
        diagnostics: {
          ignoreCodes: ['TS5056'],
        },
      },
    },
  
    // The default extensions Jest will look for.
    // https://facebook.github.io/jest/docs/en/configuration.html#modulefileextensions-array-string
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  
    // moduleDirectories: // [array<string>]
  
    // A map from regular expressions to module names that allow to stub out resources,
    // like images or styles with a single module.
    moduleNameMapper: {
      '\\.(css|less|styl|scss|sass|sss)$': 'identity-obj-proxy',
    },
  
    // modulePathIgnorePatterns: // [array<string>]
    // modulePaths: // [array<string>]
    modulePaths: ['node_modules', 'src'],
    // notify: false, // [boolean]
    // preset: // [string]
    // preset: 'react',
    // projects: // [array<string>]
    clearMocks: true, // [boolean]
    // reporters: // [array<moduleName | [moduleName, options]>]
    // resetMocks: // [boolean]
    // resetModules: // [boolean]
    // resolver: // [string]
  
    // rootDir: // [string]
    // roots: // [array<string>]
    // setupFiles: // [array]
    //   setupFiles: ['jest-localstorage-mock'],
    //   setupFilesAfterEnv: ['<rootDir>/enzyme.config.js'],
    // snapshotSerializers: // [array<string>]
    //   snapshotSerializers: ['enzyme-to-json/serializer'],
    // testEnvironment: // [string]
    testMatch: [
      '<rootDir>/src/*/.spec.js',
      '<rootDir>/src/*/.spec.jsx',
      '<rootDir>/src/*/.spec.ts',
      '<rootDir>/src/*/.spec.tsx',
      '<rootDir>/*.spec.js',
      '<rootDir>/*.spec.jsx',
      '<rootDir>/*.spec.ts',
      '<rootDir>/*.spec.tsx',
    ],
    testPathIgnorePatterns: ['/node_modules/'],
    // testRegex: // [string]
    // testResultsProcessor: // [string]
    // testRunner: // [string]
    // testURL: // [string]
    // timers: // [string]
  
    transform: {
      '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
      // '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
      // '^(?!.*\\.(js|jsx|json|css|less|styl|scss|sass|sss)$)':
      //   '<rootDir>/tools/lib/fileTransformer.js',
    },
  
    transformIgnorePatterns: [
      '/node_modules/(?!(@react|react)/).*/',
    ],
    // unmockedModulePathPatterns: // [array<string>]
  
    // verbose: true, // [boolean]
    forceExit: true, // [boolean]
    testTimeout: 240000,
  };