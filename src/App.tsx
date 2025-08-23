import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./components/ui/select";
import { Button } from "./components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex min-h-svh flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle>Feedback Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name" className="mb-2">Name</Label>
              <Input name="name" id="name" placeholder="Enter your name" />
            </div>
            <div>
              <Label htmlFor="email" className="mb-2">Email</Label>
              <Input name="email" id="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="message" className="mb-2">Message</Label>
              <Textarea
                name="message"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <div>
              <Label htmlFor="division" className="mb-2">Division</Label>
              <Select>
                <SelectTrigger id="division">
                  <SelectValue placeholder="Select your division" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hr">HR</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Submit Feedback</Button>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
