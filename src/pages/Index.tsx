import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Index() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <Hero />
                <Services />
                <Plans />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
