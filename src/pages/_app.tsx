import "@/styles/global.css";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    (async () => {
      if (
        process.env.NODE_ENV === "development" &&
        process.env.NEXT_PUBLIC_USE_MOCK
      ) {
        if (typeof window === "undefined") {
          const { server } = await import("../services/mocks/server");
          server.listen();
        } else {
          const { worker } = await import("../services/mocks/browser");
          worker.start();
        }
        setReady(true);
      } else {
        setReady(true);
      }
    })();
  }, []);
  return ready ? <Component {...pageProps} /> : null;
};

export default MyApp;
