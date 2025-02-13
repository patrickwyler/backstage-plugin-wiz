import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';

// Define window.fs interface
interface FileSystem {
  readFile: jest.Mock;
  writeFile: jest.Mock;
  readdir: jest.Mock;
  mkdir: jest.Mock;
  rm: jest.Mock;
}

// Extend Window interface
declare global {
  interface Window {
    fs: FileSystem;
  }
}

// Mock window.fs for file operations in frontend tests
if (typeof window !== 'undefined') {
  window.fs = {
    readFile: jest.fn(),
    writeFile: jest.fn(),
    readdir: jest.fn(),
    mkdir: jest.fn(),
    rm: jest.fn(),
  };
}

// Reset all mocks before each test
beforeEach(() => {
  jest.resetAllMocks();
});

// Create a proper Response mock if needed
global.fetch = jest.fn(() =>
  Promise.resolve(
    new Response(JSON.stringify({}), {
      status: 200,
      statusText: 'OK',
      headers: new Headers(),
    }),
  ),
);
