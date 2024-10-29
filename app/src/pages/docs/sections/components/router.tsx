import { ThemeSwitcher } from "@/components/ui/themeswitcher";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";

import { Sidebar } from "@/components/layout/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DocsBreadcrumb } from "@/components/layout/docs-breadcrumb";

const breadcrumbItems = [
  { href: "/docs/components", name: "Components" },
  { href: "/docs/components/router", name: "Router" },
];

export function Router_docs() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-4 py-8 sm:px-6">
          <div className="prose max-w-3xl">
            <div className="flex items-center justify-between">
              <DocsBreadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="text-4xl font-bold my-2 mb-4" id="router">
              Router
            </h1>
            <p>
              The router is a component that renders the current route and gives
              you the ability to navigate between different routes.
              <br />
              <br />
              To get started with it you can use <code>
                Router.Render()
              </code>{" "}
              and pass your root and routes. To learn more about your routes
              check out{" "}
              <a
                href="/docs/components/routes"
                className="underline underline-offset-2 text-primary font-medium"
              >
                routes
              </a>
            </p>
            <h1 className="text-3xl font-bold my-7 mb-4" id="rendering">
              Rendering
            </h1>
            <p>
              To render paths with page components you can use the{" "}
              <code>Router.Render()</code>
              function and pass in your root and routes.
              <br />
              To set your root set a variable's value to the{" "}
              <code>HTMLElement</code>, for example:{" "}
              <code>document.getElementById("root")</code>. Then pass the
              variable or the root element in your render function as the first
              parameter.
            </p>
          </div>
        </main>
      </div>
      <footer className="flex py-4 px-4 sm:px-6">
        <ThemeSwitcher />
        <p className="ml-2 text-sm text-muted-foreground relative top-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="flex text-primary font-medium">
                  <p className="mr-2 text-muted-foreground">made by </p>
                  <Avatar className="size-5 mr-1">
                    <AvatarFallback>
                      <span className="sr-only">Myferr</span>
                    </AvatarFallback>
                    <AvatarImage src="https://github.com/myferr.png" />
                  </Avatar>
                  <a href="https://github.com/myferr" target="_blank">
                    @myferr
                  </a>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">check me out on github</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </p>
      </footer>
    </div>
  );
}
