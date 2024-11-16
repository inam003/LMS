import { Button } from "../ui/button";
import lmsImg from "../../../public/lms.jpg";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src={lmsImg}
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white pt-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
          Welcome to Our Learning Platform
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 mx-2 text-center max-w-2xl">
          Empower your future with our cutting-edge courses and expert
          instructors
        </p>
        <Link to={"/SignUp"}>
          <Button size="lg" variant="secondary" className="mb-16 text-md">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};
