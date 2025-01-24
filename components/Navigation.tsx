'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { useState } from "react";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignOutButton } from "@clerk/nextjs";
import NavCont from "./navbar-content";

const navItems = [
  { href: '/profiles', label: 'Discover' },
  { href: '/applications', label: 'Applications' },
]

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setIsOpen = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  }

  return (
    <>
      <Navbar
        isBordered
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Navbar Brand with Logo */}
        <NavbarBrand>
          <Link href="/" aria-label="Co.Found">
            {/* Logo can be added here */}
          </Link>
        </NavbarBrand>

        {/* Desktop Navbar Links */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link href={item.href} className="text-gray-300 hover:text-white">
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>
            <NavbarItem>
              <NavCont/>
            </NavbarItem>
            <Unauthenticated>
              <Link href="/auth">
                <Button className="glass-button" color="secondary" size="md">
                  Get Started
                </Button>
              </Link>
            </Unauthenticated>
            <Authenticated>
                <Dropdown backdrop="blur">
                  <DropdownTrigger>
                    <Button variant="bordered">
                      {/* Icon can be added here */}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions" variant="faded">
                    <DropdownItem key="dashboard">
                      <Link href="/dashboard">
                        <Button className="glass-button" color="secondary" size="md">
                          Dashboard
                        </Button>
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="signout"><SignOutButton/></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
            </Authenticated>
          </NavbarItem>
        </NavbarContent>

        <Authenticated>
          <Button
            isIconOnly
            variant="light"
            onPress={() => setIsOpen(true)}
            className="relative md:hidden"
          >
            {/* Icon can be added here */}
          </Button>
        </Authenticated>
        {/* Mobile Menu Toggle */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
          onPress={() => setIsMenuOpen(!isMenuOpen)}
        />

        {/* Mobile Menu */}
        <NavbarMenu className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                href={item.href}
                className="block w-full text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Unauthenticated>
              <Link href="/auth">
                <Button
                  className="glass-button w-full mt-2"
                  color="secondary"
                  size="md"
                >
                  Get Started
                </Button>
              </Link>
            </Unauthenticated>
            <Authenticated>
              <NavbarMenuItem>
                <Link href="/dashboard">
                  <Button className="glass-button" color="secondary" size="md">
                    Dashboard
                  </Button>
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <SignOutButton/>
              </NavbarMenuItem>
            </Authenticated>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
