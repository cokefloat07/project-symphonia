
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboard Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/tasks" element={<Dashboard />} /> {/* Placeholder for now */}
            <Route path="/dashboard/roadmap" element={<Dashboard />} /> {/* Placeholder for now */}
            <Route path="/dashboard/team" element={<Dashboard />} /> {/* Placeholder for now */}
            <Route path="/dashboard/documents" element={<Dashboard />} /> {/* Placeholder for now */}
            <Route path="/dashboard/analytics" element={<Dashboard />} /> {/* Placeholder for now */}
            <Route path="/dashboard/settings" element={<Dashboard />} /> {/* Placeholder for now */}
          </Route>
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
