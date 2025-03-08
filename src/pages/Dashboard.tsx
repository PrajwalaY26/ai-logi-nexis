
import React from "react";
import Navbar from "@/components/layout/Navbar";
import WBBSidebar from "@/components/layout/WBBSidebar";
import BookingForm from "@/components/dashboard/BookingForm";
import RouteMap from "@/components/dashboard/RouteMap";
import CostBreakdown from "@/components/dashboard/CostBreakdown";
import CargoClassification from "@/components/dashboard/CargoClassification";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Package, 
  Truck, 
  Clock, 
  AlertTriangle,
  BarChart,
  RefreshCw,
  ChevronRight,
  ArrowRight,
  Globe,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WBBSidebar />
      
      <main className="pt-16 pl-64">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6">
            <div className="animate-fade-in flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white [animation-delay:100ms]">
                  Route Optimization Center
                </h1>
                <p className="mt-2 text-muted-foreground [animation-delay:200ms]">
                  Analyze routes, optimize costs, and make data-driven decisions with AI-powered logistics insights.
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Refresh Data
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  Last Updated: 2 mins ago
                </Button>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card className="bg-card border-white/10 hover:border-white/20 transition-colors animate-fade-in [animation-delay:300ms]">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Routes</p>
                      <h3 className="mt-1 text-2xl font-bold text-white">42</h3>
                    </div>
                    <div className="rounded-full bg-nexus-blue/20 p-2">
                      <Globe className="h-5 w-5 text-nexus-blue" />
                    </div>
                  </div>
                  <div className="mt-1 flex items-center text-xs text-green-400">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    <span>+5 since yesterday</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-white/10 hover:border-white/20 transition-colors animate-fade-in [animation-delay:400ms]">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Cost Savings</p>
                      <h3 className="mt-1 text-2xl font-bold text-white">$14.2K</h3>
                    </div>
                    <div className="rounded-full bg-nexus-purple/20 p-2">
                      <Zap className="h-5 w-5 text-nexus-purple" />
                    </div>
                  </div>
                  <div className="mt-1 flex items-center text-xs text-green-400">
                    <span>12% improvement this month</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-white/10 hover:border-white/20 transition-colors animate-fade-in [animation-delay:500ms]">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Transit Efficiency</p>
                      <h3 className="mt-1 text-2xl font-bold text-white">94%</h3>
                    </div>
                    <div className="rounded-full bg-nexus-teal/20 p-2">
                      <Clock className="h-5 w-5 text-nexus-teal" />
                    </div>
                  </div>
                  <div className="mt-1 flex items-center text-xs text-green-400">
                    <span>+2.5% from last quarter</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-white/10 hover:border-white/20 transition-colors animate-fade-in [animation-delay:600ms]">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Risk Alerts</p>
                      <h3 className="mt-1 text-2xl font-bold text-white">3</h3>
                    </div>
                    <div className="rounded-full bg-red-500/20 p-2">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    </div>
                  </div>
                  <div className="mt-1 flex items-center text-xs text-yellow-400">
                    <span>2 weather, 1 customs delay</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="animate-fade-in [animation-delay:700ms]">
                <Card className="bg-card border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold text-white">Route Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">Origin</label>
                          <div className="flex rounded-md overflow-hidden border border-white/10">
                            <span className="bg-white/5 text-white px-3 py-2 text-sm border-r border-white/10">From</span>
                            <input 
                              type="text" 
                              placeholder="Shanghai, China" 
                              className="flex-1 bg-transparent px-3 py-2 text-sm text-white focus:outline-none"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">Destination</label>
                          <div className="flex rounded-md overflow-hidden border border-white/10">
                            <span className="bg-white/5 text-white px-3 py-2 text-sm border-r border-white/10">To</span>
                            <input 
                              type="text" 
                              placeholder="Rotterdam, Netherlands" 
                              className="flex-1 bg-transparent px-3 py-2 text-sm text-white focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">Cargo Type</label>
                          <select className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-white focus:outline-none">
                            <option value="general">General Cargo</option>
                            <option value="hazardous">Hazardous Materials</option>
                            <option value="perishable">Perishable Goods</option>
                            <option value="electronics">Electronics</option>
                            <option value="automotive">Automotive Parts</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">Weight (kg)</label>
                          <input 
                            type="number" 
                            placeholder="5000" 
                            className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-white focus:outline-none"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Optimization Priority</label>
                        <div className="grid grid-cols-3 gap-2">
                          <Button variant="outline" className="h-9 text-xs bg-nexus-blue/20 text-nexus-blue border-nexus-blue/30">
                            <Zap className="mr-1 h-3 w-3" />
                            Fastest
                          </Button>
                          <Button variant="outline" className="h-9 text-xs">
                            <TrendingDown className="mr-1 h-3 w-3" />
                            Cheapest
                          </Button>
                          <Button variant="outline" className="h-9 text-xs">
                            <ShieldCheck className="mr-1 h-3 w-3" />
                            Lowest Risk
                          </Button>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-nexus-blue hover:bg-nexus-blue/90">
                        Generate Optimal Routes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <RouteMap className="animate-fade-in [animation-delay:800ms]" />
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <CostBreakdown className="animate-fade-in [animation-delay:900ms]" />
              <CargoClassification className="animate-fade-in [animation-delay:1000ms]" />
            </div>
            
            {/* Active Routes */}
            <div className="animate-fade-in [animation-delay:1100ms]">
              <Card className="bg-card border-white/10">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xl font-semibold text-white">Active Routes</CardTitle>
                  <Link to="/routes">
                    <Button variant="link" className="gap-1 p-0 text-nexus-blue hover:text-nexus-blue/80">
                      View All Routes
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto rounded-md">
                    <table className="w-full text-left text-sm">
                      <thead className="border-b border-white/10 text-xs uppercase text-muted-foreground">
                        <tr>
                          <th scope="col" className="px-6 py-3">Route ID</th>
                          <th scope="col" className="px-6 py-3">Path</th>
                          <th scope="col" className="px-6 py-3">Transport Mode</th>
                          <th scope="col" className="px-6 py-3">Status</th>
                          <th scope="col" className="px-6 py-3">ETA</th>
                          <th scope="col" className="px-6 py-3">Cost</th>
                          <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { 
                            id: "RT-1234", 
                            path: "Shanghai → Rotterdam", 
                            mode: "Sea, Rail", 
                            status: "On Schedule", 
                            eta: "Jun 15, 2023",
                            cost: "$3,450",
                            statusColor: "text-green-500 bg-green-500/10" 
                          },
                          { 
                            id: "RT-1235", 
                            path: "Los Angeles → Sydney", 
                            mode: "Air, Truck", 
                            status: "Customs Delay", 
                            eta: "Jun 12, 2023",
                            cost: "$4,780",
                            statusColor: "text-yellow-500 bg-yellow-500/10" 
                          },
                          { 
                            id: "RT-1236", 
                            path: "Dubai → Mumbai", 
                            mode: "Sea, Truck", 
                            status: "Weather Alert", 
                            eta: "Jun 20, 2023",
                            cost: "$2,890",
                            statusColor: "text-red-500 bg-red-500/10" 
                          },
                          { 
                            id: "RT-1237", 
                            path: "Hamburg → New York", 
                            mode: "Air", 
                            status: "On Schedule", 
                            eta: "Jun 11, 2023",
                            cost: "$5,120",
                            statusColor: "text-green-500 bg-green-500/10" 
                          },
                        ].map((route, index) => (
                          <tr key={index} className="border-b border-white/5 bg-transparent hover:bg-white/5">
                            <td className="px-6 py-4 font-medium text-white">{route.id}</td>
                            <td className="px-6 py-4">{route.path}</td>
                            <td className="px-6 py-4">{route.mode}</td>
                            <td className="px-6 py-4">
                              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${route.statusColor}`}>
                                {route.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">{route.eta}</td>
                            <td className="px-6 py-4">{route.cost}</td>
                            <td className="px-6 py-4">
                              <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                                Optimize
                                <ArrowRight className="h-3 w-3" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
