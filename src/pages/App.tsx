import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowDownRight, Copy, Check } from "lucide-react";
import { Header } from "@/components/layout/header";
import { useState } from "react";

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

export function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("npm install simply-react-router");
      setCopied(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header />
      <section className="flex m-12 text-black dark:text-[#ecedee] bg-opacity-5">
        <div>
          <h1 className="text-5xl font-bold max-w-3xl">
            Make your{" "}
            <span className="bg-gradient-to-r from-[#ef25f7] to-[#c23ff7] bg-clip-text text-transparent">
              next app
            </span>
            <br />
            with Simply
            <br />
            React Router.
          </h1>
          <p className="text-muted-foreground text-xl my-6 mb-3">
            A simplistic routing library for React.
          </p>
          <div className="flex gap-4">
            <Button className="rounded-full mt-4 py-[25px] px-8 bg-[#3471ff] hover:bg-[#2e5bff] transition duration-300 text-primary font-normal text-lg">
              Get Started <ArrowDownRight />
            </Button>
            <div className="gap-4 py-[8px] inline-flex items-center justify-center rounded-full mt-4 px-4 bg-white/5 text-primary">
              <div className="pointer-events-none">
                <code className="mr-2">$</code>
                <code>{`npm install simply-react-router`}</code>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      onClick={handleCopy}
                    >
                      {copied ? <Check /> : <Copy />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {copied ? "Copied!" : "Copy to clipboard"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
