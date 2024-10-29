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
  { href: "/docs/getting-started", name: "Getting Started" },
  { href: "/docs/getting-started/introduction", name: "Introduction" },
];

export function Index_docs() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-4 py-8 sm:px-6">
          <div className="prose max-w-3xl">
            <div className="flex items-center justify-between">
              <DocsBreadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="text-4xl font-bold my-2 mb-4" id="index">
              Index
            </h1>
            <p>
              This component is used to render and set the index page. To get
              started you can import it: <br />
              <code>{'import { Index } from "simply-react-router";'}</code> and
              then use <code>Index.Set()</code>, pass your root element in the
              first parameter and use the page component in the second
              parameter.
            </p>
            <h1 className="text-3xl font-bold my-7 mb-4" id="rendering">
              Rules
            </h1>
            <p>
              Your index page won't render if your Router has no routes. If you
              are building your index page and don't have any routes yet, you
              can use a <code>/index</code> path to render your index page as
              well, so now you have an index page and a <code>/index</code>{" "}
              page.
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
