
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, Settings, Search, HelpCircle, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-x-6">
          <Link to="/" className="flex items-center gap-x-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-nexus-blue">
              <div className="absolute inset-0 animate-pulse rounded-md bg-nexus-blue opacity-50"></div>
              <span className="text-xl font-bold text-white">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gradient-blue">Logi</span>
              <span className="text-white">Nexus</span>
              <span className="text-gradient-teal">AI</span>
            </span>
          </Link>

          <div className="ml-6 hidden md:block">
            <div className="flex rounded-md bg-muted px-3 py-1.5">
              <Search className="mr-2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search shipments, routes..."
                className="w-64 bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-8">
            <li>
              <Link to="/dashboard" className="text-sm font-medium text-white hover:text-nexus-blue transition-colors duration-200">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/bookings" className="text-sm font-medium text-white hover:text-nexus-blue transition-colors duration-200">
                Bookings
              </Link>
            </li>
            <li>
              <Link to="/analytics" className="text-sm font-medium text-white hover:text-nexus-blue transition-colors duration-200">
                Analytics
              </Link>
            </li>
            <li>
              <Link to="/integrations" className="text-sm font-medium text-white hover:text-nexus-blue transition-colors duration-200">
                Integrations
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-x-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
            <Settings className="h-5 w-5" />
          </Button>

          <div className="ml-2 h-8 w-[1px] bg-white/10"></div>

          <Button variant="outline" size="sm" className="gap-2 border-white/10 bg-muted hover:bg-muted/80">
            <User className="h-4 w-4" />
            <span>John Doe</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
