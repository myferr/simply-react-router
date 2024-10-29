import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { ThemeSwitcher } from "@/components/ui/themeswitcher";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

import { Sidebar } from "@/components/layout/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DocsBreadcrumb } from "@/components/layout/docs-breadcrumb";

const breadcrumbItems = [
  { href: "/docs/getting-started", name: "Getting Started" },
  { href: "/docs/getting-started/introduction", name: "Introduction" },
];

export function Introduction() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-4 py-8 sm:px-6">
          <div className="prose max-w-3xl">
            <div className="flex items-center justify-between">
              <DocsBreadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="text-4xl font-bold my-2 mb-4" id="introduction">
              Introduction
            </h1>
            <p>
              <code>simply-react-router</code> is a library that simplifies the
              process of adding routing to your React applications with a clean
              & easy-to-use syntax approach.
              <Accordion type={"multiple"} className="my-4 space-y-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is this open-source?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Of course! The entirety of the source code is open-source
                      on{" "}
                      <a
                        href="https://npmjs.com/package/simply-react-router"
                        className="underline underline-offset-2 text-primary font-medium"
                      >
                        npm
                      </a>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What does an example look like?
                  </AccordionTrigger>
                  <AccordionContent>
                    <Tabs defaultValue="javascript">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                        <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                      </TabsList>
                      <TabsContent value="javascript">
                        <Card>
                          <CardContent className="space-y-2">
                            <p>
                              <pre>
                                <code>
                                  {`
import { Router, Index } from 'simply-react-router'
                          
import { App } from './pages/App.jsx'
import { AboutMe } from './pages/AboutMe.jsx'
                          
import './index.css'
                          
const rootElement = document.getElementById('root')
                          
Index.Set(rootElement, <App />)
                          
Router.Render(
  rootElement,
  Router.Routes({
    '/index': <App />,
    '/about': <AboutMe />,
  })
)
`}
                                </code>
                              </pre>
                            </p>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="typescript">
                        <Card>
                          <CardContent className="space-y-2">
                            <p>
                              <pre>
                                <code>
                                  {`
import { Router, Index } from 'simply-react-router'
                          
import { App } from './pages/App.tsx'
import { AboutMe } from './pages/AboutMe.tsx'
                          
import './index.css'
                          
const rootElement = document.getElementById('root')
                          
Index.Set(rootElement, <App />)
                          
Router.Render(
  rootElement,
  Router.Routes({
    '/index': <App />,
    '/about': <AboutMe />,
  })
)
`}
                                </code>
                              </pre>
                            </p>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
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
