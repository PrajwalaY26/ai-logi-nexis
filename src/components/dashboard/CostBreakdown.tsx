
import React from "react";
import { cn } from "@/lib/utils";
import { CreditCard, DollarSign, Clock, Info, ArrowRight, TrendingDown, AlertCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CostBreakdownProps {
  className?: string;
}

const CostBreakdown: React.FC<CostBreakdownProps> = ({ className }) => {
  const costs = [
    { name: "Freight Charges", customer: 1850, company: 1650, percent: 45, savings: 200 },
    { name: "Port Handling", customer: 650, company: 580, percent: 15, savings: 70 },
    { name: "Customs Clearance", customer: 430, company: 410, percent: 10, savings: 20 },
    { name: "Duty & Taxes", customer: 780, company: 780, percent: 18, savings: 0 },
    { name: "Insurance", customer: 320, company: 280, percent: 8, savings: 40 },
    { name: "Documentation", customer: 220, company: 180, percent: 4, savings: 40 },
  ];

  const totalCustomer = costs.reduce((acc, cost) => acc + cost.customer, 0);
  const totalCompany = costs.reduce((acc, cost) => acc + cost.company, 0);
  const totalSavings = costs.reduce((acc, cost) => acc + cost.savings, 0);
  const profit = totalCustomer - totalCompany;
  const marginPercent = Math.round((profit / totalCustomer) * 100);

  return (
    <div className={cn("nexus-card-teal p-6", className)}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Cost Analysis</h2>
          <p className="text-xs text-muted-foreground mt-1">AI-powered cost breakdown and optimization</p>
        </div>
        <span className="rounded-full bg-nexus-teal/20 px-3 py-1 text-xs font-medium text-nexus-teal">
          ${totalSavings} Optimized
        </span>
      </div>

      <div className="space-y-6">
        {/* Cost Bars */}
        <div className="space-y-4">
          {costs.map((cost, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{cost.name}</span>
                <div className="flex items-center">
                  <span className="font-medium text-white">${cost.company}</span>
                  {cost.savings > 0 && (
                    <span className="ml-2 flex items-center text-xs text-green-400">
                      <TrendingDown className="mr-0.5 h-3 w-3" />
                      ${cost.savings}
                    </span>
                  )}
                </div>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-nexus-teal/80"
                  style={{ width: `${cost.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm border border-white/10">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Market Rate</h3>
              <CreditCard className="h-4 w-4 text-nexus-teal" />
            </div>
            <p className="text-2xl font-bold text-white">${totalCustomer}</p>
          </div>

          <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm border border-white/10">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Optimized Cost</h3>
              <DollarSign className="h-4 w-4 text-nexus-purple" />
            </div>
            <p className="text-2xl font-bold text-white">${totalCompany}</p>
          </div>

          <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm border border-white/10">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Profit Margin</h3>
              <Clock className="h-4 w-4 text-nexus-blue" />
            </div>
            <div className="flex items-baseline space-x-2">
              <p className="text-2xl font-bold text-white">${profit}</p>
              <span className="text-sm font-medium text-green-400">+{marginPercent}%</span>
            </div>
          </div>
        </div>

        {/* Optimization Recommendations */}
        <div className="rounded-lg bg-nexus-blue/10 p-4 border border-nexus-blue/20">
          <div className="flex">
            <Info className="mr-3 h-5 w-5 flex-shrink-0 text-nexus-blue" />
            <div>
              <h4 className="text-sm font-medium text-white">Cost Optimization Opportunities</h4>
              <div className="mt-2 space-y-2 text-xs">
                <div className="flex items-start">
                  <Check className="mr-2 h-3 w-3 mt-0.5 text-green-400" />
                  <p className="text-muted-foreground">
                    <span className="text-white">Volume consolidation:</span> Combine with RT-1236 to save $180 on freight charges
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 h-3 w-3 mt-0.5 text-green-400" />
                  <p className="text-muted-foreground">
                    <span className="text-white">Alternative carrier:</span> Switch to CarrierB for leg 2 to save $140
                  </p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="mr-2 h-3 w-3 mt-0.5 text-yellow-400" />
                  <p className="text-muted-foreground">
                    <span className="text-white">Port congestion:</span> Consider Dubai route to avoid $220 in potential delay charges
                  </p>
                </div>
              </div>
              <Button variant="link" size="sm" className="mt-2 h-auto p-0 text-xs text-nexus-blue">
                Apply all optimizations
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostBreakdown;
