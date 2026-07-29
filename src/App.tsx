import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Meditation from "./pages/Meditation";
import Newsletter from "./pages/Newsletter";
import Contact from "./pages/Contact";
import UCC from "./pages/UCC";
import Staff from "./pages/Staff";
import Partners from "./pages/Partners";
import Happening from "./pages/Happening";
import Community from "./pages/Community";
import ChildrenYouth from "./pages/ChildrenYouth";
import Neighbors from "./pages/Neighbors";
import CommunityHealth from "./pages/CommunityHealth";
import HelpingOthers from "./pages/HelpingOthers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/dover-church">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ucc" element={<UCC />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/happening" element={<Happening />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/children-youth" element={<ChildrenYouth />} />
            <Route path="/community/neighbors" element={<Neighbors />} />
            <Route path="/community/health" element={<CommunityHealth />} />
            <Route path="/helping-others" element={<HelpingOthers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
