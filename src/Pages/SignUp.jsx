import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <Card className="w-full max-w-sm mx-auto mt-52">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter className="pb-3">
        <Link to={"/Login"} className="w-full">
          <Button className="w-full">Sign Up</Button>
        </Link>
      </CardFooter>
      <div className="text-center text-sm mb-4">
        Already have an account?{" "}
        <Link to="/Login" className="underline font-semibold">
          Login
        </Link>
      </div>
    </Card>
  );
}
