import { Button } from "../ui/button";
import whiteLogo from "../../../public/whiteLogo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="absolute top-3 z-50 w-full">
      <div className="flex h-16 items-center justify-between pl-2 lg:pl-4 pr-5 md:pr-7 lg:pr-9">
        <div className="flex items-center space-x-4">
          <Link to={"/"}>
            <img src={whiteLogo} alt="Logo" width={70} />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to={"/SignUp"}>
            <Button variant="secondary">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
