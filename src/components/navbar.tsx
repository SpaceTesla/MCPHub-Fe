"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-background">
      <div className="container flex h-16 items-center mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 bg-primary rounded-sm flex items-center justify-center">
              <div className="h-4 w-4 bg-background" />
            </div>
            <span className="font-bold text-lg text-foreground">
              MCP Registry
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-foreground" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link
              href="/servers"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/servers" || pathname.startsWith("/servers/")
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              Servers
            </Link>
            <Link
              href="/docs"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/docs"
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              Docs
            </Link>
            <Link
              href="/community"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/community"
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              Community
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              className="w-64 rounded-md bg-muted pl-8 focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
          <ThemeToggle />
          <Button
            variant="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            New Server
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <span className="sr-only">User menu</span>
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-xs text-foreground">U</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
