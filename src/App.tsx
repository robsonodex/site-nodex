import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import AdminAppointments from "@/pages/AdminAppointments";
import CancelAppointment from "@/pages/CancelAppointment";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

// Layout wrapper to include Header/Footer on public pages
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout><Index /></PublicLayout>} />
        {/* Admin/Auth routes might not need the public header/footer or might need a different one */}
        <Route path="/login" element={<Login />} />
        <Route path="/painel" element={<AdminAppointments />} />
        <Route path="/cancelar-agendamento" element={<CancelAppointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
