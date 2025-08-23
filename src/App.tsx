import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import ProfileCard from "./components/profile-card";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex min-h-svh flex-col items-center justify-center p-4">
        <ProfileCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
