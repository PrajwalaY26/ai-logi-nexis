
import React, { useState } from "react";
import WBBNavbar from "@/components/layout/WBBNavbar";
import WBBSidebar from "@/components/layout/WBBSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Package, 
  Truck, 
  Ship, 
  Plane, 
  MapPin, 
  ArrowRight,
  Clock,
  Calendar,
  AlertTriangle,
  BarChart,
  FileText,
  Camera,
  RefreshCw,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from "lucide-react";

// Mock tracking data
const trackingSteps = [
  { 
    id: 1, 
    status: "Order Confirmed", 
    location: "Hong Kong", 
    timestamp: "Jun 10, 2023 - 09:34 AM", 
    completed: true,
    icon: PackageIcon,
    details: "Order processed and ready for shipment"
  },
  { 
    id: 2, 
    status: "Customs Clearance", 
    location: "Hong Kong", 
    timestamp: "Jun 11, 2023 - 02:15 PM", 
    completed: true,
    icon: FileText,
    details: "Package cleared customs inspection"
  },
  { 
    id: 3, 
    status: "In Transit (Air)", 
    location: "Hong Kong → Singapore", 
    timestamp: "Jun 12, 2023 - 10:47 AM", 
    completed: true,
    icon: Plane,
    details: "Package in transit via air freight"
  },
  { 
    id: 4, 
    status: "Arrived at Hub", 
    location: "Singapore", 
    timestamp: "Jun 13, 2023 - 06:22 AM", 
    completed: true,
    icon: MapPin,
    details: "Package arrived at distribution center"
  },
  { 
    id: 5, 
    status: "In Transit (Sea)", 
    location: "Singapore → Rotterdam", 
    timestamp: "Jun 14, 2023 - 03:49 PM", 
    completed: true,
    icon: Ship,
    details: "Package in transit via sea freight"
  },
  { 
    id: 6, 
    status: "Weather Delay", 
    location: "Indian Ocean", 
    timestamp: "Jun 18, 2023 - 11:30 AM", 
    completed: true,
    icon: AlertTriangle,
    details: "Shipment delayed due to adverse weather conditions",
    alert: true
  },
  { 
    id: 7, 
    status: "Route Optimized", 
    location: "Indian Ocean", 
    timestamp: "Jun 18, 2023 - 03:15 PM", 
    completed: true,
    icon: Sparkles,
    details: "AI optimized route to avoid weather system",
    success: true
  },
  { 
    id: 8, 
    status: "In Transit (Sea)", 
    location: "Indian Ocean → Suez Canal", 
    timestamp: "Jun 22, 2023 - 08:10 AM", 
    completed: true,
    icon: Ship,
    details: "Package in transit via sea freight"
  },
  { 
    id: 9, 
    status: "Customs Processing", 
    location: "Rotterdam, Netherlands", 
    timestamp: "Jun 29, 2023 - 09:45 AM", 
    completed: false,
    icon: FileText,
    details: "Package undergoing customs inspection",
    current: true
  },
  { 
    id: 10, 
    status: "Last Mile Delivery", 
    location: "Rotterdam, Netherlands", 
    timestamp: "Expected: Jul 1, 2023", 
    completed: false,
    icon: Truck,
    details: "Package ready for final delivery"
  },
  { 
    id: 11, 
    status: "Delivered", 
    location: "Rotterdam, Netherlands", 
    timestamp: "Expected: Jul 1, 2023", 
    completed: false,
    icon: CheckCircle2,
    details: "Package delivered to recipient"
  }
];

function PackageIcon(props: any) {
  return <Package {...props} />;
}

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState("WBB-9876-5432");
  const [activeTab, setActiveTab] = useState("timeline");

  return (
    <div className="min-h-screen bg-background">
      <WBBNavbar />
      <WBBSidebar />
      
      <main className="pt-16 pl-64">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6">
            <div className="animate-fade-in flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white [animation-delay:100ms]">
                  Shipment Tracking
                </h1>
                <p className="mt-2 text-muted-foreground [animation-delay:200ms]">
                  Real-time tracking and insights for your global shipments
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  Last Updated: 2 mins ago
                </Button>
              </div>
            </div>
            
            {/* Tracking Search */}
            <Card className="animate-fade-in [animation-delay:300ms]">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      className="pl-10"
                      placeholder="Enter tracking number (e.g., WBB-1234-5678)"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                    />
                  </div>
                  <Button className="nexus-button-primary">
                    Track Shipment
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Shipment Overview */}
            <div className="grid gap-6 md:grid-cols-3 animate-fade-in [animation-delay:400ms]">
              {/* Shipment Details */}
              <Card className="md:col-span-2">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">Shipment Details</CardTitle>
                    <Badge variant="outline" className="bg-nexus-blue/20 text-nexus-blue">
                      In Transit
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Tracking Number</div>
                      <div className="text-lg font-semibold">{trackingNumber}</div>
                      
                      <div className="mt-4 text-sm text-muted-foreground mb-1">Shipment Type</div>
                      <div className="flex items-center">
                        <Truck className="mr-2 h-4 w-4 text-nexus-purple" />
                        <span>Multimodal (Air + Sea + Truck)</span>
                      </div>
                      
                      <div className="mt-4 text-sm text-muted-foreground mb-1">Total Distance</div>
                      <div>12,456 km</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Origin</div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-nexus-blue" />
                        <span>Hong Kong, China</span>
                      </div>
                      
                      <div className="mt-4 text-sm text-muted-foreground mb-1">Destination</div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-nexus-teal" />
                        <span>Rotterdam, Netherlands</span>
                      </div>
                      
                      <div className="mt-4 text-sm text-muted-foreground mb-1">Estimated Arrival</div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-nexus-purple" />
                        <span>July 1, 2023</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="text-sm text-muted-foreground mb-3">Shipment Progress</div>
                    <div className="relative">
                      <div className="absolute top-0 left-0 bottom-0 w-1 bg-white/10 rounded-full"></div>
                      <div className="absolute top-0 left-0 bottom-0 w-1 bg-nexus-blue rounded-full" style={{ height: '60%' }}></div>
                      <div className="flex justify-between">
                        <div className="text-xs text-muted-foreground">Departed</div>
                        <div className="text-xs text-muted-foreground">In Transit</div>
                        <div className="text-xs text-muted-foreground">Customs</div>
                        <div className="text-xs text-muted-foreground">Delivery</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Alerts & Updates */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Alerts & Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-yellow-500/10 p-3 border border-yellow-500/20">
                      <div className="flex">
                        <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-white">Weather Delay</h4>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Severe weather in the Indian Ocean has caused a 2-day delay.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-lg bg-nexus-blue/10 p-3 border border-nexus-blue/20">
                      <div className="flex">
                        <Sparkles className="h-5 w-5 text-nexus-blue mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-white">AI Route Optimization</h4>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Our AI has rerouted your shipment to avoid further weather delays.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-lg bg-muted/30 p-3 border border-white/10">
                      <div className="flex">
                        <Clock className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-white">Customs Processing</h4>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Your shipment is currently being processed by customs in Rotterdam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Detailed Tracking Information */}
            <Card className="animate-fade-in [animation-delay:500ms]">
              <CardHeader className="pb-2">
                <Tabs defaultValue="timeline" className="w-full" onValueChange={setActiveTab}>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Shipment Tracking Details</CardTitle>
                    <TabsList>
                      <TabsTrigger value="timeline">Timeline</TabsTrigger>
                      <TabsTrigger value="map">Map View</TabsTrigger>
                      <TabsTrigger value="documents">Documents</TabsTrigger>
                    </TabsList>
                  </div>
                </Tabs>
              </CardHeader>
              <CardContent>
                <TabsContent value="timeline" className="mt-0">
                  <div className="relative">
                    <div className="absolute top-0 bottom-0 left-7 w-0.5 bg-white/10"></div>
                    <div className="space-y-8">
                      {trackingSteps.map((step) => (
                        <div key={step.id} className="relative flex">
                          <div className={cn(
                            "z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border",
                            step.completed ? "bg-nexus-blue/20 border-nexus-blue" : 
                            step.current ? "bg-yellow-500/20 border-yellow-500" : 
                            "bg-white/5 border-white/20"
                          )}>
                            {step.alert ? (
                              <AlertCircle className="h-6 w-6 text-yellow-400" />
                            ) : step.success ? (
                              <Sparkles className="h-6 w-6 text-nexus-blue" />
                            ) : (
                              <step.icon className={cn(
                                "h-6 w-6", 
                                step.completed ? "text-nexus-blue" : 
                                step.current ? "text-yellow-400" : 
                                "text-muted-foreground"
                              )} />
                            )}
                          </div>
                          <div className="ml-6 pb-8">
                            <div className="flex items-center">
                              <h3 className={cn(
                                "text-base font-medium",
                                step.alert ? "text-yellow-400" :
                                step.success ? "text-nexus-blue" :
                                step.current ? "text-white" : 
                                step.completed ? "text-white" : "text-muted-foreground"
                              )}>
                                {step.status}
                              </h3>
                              {step.current && (
                                <span className="ml-2 inline-flex h-2 w-2 animate-ping rounded-full bg-yellow-400"></span>
                              )}
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">{step.location}</p>
                            <p className="mt-0.5 text-xs text-muted-foreground">{step.timestamp}</p>
                            <p className="mt-2 text-sm">{step.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="map" className="mt-0">
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br from-background via-background to-muted border border-white/10">
                    <div className="flex h-full flex-col items-center justify-center p-6">
                      <div className="text-center">
                        <Map className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                        <h3 className="text-xl font-medium text-white">Interactive Map View</h3>
                        <p className="mt-2 text-sm text-muted-foreground max-w-md">
                          An interactive map showing real-time location and route with weather overlays 
                          would be displayed here, using a mapping library like Mapbox or Google Maps.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="documents" className="mt-0">
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      { name: "Commercial Invoice", icon: FileText, date: "Jun 10, 2023" },
                      { name: "Packing List", icon: FileText, date: "Jun 10, 2023" },
                      { name: "Bill of Lading", icon: FileText, date: "Jun 11, 2023" },
                      { name: "Certificate of Origin", icon: FileText, date: "Jun 11, 2023" },
                      { name: "Customs Declaration", icon: FileText, date: "Jun 11, 2023" },
                      { name: "Insurance Certificate", icon: FileText, date: "Jun 12, 2023" }
                    ].map((doc, i) => (
                      <Card key={i} className="wbb-card-interactive flex flex-col">
                        <CardContent className="flex flex-1 flex-col p-4">
                          <doc.icon className="h-10 w-10 text-muted-foreground mb-3" />
                          <h3 className="text-base font-medium">{doc.name}</h3>
                          <p className="mt-1 text-xs text-muted-foreground">Added: {doc.date}</p>
                          <div className="mt-auto pt-3">
                            <Button variant="ghost" size="sm" className="w-full justify-between px-3 py-2 h-auto text-xs text-nexus-blue">
                              View Document
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrackShipment;
