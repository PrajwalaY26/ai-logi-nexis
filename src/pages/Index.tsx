
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, CheckCircle, BarChart3, Truck, Zap, Globe, DollarSign, Shield, Ship, Plane, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/dashboard/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/10 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-x-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-nexus-blue">
              <div className="absolute inset-0 animate-pulse rounded-md bg-nexus-blue opacity-50"></div>
              <span className="text-xl font-bold text-white">W</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gradient-blue">Way Beyond</span>
              <span className="text-white">Borders</span>
              <span className="text-gradient-teal">AI</span>
            </span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-x-8">
              <li>
                <Link to="#features" className="text-sm font-medium text-white hover:text-nexus-blue transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#solutions" className="text-sm font-medium text-white hover:text-nexus-blue transition-colors duration-200">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="#pricing" className="text-sm font-medium text-white hover:text-nexus-blue transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#about" className="text-sm font-medium text-white hover:text-nexus-blue transition-colors duration-200">
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            <Link to="/login" className="text-sm font-medium text-white hover:text-nexus-blue transition-colors duration-200">
              Sign In
            </Link>
            <Button className="nexus-button-primary">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="px-4 pt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  AI-Powered 
                  <span className="text-gradient-blue block"> Route Optimization</span>
                  for Logistics Providers
                </h1>
                <p className="mt-6 text-xl text-muted-foreground">
                  Advanced route planning and cost optimization tool helping logistics companies save time and money with AI-driven recommendations.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/dashboard">
                    <Button size="lg" className="nexus-button-primary w-full sm:w-auto">
                      Start Optimizing Routes
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 w-full sm:w-auto">
                      Watch Demo
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`h-10 w-10 rounded-full border-2 border-background bg-nexus-blue/20 flex items-center justify-center text-white text-xs font-medium`}>
                        {['DHL', 'MSC', 'FDX', 'UPS'][i-1]}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Trusted by 500+ logistics companies worldwide
                  </span>
                </div>
              </div>
              <div className="animate-fade-in [animation-delay:300ms] rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm shadow-xl">
                <div className="rounded-lg bg-gradient-to-br from-nexus-blue/20 via-background to-nexus-purple/20 p-8">
                  <div className="relative">
                    <div className="absolute -top-10 -left-10 h-40 w-40 bg-nexus-blue/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-nexus-purple/20 rounded-full blur-3xl"></div>
                    <div className="relative rounded-lg border border-white/10 bg-black/40 backdrop-blur-xl">
                      <div className="flex items-center border-b border-white/10 p-4">
                        <div className="flex space-x-1">
                          <div className="h-3 w-3 rounded-full bg-red-500"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="mx-auto text-sm font-medium text-white">Route Optimization Dashboard</div>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { icon: Clock, label: "Time Savings", value: "37%" },
                            { icon: DollarSign, label: "Cost Reduction", value: "24%" },
                            { icon: Zap, label: "Efficiency Gain", value: "42%" }
                          ].map((stat, i) => (
                            <div key={i} className="rounded-lg bg-white/5 p-3 backdrop-blur-sm border border-white/10">
                              <stat.icon className="h-5 w-5 text-nexus-blue mb-2" />
                              <div className="text-xs text-muted-foreground">{stat.label}</div>
                              <div className="text-lg font-bold text-white">{stat.value}</div>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { icon: Ship, label: "Sea Route" },
                            { icon: Plane, label: "Air Route" }
                          ].map((route, i) => (
                            <div key={i} className={`rounded-lg p-3 backdrop-blur-sm border ${i === 0 ? 'border-nexus-purple/30 bg-nexus-purple/10' : 'border-nexus-blue/30 bg-nexus-blue/10'}`}>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <route.icon className={`h-5 w-5 ${i === 0 ? 'text-nexus-purple' : 'text-nexus-blue'}`} />
                                  <span className="text-sm font-medium text-white">{route.label}</span>
                                </div>
                                <CheckCircle className={`h-4 w-4 ${i === 0 ? 'text-nexus-purple' : 'text-nexus-blue'}`} />
                              </div>
                              <div className="mt-2 text-xs text-muted-foreground">
                                Shanghai → Rotterdam
                              </div>
                              <div className="mt-1 flex justify-between items-center">
                                <span className="text-xs text-white">
                                  {i === 0 ? '$2,780' : '$4,250'}
                                </span>
                                <span className="text-xs text-white">
                                  {i === 0 ? '6d 12h' : '3d 4h'}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-white">Optimized Route Map</span>
                            <Globe className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="aspect-[16/9] rounded-md bg-gradient-to-br from-background via-background to-muted border border-white/10">
                            <div className="h-full w-full flex items-center justify-center">
                              <div className="w-3/4 h-[2px] bg-nexus-blue/50 relative">
                                <div className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-nexus-blue"></div>
                                <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-nexus-purple"></div>
                                <div className="absolute animate-pulse left-1/2 -translate-x-1/2 -top-2 h-3 w-3 rounded-full bg-nexus-teal"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24" id="features">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex animate-fade-in items-center rounded-full bg-white/5 px-4 py-1 text-sm text-nexus-purple backdrop-blur-sm">
                <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-nexus-purple"></span>
                Logistics Intelligence Platform
              </div>
              
              <h2 className="animate-fade-in text-3xl font-bold tracking-tight text-white sm:text-4xl [animation-delay:200ms]">
                Transforming Logistics With
                <span className="text-gradient-purple"> Route Optimization</span>
              </h2>
              
              <p className="mt-4 animate-fade-in text-muted-foreground [animation-delay:300ms]">
                Our platform combines AI-powered route analysis with real-time data to help logistics providers make better decisions and maximize profitability.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="nexus-card-blue p-6 animate-fade-in [animation-delay:400ms]">
                <div className="mb-4 inline-flex rounded-lg bg-nexus-blue/20 p-3">
                  <Clock className="h-6 w-6 text-nexus-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white">Time-Optimized Routing</h3>
                <p className="mt-2 text-muted-foreground">
                  AI-powered route selection that minimizes transit time while considering traffic, border delays, and port congestion.
                </p>
                <ul className="mt-4 space-y-2">
                  {["Real-time transit updates", "Dynamic re-routing", "Priority customs clearance"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-nexus-blue" />
                      <span className="text-sm text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="nexus-card-purple p-6 animate-fade-in [animation-delay:500ms]">
                <div className="mb-4 inline-flex rounded-lg bg-nexus-purple/20 p-3">
                  <DollarSign className="h-6 w-6 text-nexus-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white">Cost Optimization</h3>
                <p className="mt-2 text-muted-foreground">
                  Detailed cost breakdowns with AI-driven recommendations to maximize margins on every shipment.
                </p>
                <ul className="mt-4 space-y-2">
                  {["Carrier rate negotiation", "Fuel surcharge optimization", "Consolidation opportunities"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-nexus-purple" />
                      <span className="text-sm text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="nexus-card-teal p-6 animate-fade-in [animation-delay:600ms]">
                <div className="mb-4 inline-flex rounded-lg bg-nexus-teal/20 p-3">
                  <Shield className="h-6 w-6 text-nexus-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white">Risk Management</h3>
                <p className="mt-2 text-muted-foreground">
                  Proactive risk assessment with weather, political, and security monitoring for all active routes.
                </p>
                <ul className="mt-4 space-y-2">
                  {["Weather impact analysis", "Geopolitical risk alerts", "Insurance optimization"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-nexus-teal" />
                      <span className="text-sm text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/dashboard">
                <Button className="nexus-button-primary" size="lg">
                  Explore Route Optimization
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-nexus-blue/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Optimize Your Logistics Network?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join forward-thinking logistics providers that are using Way Beyond Borders AI
                to optimize routes, reduce costs, and maximize profits.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link to="/dashboard">
                  <Button className="nexus-button-primary" size="lg">
                    Start Optimizing Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="border-white/10 bg-white/5 hover:bg-white/10">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center gap-x-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-nexus-blue">
                <div className="absolute inset-0 animate-pulse rounded-md bg-nexus-blue opacity-50"></div>
                <span className="text-xl font-bold text-white">W</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-gradient-blue">Way Beyond</span>
                <span className="text-white">Borders</span>
                <span className="text-gradient-teal">AI</span>
              </span>
            </div>
            
            <div className="mt-6 flex space-x-8 md:mt-0">
              <Link to="#" className="text-sm text-muted-foreground hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-white transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Way Beyond Borders AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
