import "../src/styles/global.css";

import type { Preview } from "@storybook/react";
import { HttpResponse, http } from "msw";
import { initialize, mswLoader } from "msw-storybook-addon";
import { handlers } from "../src/services/mocks/handlers";

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw: {
      handlers,
    },
  },
  loaders: [mswLoader],
};

export default preview;
