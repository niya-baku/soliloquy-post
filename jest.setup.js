import "@testing-library/jest-dom";
import { server } from "./src/services/mocks/server";
import "@testing-library/jest-dom/extend-expect";
beforeAll(() => {
  // Start the interception.
  server.listen();
});

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers();
});

afterAll(() => {
  // Disable request interception and clean up.
  server.close();
});
