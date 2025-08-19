import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex min-h-svh flex-col items-center justify-center p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" size="lg" className="rounded 2xl">
              Action
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Action</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => alert("Button Edit!")}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert("Button View!")}>
              View
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </ThemeProvider>
  );
}

export default App;
