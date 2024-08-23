"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ui/toggle-mode";
import GithubButton from "./ui/GithubButton";
import { LoginDialog } from "./LoginDialog";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center fixed top-0 left-0 right-0 z-50 pt-2 gap-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Link Shortener
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/listPage" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Shortened Links
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>{" "}
            <NavigationMenuItem>
              <LoginDialog />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-col md:flex-row justify-end items-center fixed top-0 left-0 md:left-auto md:right-0 z-50 pt-2 gap-1 pr-4">
        <ModeToggle />
        <GithubButton />
      </div>
    </>
  );
};

export default Navbar;
