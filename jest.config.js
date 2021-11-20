module.exports = {
    // collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        // https://jestjs.io/docs/webpack#mocking-css-modules
        // '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

        // Handle CSS imports (without CSS modules)
        '^.+\\.(css|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.ts',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    // transform: {
    //     // Use babel-jest to transpile tests with the next/babel preset
    //     // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    //     '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    // },
    // transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
    testEnvironment: 'jsdom',
}
