
import React, { useState } from "react";
import WBBNavbar from "@/components/layout/WBBNavbar";
import WBBSidebar from "@/components/layout/WBBSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  ChevronRight,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Truck,
  Ship,
  Plane,
  BarChart3,
  BoxSelect,
  Sparkles
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create a New Shipment",
    description: "Start by entering the origin, destination, and cargo details for your shipment.",
    icon: BoxSelect,
    color: "text-nexus-blue",
  },
  {
    id: 2,
    title: "AI Route Optimization",
    description: "Our AI analyzes thousands of possible routes, considering weather, customs, traffic, and more.",
    icon: Sparkles,
    color: "text-nexus-purple",
  },
  {
    id: 3,
    title: "Multi-Modal Transport",
    description: "Choose from air, sea, rail, and road transport options based on cost, time, and sustainability.",
    icon: Truck,
    color: "text-nexus-teal",
  },
  {
    id: 4,
    title: "Real-Time Tracking",
    description: "Monitor your shipment's progress with real-time updates and alerts for any disruptions.",
    icon: Ship,
    color: "text-nexus-blue",
  },
  {
    id: 5,
    title: "Cost Optimization",
    description: "Our platform continuously analyzes your shipping patterns to suggest cost-saving opportunities.",
    icon: BarChart3,
    color: "text-nexus-purple",
  },
];

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [playing, setPlaying] = useState(false);

  const goToStep = (step: number) => {
    if (step >= 1 && step <= steps.length) {
      setCurrentStep(step);
    }
  };

  const togglePlayPause = () => {
    setPlaying(!playing);
    // In a real implementation, this would control an actual demo video or animation
  };

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
                  Interactive Demo
                </h1>
                <p className="mt-2 text-muted-foreground [animation-delay:200ms]">
                  Experience how Way Beyond Borders revolutionizes global logistics
                </p>
              </div>
            </div>
            
            <Card className="animate-fade-in [animation-delay:300ms]">
              <CardHeader className="pb-2">
                <Tabs defaultValue="guided">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Platform Walkthrough</CardTitle>
                    <TabsList>
                      <TabsTrigger value="guided">Guided Tour</TabsTrigger>
                      <TabsTrigger value="video">Video Demo</TabsTrigger>
                    </TabsList>
                  </div>
                </Tabs>
              </CardHeader>
              <CardContent>
                <TabsContent value="guided" className="mt-0">
                  <div className="grid gap-6 md:grid-cols-5">
                    {/* Steps sidebar */}
                    <div className="md:col-span-1 border-r border-white/10 pr-4">
                      <div className="space-y-1">
                        {steps.map((step) => (
                          <button
                            key={step.id}
                            onClick={() => goToStep(step.id)}
                            className={`w-full flex items-center rounded-md px-3 py-2 text-sm transition-colors ${
                              currentStep === step.id
                                ? "bg-white/10 text-white"
                                : "text-muted-foreground hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <div className={`mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                              currentStep === step.id ? "bg-nexus-blue text-white" : "bg-muted text-muted-foreground"
                            }`}>
                              {currentStep > step.id ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                <span>{step.id}</span>
                              )}
                            </div>
                            <span>{step.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Demo content */}
                    <div className="md:col-span-4">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">
                          Step {currentStep}: {steps[currentStep - 1].title}
                        </h2>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => goToStep(currentStep - 1)}
                            disabled={currentStep === 1}
                          >
                            Previous
                          </Button>
                          <Button 
                            className="nexus-button-primary" 
                            size="sm" 
                            onClick={() => goToStep(currentStep + 1)}
                            disabled={currentStep === steps.length}
                          >
                            Next
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="rounded-lg bg-muted/50 p-6 border border-white/10">
                        <div className="flex flex-col items-center text-center mb-6">
                          <div className={`rounded-full p-4 mb-4 ${
                            steps[currentStep - 1].id === 1 ? "bg-nexus-blue/20" :
                            steps[currentStep - 1].id === 2 ? "bg-nexus-purple/20" :
                            "bg-nexus-teal/20"
                          }`}>
                            {React.createElement(steps[currentStep - 1].icon, { 
                              className: `h-10 w-10 ${steps[currentStep - 1].color}` 
                            })}
                          </div>
                          <h3 className="text-xl font-medium text-white mb-2">{steps[currentStep - 1].title}</h3>
                          <p className="text-muted-foreground max-w-lg">{steps[currentStep - 1].description}</p>
                        </div>
                        
                        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br from-background via-background to-muted border border-white/10">
                          <div className="flex h-full flex-col items-center justify-center p-6">
                            <div className="relative flex h-full w-full items-center justify-center">
                              {/* This would be replaced with actual demo content */}
                              <div className="text-center">
                                <p className="text-sm text-muted-foreground mb-4">
                                  Interactive demo visualization would be displayed here
                                </p>
                                <div className="flex items-center justify-center gap-4">
                                  <Button size="icon" variant="outline" className="rounded-full h-10 w-10 p-0">
                                    <SkipBack className="h-4 w-4" />
                                  </Button>
                                  <Button size="icon" onClick={togglePlayPause} variant="default" className="rounded-full h-14 w-14 p-0 bg-nexus-blue hover:bg-nexus-blue/80">
                                    {playing ? (
                                      <Pause className="h-6 w-6" />
                                    ) : (
                                      <Play className="h-6 w-6 ml-1" />
                                    )}
                                  </Button>
                                  <Button size="icon" variant="outline" className="rounded-full h-10 w-10 p-0">
                                    <SkipForward className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-between items-center">
                          <p className="text-sm text-muted-foreground">
                            Step {currentStep} of {steps.length}
                          </p>
                          <div className="flex gap-1">
                            {steps.map((step) => (
                              <Button
                                key={step.id}
                                variant="ghost"
                                size="icon"
                                className={`w-2 h-2 p-0 rounded-full ${
                                  currentStep === step.id ? "bg-nexus-blue" : "bg-white/20"
                                }`}
                                onClick={() => goToStep(step.id)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="video" className="mt-0">
                  <div className="space-y-6">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br from-background via-background to-muted border border-white/10">
                      <div className="flex h-full flex-col items-center justify-center p-6">
                        <div className="text-center">
                          <Play className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                          <h3 className="text-xl font-medium text-white">Video Walkthrough</h3>
                          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                            A comprehensive video demonstration of the Way Beyond Borders platform would be displayed here,
                            showing the entire workflow from booking to delivery.
                          </p>
                          <Button className="nexus-button-primary mt-4">
                            <Play className="mr-2 h-4 w-4" />
                            Watch Full Video
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-3">
                      {[
                        { 
                          title: "Booking Process", 
                          duration: "3:24", 
                          icon: BoxSelect,
                          color: "bg-nexus-blue/20 text-nexus-blue" 
                        },
                        { 
                          title: "Route Optimization", 
                          duration: "4:16", 
                          icon: Sparkles,
                          color: "bg-nexus-purple/20 text-nexus-purple" 
                        },
                        { 
                          title: "Cost Analysis", 
                          duration: "2:58", 
                          icon: BarChart3,
                          color: "bg-nexus-teal/20 text-nexus-teal" 
                        },
                      ].map((video, i) => (
                        <Card key={i} className="wbb-card-interactive flex flex-col">
                          <CardContent className="flex flex-1 flex-col p-4">
                            <div className={`rounded-full p-2 w-fit mb-3 ${video.color.split(' ')[0]}`}>
                              {React.createElement(video.icon, { 
                                className: `h-5 w-5 ${video.color.split(' ')[1]}` 
                              })}
                            </div>
                            <h3 className="text-base font-medium">{video.title}</h3>
                            <p className="mt-1 text-xs text-muted-foreground">Duration: {video.duration}</p>
                            <div className="mt-auto pt-3">
                              <Button variant="ghost" size="sm" className="w-full justify-between px-3 py-2 h-auto text-xs text-nexus-blue">
                                Watch Video
                                <Play className="h-3 w-3 ml-1" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
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

export default Demo;

