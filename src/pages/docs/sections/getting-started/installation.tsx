import { ThemeSwitcher } from "@/components/ui/themeswitcher";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";

import { Sidebar } from "@/components/layout/sidebar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    type: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    content: "$ npm install simply-react-router",
  },
  {
    type: "text",
    content: "You're done! 🎉🎉",
  },
];

import { DocsBreadcrumb } from "@/components/layout/docs-breadcrumb";

const breadcrumbItems = [
  { href: "/docs/getting-started", name: "Getting Started" },
  { href: "/docs/getting-started/installation", name: "Installation" },
];

export function Installation() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-4 py-8 sm:px-6">
          <div className="prose max-w-3xl">
            <div className="flex items-center justify-between">
              <DocsBreadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="text-4xl font-bold my-2 mb-4" id="installation">
              Installation
            </h1>
            <p>
              Complete the following steps to install Simply React Router:
              <Separator className="my-6" />
            </p>
            <ul className="space-y-6">
              {steps.map((step, index) => (
                <li key={index + 1}>
                  <Badge className={`mr-2 rounded-full`} variant={"secondary"}>
                    {index + 1}
                  </Badge>
                  <span className={step.type}>{step.content}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              Once you've installed Simply React Router, you can start using it
              in your project, if you are having trouble check out some{" "}
              <a
                href="/examples"
                className="underline underline-offset-2 text-primary font-medium"
              >
                examples
              </a>
            </p>
          </div>
        </main>
      </div>
      <footer className="py-4 px-4 sm:px-6">
        <div className="flex">
          <ThemeSwitcher />
          <p className="ml-2 text-sm text-muted-foreground">
            made by{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className="underline underline-offset-2 text-primary font-medium">
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
        </div>
      </footer>
    </div>
  );
}
