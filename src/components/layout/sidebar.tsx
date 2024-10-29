import { Separator } from "../ui/separator";

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r bg-background px-4 py-6 sm:block">
      <div className="flex items-center gap-2 text-muted-foreground">
        <p className="text-sm font-medium hover:bg-muted hover:text-foreground transition duration-200 cursor-pointer py-2 px-4 rounded-md">
          <a href="/">Home</a>
        </p>
      </div>
      <Separator orientation="horizontal" className="my-4" />
      <div>
        <h4 className="mb-2 text-sm font-semibold">Getting Started</h4>
        <ul className="space-y-1 text-sm">
          <li>
            <a
              href="/docs/getting-started/introduction"
              className="block rounded-md px-2 py-1 hover:bg-muted hover:text-foreground"
            >
              Introduction
            </a>
          </li>
          <li>
            <a
              href="/docs/getting-started/installation"
              className="block rounded-md px-2 py-1 hover:bg-muted hover:text-foreground"
            >
              Installation
            </a>
          </li>
        </ul>
      </div>

      <nav className="space-y-6 mt-6">
        <div>
          <h4 className="mb-2 text-sm font-semibold">Components</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="/docs/components/router"
                className="block rounded-md px-2 py-1 hover:bg-muted hover:text-foreground"
              >
                Router
              </a>
            </li>
            <li>
              <a
                href="/docs/components/routes"
                className="block rounded-md px-2 py-1 hover:bg-muted hover:text-foreground"
              >
                Routes
              </a>
            </li>
            <li>
              <a
                href="/docs/components/index"
                className="block rounded-md px-2 py-1 hover:bg-muted hover:text-foreground"
              >
                Index
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
