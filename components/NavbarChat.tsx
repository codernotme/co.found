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
];

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      {/* Navbar Brand */}
      <NavbarBrand>
        <Link href="/" aria-label="Co.Found">
          {/* Add your logo here */}
        </Link>
      </NavbarBrand>

      {/* Desktop Navbar */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link href={item.href} className="text-gray-300 hover:text-white">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <NavCont />
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
                {/* Add user icon */}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="faded">
              <DropdownItem key="dashboard">
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </DropdownItem>
              <DropdownItem key="signout">
                <SignOutButton />
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Authenticated>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <NavbarMenu className={`flex flex-col gap-2 ${isMenuOpen ? "block" : "hidden"}`}>
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
            <Link href="/dashboard" className="w-full">
              <Button
                className="glass-button w-full"
                color="secondary"
                size="md"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Button>
            </Link>
            <div className="w-full">
              <SignOutButton />
            </div>
          </Authenticated>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
