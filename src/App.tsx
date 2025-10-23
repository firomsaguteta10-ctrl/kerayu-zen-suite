import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { DashboardLayout } from "@/components/dashboard-layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import FrontDesk from "./pages/FrontDesk";
import Rooms from "./pages/Rooms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
            <Route path="/front-desk" element={<DashboardLayout><FrontDesk /></DashboardLayout>} />
            <Route path="/rooms" element={<DashboardLayout><Rooms /></DashboardLayout>} />
            {/* Placeholder routes for other modules */}
            <Route path="/bookings" element={<DashboardLayout><div className="p-6">Bookings module coming soon</div></DashboardLayout>} />
            <Route path="/finance" element={<DashboardLayout><div className="p-6">Finance module coming soon</div></DashboardLayout>} />
            <Route path="/housekeeping" element={<DashboardLayout><div className="p-6">Housekeeping module coming soon</div></DashboardLayout>} />
            <Route path="/restaurant" element={<DashboardLayout><div className="p-6">Restaurant module coming soon</div></DashboardLayout>} />
            <Route path="/employees" element={<DashboardLayout><div className="p-6">Employee management coming soon</div></DashboardLayout>} />
            <Route path="/settings" element={<DashboardLayout><div className="p-6">Settings coming soon</div></DashboardLayout>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
