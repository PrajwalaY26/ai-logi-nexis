
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import BookingForm from "@/components/dashboard/BookingForm";
import RouteMap from "@/components/dashboard/RouteMap";
import CostBreakdown from "@/components/dashboard/CostBreakdown";
import CargoClassification from "@/components/dashboard/CargoClassification";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="pt-16 pl-64">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tight text-white [animation-delay:100ms]">
                Logistics Dashboard
              </h1>
              <p className="mt-2 text-muted-foreground [animation-delay:200ms]">
                Monitor shipments, optimize routes, and manage logistics operations.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <BookingForm className="animate-fade-in [animation-delay:300ms]" />
              <RouteMap className="animate-fade-in [animation-delay:400ms]" />
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <CostBreakdown className="animate-fade-in [animation-delay:500ms]" />
              <CargoClassification className="animate-fade-in [animation-delay:600ms]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
