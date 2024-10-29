import { Router, Index } from "simply-react-router";
import { RouterPaths } from "./router";

import { App } from "./pages/App";

import "./index.css";
import "./styles/font.css";

function isMobile() {
  if (
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function MobileNotSupported() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background px-4 py-8 sm:px-6">
      <div className="prose max-w-3xl">
        <h1 className="text-4xl font-bold my-2 mb-4">Simply React Router</h1>
        <p>
          This site is not supported on mobile devices. Please use a desktop
          browser.
        </p>
      </div>
    </div>
  );
}

if (isMobile()) {
  Index.Set(document.getElementById("root"), <MobileNotSupported />);
} else {
  let rootElement = document.getElementById("root");

  Index.Set(rootElement, <App />);

  Router.Render(rootElement, Router.Routes(RouterPaths.Get()));
}
