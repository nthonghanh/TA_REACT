module.exports = {
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,mjs}",
        "!src/index.js",
        "!src/registerServiceWorker.js"
    ],
    "collectCoverage": true,
    "coverageReporters": [
        "html",
        "text",
        "lcov"
    ],
    "setupFiles": [
        "<rootDir>/config/polyfills.js"
    ],
    "testMatch": [
        "<rootDir>/tests/**/*.test.{js,jsx,mjs}",
        "<rootDir>/tests/**/?(*.)(spec|test).{js,jsx,mjs}"
    ],
    "testEnvironment": "node",
    "testURL": "http://localhost",
    "transform": {
        "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
        "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    "transformIgnorePatterns": [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
    ],
    "moduleNameMapper": {
        "^react-native$": "react-native-web"
    },
    "moduleFileExtensions": [
        "web.js",
        "js",
        "json",
        "web.jsx",
        "jsx",
        "node",
        "mjs"
    ],
    "modulePaths": [
        "<rootDir>/src/"
    ],
    "globals": {
        "ENV": "development",
        "PRODUCTION": "false"
    }
};
