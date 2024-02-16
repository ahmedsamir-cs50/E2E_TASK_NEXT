module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};

// testPathIgnorePatterns: Ignores test files in the .next and node_modules directories.
// setupFilesAfterEnv: Configures Jest to use @testing-library/jest-dom to extend Jest's expect with additional matchers.
// moduleNameMapper: Mocks CSS imports in Jest tests. identity-obj-proxy: A utility to mock CSS modules in Jest
// This configures Jest to use jsdom as the test environment, which provides a fake document object that @testing-library/react can use
