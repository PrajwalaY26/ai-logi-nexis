
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  PackageOpen, 
  BarChart3, 
  Map, 
  Truck, 
  CalendarClock, 
  ShieldCheck, 
  DollarSign, 
  Settings, 
  HelpCircle, 
  LogOut,
  Globe,
  AlertTriangle,
  Bell,
  UserCircle
} from "lucide-react";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  href: string;
  badge?: string;
  notification?: boolean;
}

const mainItems: SidebarItem[] = [
  { icon: LayoutDashboard, label: "Command Center", href: "/dashboard" },
  { icon: PackageOpen, label: "Book Shipment", href: "/bookings", badge: "New" },
  { icon: Truck, label: "Track Shipments", href: "/track", notification: true },
  { icon: Map, label: "Route Optimization", href: "/routes" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Globe, label: "Global Network", href: "/network" },
  { icon: CalendarClock, label: "Schedules", href: "/schedules" },
  { icon: AlertTriangle, label: "Risk Assessment", href: "/risk" },
  { icon: ShieldCheck, label: "Compliance", href: "/compliance" },
  { icon: DollarSign, label: "Financial Insights", href: "/financials" },
];

const bottomItems: SidebarItem[] = [
  { icon: Bell, label: "Notifications", href: "/notifications", notification: true },
  { icon: UserCircle, label: "Profile", href: "/profile" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: HelpCircle, label: "Help & Support", href: "/support" },
  { icon: LogOut, label: "Logout", href: "/logout" },
];

const WBBSidebar = () => {
  const location = useLocation();

  const NavItem = ({ item }: { item: SidebarItem }) => {
    const isActive = location.pathname === item.href;
    const Icon = item.icon;

    return (
      <Link
        to={item.href}
        className={cn(
          "group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200",
          isActive
            ? "bg-nexus-blue/20 text-white"
            : "text-muted-foreground hover:bg-white/5 hover:text-white"
        )}
      >
        <div className={cn(
          "relative flex h-8 w-8 items-center justify-center rounded-md transition-all duration-200", 
          isActive ? "bg-nexus-blue text-white" : "bg-muted text-muted-foreground group-hover:text-white"
        )}>
          {isActive && (
            <div className="absolute inset-0 animate-pulse rounded-md bg-nexus-blue opacity-50"></div>
          )}
          <Icon className="h-5 w-5" />
          {item.notification && (
            <span className="wbb-notification-dot"></span>
          )}
        </div>
        <div className="flex-1">
          <span>{item.label}</span>
        </div>
        {item.badge && (
          <span className="wbb-status-info">
            {item.badge}
          </span>
        )}
      </Link>
    );
  };

  return (
    <aside className="fixed bottom-0 left-0 top-16 z-30 w-64 border-r border-white/10 bg-sidebar/80 backdrop-blur-xl">
      <div className="flex h-full flex-col px-3 py-4">
        <div className="mb-6 px-3">
          <div className="flex items-center gap-2">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-nexus-blue to-nexus-purple">
              <div className="absolute inset-0 animate-pulse rounded-md bg-nexus-blue opacity-30"></div>
              <span className="text-xl font-bold text-white">WBB</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white">
                Way Beyond <span className="text-gradient-blue">Borders</span>
              </span>
              <span className="text-xs text-muted-foreground">AI-Powered Global Logistics</span>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 space-y-1 overflow-y-auto scrollbar-none">
          {mainItems.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </nav>
        
        <div className="mx-3 my-4 h-[1px] bg-white/10"></div>
        
        <div className="space-y-1">
          {bottomItems.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default WBBSidebar;
