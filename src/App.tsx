// import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DottedBackground from "./components/DottedBackground";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ConversationBox from "./components/ConversationBox";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter } from "react-router-dom";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="min-h-screen relative">
            <DottedBackground />
            <CustomCursor />
            <Navbar />
            <main>
              <Hero />
              <div className="container mx-auto px-4 py-16">
                <ConversationBox />
              </div>
              {/* <About /> */}
              <Projects />
              <Skills />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </BrowserRouter>
        {/* <Toaster /> */}
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
