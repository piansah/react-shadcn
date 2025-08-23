import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export function ProfileCard() {
  return (
    <Card className="p-6 shadow-lg rounded-2xl">
      <CardContent className="flex flex-col items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage
            src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
            alt="Avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-semibold mt-4 text-center">Ghenn</h1>
        <p className="text-sm text-muted-foreground text-center">
          Web Developer
        </p>
        <div className="flex justify-center mt-4 gap-2">
          <Button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Follow
          </Button>
          <Button variant="outline" className="px-4 py-2 text-sm font-semibold">
            Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
