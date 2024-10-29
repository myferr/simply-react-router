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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const breadcrumbItems = [
  { href: "/docs/components", name: "Components" },
  { href: "/docs/components/routes", name: "Routes" },
];

export function Routes_docs() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-4 py-8 sm:px-6">
          <div className="prose max-w-3xl">
            <div className="flex items-center justify-between">
              <DocsBreadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="text-4xl font-bold my-2 mb-4" id="routes">
              Routes
            </h1>
            <p>
              This component is a part of the{" "}
              <a
                href="/docs/components/router"
                className="underline underline-offset-2 text-primary font-medium"
              >
                Router
              </a>{" "}
              component.
              <br />
              Routes are the building blocks of a React application. They define
              the different paths and components that should be rendered when
              the user navigates to that path.
              <br />
              <br />
              To get started with it you can use{" "}
              <code>
                {`
                                const paths = Router.Routes({
                    "'/path': <MyPath/>"
                })`}
              </code>
              and then pass it to the Router component to render. If you wanna
              learn more you can check out{" "}
              <a
                href="/docs/components/rendering"
                className="underline underline-offset-2 text-primary font-medium"
              >
                Rendering
              </a>
              .
            </p>
            <h1 className="text-3xl font-bold my-7 mb-4" id="dynamic-routing">
              Dynamic Routing
            </h1>
            <p>
              Simply React Router also supports dynamic routing, which means you
              can render the same component multiple times with different
              parameters. To create a dynamic route you can use an{" "}
              <code>if()</code> statement that returns the page's component.
              <Accordion type={"multiple"} className="my-4 space-y-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Example of a dynamic route
                  </AccordionTrigger>
                  <AccordionContent>
                    <pre>
                      <code>
                        {`
let login = "notSignedIn";
const PathComponent = () => {
  if (login == "signedIn") {
    return <App />;
  } else {
    return <Signup />;
  }
};

Router.Render(rootElement, Router.Routes({
  '/app': <PathComponent />
})
                      `}
                      </code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
