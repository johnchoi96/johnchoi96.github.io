module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '\\.css$'
    ],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "<rootDir>/src/mocks/cssMock.js",
      "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/mocks/imageMock.js"
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};
