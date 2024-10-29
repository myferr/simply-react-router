import { App } from "./pages/App.tsx";
import { Docs } from "./pages/docs/App.tsx";
import { GettingStarted } from "./pages/docs/redirects/getting-started.tsx";
import { Introduction } from "./pages/docs/sections/getting-started/introduction.tsx";
import { Installation } from "./pages/docs/sections/getting-started/installation.tsx";
import { Components } from "./pages/docs/redirects/components.tsx";
import { Router_docs } from "./pages/docs/sections/components/router.tsx";
import { Routes_docs } from "./pages/docs/sections/components/routes.tsx";
import { Index_docs } from "./pages/docs/sections/components/index.tsx";
class Paths {
  Get() {
    return {
      "/index": <App />,
      "/docs": <Docs />,
      "/docs/getting-started": <GettingStarted />,
      "/docs/components": <Components />,
      "/docs/getting-started/introduction": <Introduction />,
      "/docs/getting-started/installation": <Installation />,
      "/docs/components/router": <Router_docs />,
      "/docs/components/routes": <Routes_docs />,
      "/docs/components/index": <Index_docs />,
    };
  }
}

export const RouterPaths = new Paths();
