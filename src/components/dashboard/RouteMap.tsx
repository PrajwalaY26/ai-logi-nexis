
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Droplets, 
  Zap, 
  Shield, 
  Umbrella, 
  Wind, 
  ArrowRight, 
  TrendingDown, 
  BarChart3, 
  AlertTriangle,
  MapPin,
  Truck,
  Ship,
  Plane,
  Train
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RouteMap: React.FC<{ className?: string }> = ({ className }) => {
  const [selectedRoute, setSelectedRoute] = useState<"fastest" | "cheapest" | "reliable">("fastest");

  const routes = [
    {
      id: "fastest",
      name: "Express Route",
      icon: Zap,
      color: "text-nexus-blue",
      bgColor: "bg-nexus-blue/20",
      borderColor: "border-nexus-blue/30",
      duration: "3 days, 4 hours",
      cost: "$4,250",
      co2: "2.4 tons",
      modes: ["Air", "Truck"],
      weather: "Clear",
      weatherIcon: <Wind className="h-4 w-4 text-green-400" />,
      weatherStatus: "Optimal",
      customsFee: "$320",
      portCharges: "$480",
      fuelSurcharge: "$190",
      riskLevel: "Low",
      reliability: "94%",
      fuelEfficiency: "Medium",
      carriers: ["AirFast", "QuickTruck"],
      customsComplexity: "Medium",
      transitPoints: ["Shanghai", "Tokyo", "Los Angeles", "Rotterdam"],
      advantages: ["Fastest transit time", "Priority handling", "Real-time tracking"],
      disadvantages: ["Higher fuel consumption", "Premium carrier rates", "Limited flexibility"]
    },
    {
      id: "cheapest",
      name: "Economy Route",
      icon: DollarSign,
      color: "text-nexus-purple",
      bgColor: "bg-nexus-purple/20",
      borderColor: "border-nexus-purple/30",
      duration: "6 days, 12 hours",
      cost: "$2,780",
      co2: "1.8 tons",
      modes: ["Sea", "Rail", "Truck"],
      weather: "Mild Rain",
      weatherIcon: <Droplets className="h-4 w-4 text-blue-400" />,
      weatherStatus: "Minimal Delay",
      customsFee: "$280",
      portCharges: "$350",
      fuelSurcharge: "$120",
      riskLevel: "Medium",
      reliability: "87%",
      fuelEfficiency: "High",
      carriers: ["OceanLine", "RailConnect", "RegionalTruck"],
      customsComplexity: "Medium",
      transitPoints: ["Shanghai", "Singapore", "Suez Canal", "Rotterdam"],
      advantages: ["Lowest total cost", "Efficient fuel usage", "Multiple carrier options"],
      disadvantages: ["Longer transit time", "More handoff points", "Weather vulnerabilities"]
    },
    {
      id: "reliable",
      name: "Balanced Route",
      icon: Shield,
      color: "text-nexus-teal",
      bgColor: "bg-nexus-teal/20",
      borderColor: "border-nexus-teal/30",
      duration: "4 days, 8 hours",
      cost: "$3,950",
      co2: "2.1 tons",
      modes: ["Air", "Rail", "Truck"],
      weather: "Stormy",
      weatherIcon: <Umbrella className="h-4 w-4 text-yellow-400" />,
      weatherStatus: "Alternate Route",
      customsFee: "$310",
      portCharges: "$420",
      fuelSurcharge: "$170",
      riskLevel: "Low",
      reliability: "96%",
      fuelEfficiency: "Medium",
      carriers: ["SafeAir", "SecureRail", "PremiumTruck"],
      customsComplexity: "Low",
      transitPoints: ["Shanghai", "Dubai", "Frankfurt", "Rotterdam"],
      advantages: ["Robust contingency plans", "Priority customs clearance", "Advanced risk mitigation"],
      disadvantages: ["Moderate cost premium", "Limited carrier selection", "Fixed schedule"]
    },
  ];

  const selectedRouteDetails = routes.find((r) => r.id === selectedRoute);

  const getTransportIcon = (mode: string) => {
    switch (mode.toLowerCase()) {
      case 'air':
        return <Plane className="h-4 w-4" />;
      case 'sea':
        return <Ship className="h-4 w-4" />;
      case 'truck':
        return <Truck className="h-4 w-4" />;
      case 'rail':
        return <Train className="h-4 w-4" />;
      default:
        return <Truck className="h-4 w-4" />;
    }
  };

  return (
    <div className={cn("nexus-card-purple space-y-6 p-6", className)}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">AI Route Optimization</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Data-driven routes optimized for logistics providers based on time, cost, and reliability
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-nexus-purple/20 text-nexus-purple">
            Real-time Data
          </Badge>
          <Badge variant="outline" className="bg-nexus-blue/20 text-nexus-blue">
            AI Optimized
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {routes.map((route) => {
          const RouteIcon = route.icon;
          const isSelected = selectedRoute === route.id;
          
          return (
            <button
              key={route.id}
              onClick={() => setSelectedRoute(route.id as any)}
              className={cn(
                "relative flex flex-col rounded-lg border p-4 transition-all duration-300 hover:scale-[1.02]",
                isSelected
                  ? `${route.borderColor} ${route.bgColor} shadow-lg`
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              )}
            >
              {isSelected && (
                <div className="absolute right-2 top-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                </div>
              )}
              
              <div className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full",
                route.bgColor
              )}>
                <RouteIcon className={cn("h-6 w-6", route.color)} />
              </div>
              
              <h3 className="mt-3 text-base font-medium text-white">{route.name}</h3>
              
              <div className="mt-3 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Transit Time:</span>
                  <span className="font-medium text-white">{route.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Cost:</span>
                  <span className={`font-medium ${route.color}`}>{route.cost}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Reliability:</span>
                  <span className="font-medium text-white">{route.reliability}</span>
                </div>
              </div>
              
              <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
                <div className="flex items-center">
                  {route.weatherIcon}
                  <span className="ml-1">{route.weatherStatus}</span>
                </div>
                <div className="flex items-center gap-1">
                  {route.modes.map((mode, idx) => (
                    <span key={idx} className="flex items-center">
                      {idx > 0 && <span className="mx-0.5">→</span>}
                      {getTransportIcon(mode)}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Map Display */}
      <div className="relative overflow-hidden rounded-lg bg-muted/50 p-1">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br from-background via-background to-muted border border-white/10">
          {/* Map Placeholder - This would be replaced with actual map component */}
          <div className="h-full w-full p-4">
            <div className="flex h-full flex-col items-center justify-center">
              <div className="relative flex h-full w-full items-center justify-center">
                {/* Map Background */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTI5MzMiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-30"></div>
                
                {/* Origin Point */}
                <div className="absolute left-[15%] top-[40%] flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-nexus-blue shadow-[0_0_10px_rgba(0,98,255,0.7)]"></div>
                  <span className="mt-1 text-[10px] bg-background/80 px-1 rounded text-white">Shanghai</span>
                </div>
                
                {/* Destination Point */}
                <div className="absolute right-[15%] top-[60%] flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-nexus-purple shadow-[0_0_10px_rgba(110,54,229,0.7)]"></div>
                  <span className="mt-1 text-[10px] bg-background/80 px-1 rounded text-white">Rotterdam</span>
                </div>
                
                {/* Transit Points */}
                {selectedRouteDetails?.transitPoints.slice(1, -1).map((point, index) => {
                  const total = selectedRouteDetails.transitPoints.length - 2;
                  const position = {
                    left: `${25 + (index * 50 / total)}%`,
                    top: selectedRoute === "cheapest" ? "65%" : selectedRoute === "fastest" ? "45%" : "50%"
                  };
                  
                  return (
                    <div
                      key={index}
                      style={position}
                      className="absolute flex flex-col items-center"
                    >
                      <div className="h-3 w-3 rounded-full bg-white/50 shadow-[0_0_5px_rgba(255,255,255,0.7)]"></div>
                      <span className="mt-1 text-[10px] bg-background/80 px-1 rounded text-white">{point}</span>
                    </div>
                  );
                })}
                
                {/* Route Line */}
                <svg className="absolute inset-0 h-full w-full" style={{ filter: 'drop-shadow(0 0 4px rgba(110, 54, 229, 0.4))' }}>
                  <path
                    d={selectedRoute === "fastest" 
                      ? "M 15% 40% C 40% 30%, 60% 70%, 85% 60%" 
                      : selectedRoute === "cheapest"
                      ? "M 15% 40% C 30% 60%, 70% 80%, 85% 60%"
                      : "M 15% 40% C 40% 50%, 60% 50%, 85% 60%"}
                    stroke={selectedRoute === "fastest" 
                      ? "#0062FF" 
                      : selectedRoute === "cheapest"
                      ? "#6E36E5"
                      : "#00CFD5"}
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6,3"
                    className="animate-pulse"
                  />
                </svg>
                
                {/* Transport Mode Indicators */}
                {selectedRouteDetails?.modes.map((mode, index) => {
                  const position = {
                    left: `${25 + (index * 25)}%`,
                    top: selectedRoute === "cheapest" ? "70%" : selectedRoute === "fastest" ? "40%" : "50%"
                  };
                  
                  return (
                    <div
                      key={index}
                      className={`absolute flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                        selectedRoute === "fastest" 
                          ? "bg-nexus-blue text-white" 
                          : selectedRoute === "cheapest"
                          ? "bg-nexus-purple text-white"
                          : "bg-nexus-teal text-white"
                      }`}
                      style={position}
                    >
                      {getTransportIcon(mode)}
                    </div>
                  );
                })}
                
                {/* Weather Alert for Routes */}
                {selectedRoute === "reliable" && (
                  <div className="absolute right-[40%] top-[45%] animate-pulse">
                    <div className="rounded-lg bg-yellow-500/30 p-1 shadow-lg backdrop-blur-sm">
                      <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    </div>
                  </div>
                )}
                
                {selectedRoute === "cheapest" && (
                  <div className="absolute right-[60%] top-[65%] animate-pulse">
                    <div className="rounded-lg bg-blue-500/30 p-1 shadow-lg backdrop-blur-sm">
                      <Droplets className="h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Route Details Overlay */}
        <div className="absolute bottom-4 right-4 max-w-md rounded-lg bg-background/90 p-4 shadow-lg backdrop-blur-md border border-white/10">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-white">Route Details</h4>
            <div className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-xs">
              {selectedRouteDetails?.weatherIcon}
              <span>{selectedRouteDetails?.weatherStatus}</span>
            </div>
          </div>
          
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Origin:</span>
                <span className="font-medium text-white">Shanghai, China</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-muted-foreground">Destination:</span>
                <span className="font-medium text-white">Rotterdam, Netherlands</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-muted-foreground">Distance:</span>
                <span className="font-medium text-white">11,425 km</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-muted-foreground">CO₂ Emissions:</span>
                <span className="font-medium text-white">{selectedRouteDetails?.co2}</span>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Customs Fee:</span>
                <span className="font-medium text-white">{selectedRouteDetails?.customsFee}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-muted-foreground">Port Charges:</span>
                <span className="font-medium text-white">{selectedRouteDetails?.portCharges}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-muted-foreground">Fuel Surcharge:</span>
                <span className="font-medium text-white">{selectedRouteDetails?.fuelSurcharge}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-muted-foreground">Transport Modes:</span>
                <span className="font-medium text-white">{selectedRouteDetails?.modes.join(", ")}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-2 border-t border-white/10 pt-2">
            <div className="text-xs">
              <span className="text-muted-foreground">Key Advantages:</span>
              <ul className="mt-1 space-y-1 pl-3 list-disc">
                {selectedRouteDetails?.advantages.slice(0, 2).map((adv, i) => (
                  <li key={i} className="text-white">{adv}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-3 flex justify-between border-t border-white/10 pt-3">
            <Button size="sm" variant="outline" className="h-8 gap-1 text-xs">
              <BarChart3 className="h-3 w-3" />
              Historical Data
            </Button>
            <Button size="sm" className="h-8 gap-1 text-xs bg-nexus-blue hover:bg-nexus-blue/80">
              Select Route
              <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteMap;
