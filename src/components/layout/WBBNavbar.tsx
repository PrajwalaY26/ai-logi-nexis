
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Bell, 
  Search, 
  Menu, 
  X, 
  Globe, 
  ChevronDown, 
  ExternalLink,
  MessageSquare,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const WBBNavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/70 backdrop-blur-xl border-b border-white/10">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          {/* Search Bar */}
          <div className={cn(
            "relative mx-4 hidden transition-all duration-300 md:block",
            isSearchOpen ? "w-96" : "w-64"
          )}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search shipments, routes, locations..."
                className="w-full rounded-md border border-white/10 bg-muted/80 py-2 pl-10 pr-4 text-sm text-white placeholder:text-muted-foreground focus:border-nexus-blue/50 focus:ring-1 focus:ring-nexus-blue/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
              />
              {searchQuery && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            {isSearchOpen && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-1 rounded-md border border-white/10 bg-card shadow-lg">
                <div className="p-2">
                  <div className="text-xs font-medium text-muted-foreground mb-2">Recent Searches</div>
                  <div className="space-y-1">
                    {["Shanghai to Rotterdam", "Express Air Cargo", "Hazmat Regulations"].map((item, i) => (
                      <button
                        key={i}
                        className="w-full rounded px-2 py-1.5 text-left text-sm hover:bg-white/5 flex items-center"
                        onClick={() => setSearchQuery(item)}
                      >
                        <Search className="mr-2 h-3 w-3 text-muted-foreground" />
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side Menu */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">English</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Spanish</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Chinese</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Arabic</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Help Button */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <HelpCircle className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">3</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Notifications</span>
                  <Button variant="ghost" size="sm" className="h-auto px-2 py-1 text-xs">
                    Mark all as read
                  </Button>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {[
                  { title: "Customs Delay", message: "Shipment #WBB-1234 is delayed at Shanghai customs", time: "10 min ago", type: "warning" },
                  { title: "Route Optimized", message: "AI has found a faster route for your shipment to Rotterdam", time: "25 min ago", type: "success" },
                  { title: "New Message", message: "You have a new message from the carrier", time: "1 hour ago", type: "info" }
                ].map((notification, i) => (
                  <DropdownMenuItem key={i} className="flex cursor-pointer flex-col items-start p-4 focus:bg-white/5">
                    <div className="flex w-full items-center justify-between">
                      <span className={cn(
                        "text-sm font-medium",
                        notification.type === "warning" ? "text-yellow-400" : 
                        notification.type === "success" ? "text-green-400" : 
                        "text-nexus-blue"
                      )}>
                        {notification.title}
                      </span>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{notification.message}</p>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer justify-center py-2 text-sm font-medium text-nexus-blue">
                  View All Notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback className="bg-nexus-purple/20 text-nexus-purple">JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center p-3">
                  <Avatar className="h-9 w-9 mr-3">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback className="bg-nexus-purple/20 text-nexus-purple">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-white">John Doe</p>
                    <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/profile" className="flex w-full items-center">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/settings" className="flex w-full items-center">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link to="/support" className="flex w-full items-center">Support</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-400">
                  <Link to="/logout" className="flex w-full items-center">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WBBNavbar;
