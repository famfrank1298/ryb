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
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </Button>
        <a href="/#about">
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
                <span>Tradelines</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span>Credit Repair</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <a href="/#contact">
          <Button>Contact Us</Button>
        </a>

        <Button
          onClick={() => {
            router.push("/consultation");
          }}
        >
          Book Consultation
        </Button>
      </div>
    </div>
  );
}
