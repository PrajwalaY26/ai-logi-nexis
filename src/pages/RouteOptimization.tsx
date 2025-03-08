
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import WBBSidebar from "@/components/layout/WBBSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  AlertTriangle, 
  RefreshCw, 
  Filter, 
  Download, 
  Share2, 
  ArrowRight,
  MapPin,
  Ship,
  Truck,
  Plane,
  Train,
  Wind,
  Droplets,
  Umbrella,
  DollarSign,
  Zap,
  Shield
} from "lucide-react";

const RouteOptimization = () => {
  const [activeTab, setActiveTab] = useState<"all" | "air" | "sea" | "land" | "multimodal">("all");
  
  const routes = [
    {
      id: "RT-1234",
      name: "Express Air Route",
      origin: "Shanghai, China",
      destination: "Rotterdam, Netherlands",
      modes: ["Air", "Truck"],
      distance: "11,425 km",
      duration: "3 days, 4 hours",
      cost: "$4,250",
      co2: "2.4 tons",
      reliability: "94%",
      carriers: ["AirFast", "QuickTruck"],
      weather: "Clear",
      weatherIcon: <Wind className="h-4 w-4 text-green-400" />,
      category: "air",
      tags: ["Premium", "Express"],
      iconType: "fast",
      status: "Recommended"
    },
    {
      id: "RT-1235",
      name: "Eco Sea Route",
      origin: "Shanghai, China",
      destination: "Rotterdam, Netherlands",
      modes: ["Sea", "Rail", "Truck"],
      distance: "12,680 km",
      duration: "6 days, 12 hours",
      cost: "$2,780",
      co2: "1.8 tons",
      reliability: "87%",
      carriers: ["OceanLine", "RailConnect", "RegionalTruck"],
      weather: "Mild Rain",
      weatherIcon: <Droplets className="h-4 w-4 text-blue-400" />,
      category: "sea",
      tags: ["Eco-Friendly", "Cost-Effective"],
      iconType: "eco",
      status: "Active"
    },
    {
      id: "RT-1236",
      name: "Balanced Multi-Modal",
      origin: "Shanghai, China",
      destination: "Rotterdam, Netherlands",
      modes: ["Air", "Rail", "Truck"],
      distance: "11,975 km",
      duration: "4 days, 8 hours",
      cost: "$3,950",
      co2: "2.1 tons",
      reliability: "96%",
      carriers: ["SafeAir", "SecureRail", "PremiumTruck"],
      weather: "Stormy",
      weatherIcon: <Umbrella className="h-4 w-4 text-yellow-400" />,
      category: "multimodal",
      tags: ["Reliable", "Protected"],
      iconType: "reliable",
      status: "Active"
    },
    {
      id: "RT-1237",
      name: "Economy Land Bridge",
      origin: "Shanghai, China",
      destination: "Rotterdam, Netherlands",
      modes: ["Rail", "Truck"],
      distance: "11,270 km",
      duration: "8 days, 2 hours",
      cost: "$3,280",
      co2: "1.6 tons",
      reliability: "88%",
      carriers: ["EurAsiaRail", "ConnectTruck"],
      weather: "Clear",
      weatherIcon: <Wind className="h-4 w-4 text-green-400" />,
      category: "land",
      tags: ["Low Carbon", "Economical"],
      iconType: "eco",
      status: "Active"
    },
    {
      id: "RT-1238",
      name: "Premium Express",
      origin: "Shanghai, China",
      destination: "Rotterdam, Netherlands",
      modes: ["Air", "Truck"],
      distance: "11,350 km",
      duration: "2 days, 16 hours",
      cost: "$5,450",
      co2: "2.9 tons",
      reliability: "97%",
      carriers: ["PremiumAir", "PriorityTruck"],
      weather: "Clear",
      weatherIcon: <Wind className="h-4 w-4 text-green-400" />,
      category: "air",
      tags: ["Premium", "Priority"],
      iconType: "fast",
      status: "Active"
    },
    {
      id: "RT-1239",
      name: "Hybrid Sea-Air",
      origin: "Shanghai, China",
      destination: "Rotterdam, Netherlands",
      modes: ["Sea", "Air", "Truck"],
      distance: "12,150 km",
      duration: "5 days, 3 hours",
      cost: "$3,580",
      co2: "2.0 tons",
      reliability: "92%",
      carriers: ["FlexOcean", "ConnectAir", "LastMileTruck"],
      weather: "Mild Rain",
      weatherIcon: <Droplets className="h-4 w-4 text-blue-400" />,
      category: "multimodal",
      tags: ["Flexible", "Balanced"],
      iconType: "reliable",
      status: "Active"
    }
  ];

  const filteredRoutes = activeTab === "all" ? routes : routes.filter(route => route.category === activeTab);

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

  const getMainIcon = (type: string) => {
    switch (type) {
      case 'fast':
        return <Zap className="h-6 w-6 text-nexus-blue" />;
      case 'eco':
        return <DollarSign className="h-6 w-6 text-nexus-purple" />;
      case 'reliable':
        return <Shield className="h-6 w-6 text-nexus-teal" />;
      default:
        return <Truck className="h-6 w-6 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WBBSidebar />
      
      <main className="pt-16 pl-64">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">
                  Route Optimization
                </h1>
                <p className="mt-2 text-muted-foreground">
                  Compare and select optimal shipping routes based on cost, time, and reliability factors
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
            
            {/* Route Filters Tabs */}
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={activeTab === "all" ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveTab("all")}
                className={activeTab === "all" ? "bg-nexus-blue hover:bg-nexus-blue/90" : ""}
              >
                All Routes
              </Button>
              <Button 
                variant={activeTab === "air" ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveTab("air")}
                className={activeTab === "air" ? "bg-nexus-blue hover:bg-nexus-blue/90" : ""}
              >
                <Plane className="mr-1 h-3 w-3" />
                Air Routes
              </Button>
              <Button 
                variant={activeTab === "sea" ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveTab("sea")}
                className={activeTab === "sea" ? "bg-nexus-blue hover:bg-nexus-blue/90" : ""}
              >
                <Ship className="mr-1 h-3 w-3" />
                Sea Routes
              </Button>
              <Button 
                variant={activeTab === "land" ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveTab("land")}
                className={activeTab === "land" ? "bg-nexus-blue hover:bg-nexus-blue/90" : ""}
              >
                <Train className="mr-1 h-3 w-3" />
                Land Routes
              </Button>
              <Button 
                variant={activeTab === "multimodal" ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveTab("multimodal")}
                className={activeTab === "multimodal" ? "bg-nexus-blue hover:bg-nexus-blue/90" : ""}
              >
                <Truck className="mr-1 h-3 w-3" />
                Multi-Modal
              </Button>
            </div>
            
            {/* Routes Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredRoutes.map((route) => (
                <Card key={route.id} className="bg-card border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{route.id}</span>
                          {route.status === "Recommended" && (
                            <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">
                              Recommended
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg font-semibold text-white mt-1">{route.name}</CardTitle>
                        <div className="flex gap-1 mt-1">
                          {route.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="bg-white/5 text-white/80">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-full bg-white/5 p-2.5 backdrop-blur-sm border border-white/10">
                        {getMainIcon(route.iconType)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3 w-3 text-nexus-blue" />
                          <span className="text-white">{route.origin}</span>
                        </div>
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3 w-3 text-nexus-purple" />
                          <span className="text-white">{route.destination}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Duration:</span>
                            <div className="flex items-center text-white">
                              <Clock className="mr-1 h-3 w-3 text-nexus-blue" />
                              {route.duration}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Cost:</span>
                            <div className="flex items-center text-white">
                              <DollarSign className="mr-1 h-3 w-3 text-nexus-purple" />
                              {route.cost}
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Reliability:</span>
                            <span className="text-white">{route.reliability}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">CO₂:</span>
                            <span className="text-white">{route.co2}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
                        <div className="flex items-center gap-1">
                          {route.weatherIcon}
                          <span className="text-muted-foreground">{route.weather}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {route.modes.map((mode, idx) => (
                            <React.Fragment key={idx}>
                              {idx > 0 && <span className="text-muted-foreground mx-0.5">→</span>}
                              <span className="flex items-center justify-center h-5 w-5 rounded-full bg-white/10">
                                {getTransportIcon(mode)}
                              </span>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between gap-2 mt-2">
                        <Button variant="outline" size="sm" className="flex-1 h-8 text-xs">
                          Compare
                        </Button>
                        <Button size="sm" className="flex-1 h-8 text-xs bg-nexus-blue hover:bg-nexus-blue/90">
                          Select Route
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RouteOptimization;
