import { Badge } from "../ui/badge";
import {
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuIndicator,
  NavigationMenuLink,
} from "../ui/navigation-menu";

function getVersion(): Promise<string> {
  return fetch("https://registry.npmjs.org/simply-react-router/latest")
    .then((data) => {
      return data.json();
    })
    .then((pkg) => {
      return pkg.version;
    });
}

const latestVersion: string = await getVersion();

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <NavigationMenu className="w-full p-3 sm:p-6">
        <NavigationMenuList className="w-full gap-6">
          <NavigationMenuIndicator />
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="font-bold text-md justify-start mr-20"
            >
              Simply React Router
              <Badge className="ml-2 rounded-full" variant={"outline"}>
                v{latestVersion}
              </Badge>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/docs"
              className="font-medium text-sm bottom-[0.5px] relative"
            >
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Examples</NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
