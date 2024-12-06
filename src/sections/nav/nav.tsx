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

export default function Nav() {
  return (
    <div className="nav-container">
      <Logo />
      <div className="nav-buttons">
        <Button>Home</Button>
        <Button>About Us</Button>

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

        <Button>Contact Us</Button>
        <Button>Book Consultation</Button>
      </div>
    </div>
  );
}
