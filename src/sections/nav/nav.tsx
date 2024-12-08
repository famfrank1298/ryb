"use client";

import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import "./nav.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();

  return (
    <div className="nav-container">
      <Logo />
      <div className="nav-buttons">
        <Button
          id="homeBtn"
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </Button>
        <a href="/#about" id="aboutBtn">
          <Button>About Us</Button>
        </a>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Services</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>RYB Services</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span onClick={() => router.push("/tradeline")}>
                  Tradelines
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Credit Repair</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <a href="/#contact" id="contactBtn">
          <Button>Contact Us</Button>
        </a>
      </div>

      <Button
        className="consultation-button"
        id="bookBtn"
        onClick={() => {
          router.push("/consultation");
        }}
      >
        Book Consultation
      </Button>
    </div>
  );
}
