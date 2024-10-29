import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";

import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { BookIcon } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

function setTheme(theme: string) {
  document.getElementById("html")?.setAttribute("class", theme);
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme) {
  setTheme(savedTheme);
} else if (prefersDark) {
  setTheme("dark");
}

export function Docs() {
  return (
    <div>
      <Header />
      <section className="flex m-12 text-black dark:text-[#ecedee] bg-opacity-5">
        <div>
          <p className="flex my-3 gap-3">
            <span className="bg-gradient-to-r from-[#ef25f7] to-[#c23ff7] bg-clip-text text-transparent">
              Documentation
            </span>
          </p>
          <h1 className="text-5xl font-bold max-w-3xl">Simply React Router</h1>
          <p className="text-muted-foreground text-xl my-6 mb-3">
            Learn how to use Simply React Router
          </p>
          <div className="flex gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.npmjs.com/package/simply-react-router">
                    <Button variant={"ghost"} size="icon">
                      <img src="https://skillicons.dev/icons?i=npm" alt="" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>visit npm page</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://github.com/myferr/simply-react-router">
                    <Button variant={"ghost"} size="icon">
                      <img src="https://skillicons.dev/icons?i=github" alt="" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>visit github page</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <BookIcon className="size-5" />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="p-2">
                          <a href="/docs/getting-started">
                            <Button
                              variant={"ghost"}
                              size={"sm"}
                              className="w-40 justify-start"
                            >
                              Getting Started
                            </Button>
                          </a>
                          <a href="/docs/components">
                            <Button
                              variant={"ghost"}
                              size={"sm"}
                              className="w-40 justify-start"
                            >
                              Components
                            </Button>
                          </a>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </TooltipTrigger>
                <TooltipContent>Documentation</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </section>
    </div>
  );
}
