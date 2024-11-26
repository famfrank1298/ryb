import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import "./nav.css";

export default function Nav() {
  return (
    <div className="nav-container">
      <Logo />
      <div className="nav-buttons">
        <Button>Services</Button>
        <Button>Contact Us</Button>
        <Button>Book Consultation</Button>
      </div>
    </div>
  );
}
