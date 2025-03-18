
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';
import { cn } from '@/lib/utils';

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="relative min-h-screen bg-background flex">
      <DashboardSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      
      <div className={cn(
        "flex-1 flex flex-col transition-all duration-300 ease-in-out",
        sidebarOpen ? "md:ml-64" : "md:ml-16"
      )}>
        <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
