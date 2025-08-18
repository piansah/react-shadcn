import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button
        variant="outline"
        size="lg"
        onClick={() => alert("Button clicked!")}
        className="rounded 2xl"
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
