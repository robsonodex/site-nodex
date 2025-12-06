import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Serviços", href: "#services" },
    { name: "Planos", href: "#plans" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (!isHome) return; // Handle cross-page navigation later if needed
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    {/* Placeholder for Logo, using text for now or simple icon */}
                    <div className="font-bold text-2xl tracking-tighter text-primary">
                        NODEX
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={isHome ? item.href : `/${item.href}`}
                            onClick={(e) => {
                                if (isHome) {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }
                            }}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="outline" className="gap-2" asChild>
                        <a href="https://wa.me/5521965532247" target="_blank" rel="noopener noreferrer">
                            <Phone className="w-4 h-4" />
                            (21) 96553-2247
                        </a>
                    </Button>
                    <Button asChild>
                        <Link to="/painel">Área do Cliente</Link>
                    </Button>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col gap-6 mt-10">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={isHome ? item.href : `/${item.href}`}
                                        onClick={(e) => {
                                            if (isHome) {
                                                e.preventDefault();
                                                scrollToSection(item.href);
                                            }
                                        }}
                                        className="text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <div className="flex flex-col gap-4 mt-4">
                                    <Button variant="outline" className="w-full gap-2" asChild>
                                        <a href="https://wa.me/5521965532247" target="_blank" rel="noopener noreferrer">
                                            <Phone className="w-4 h-4" />
                                            WhatsApp
                                        </a>
                                    </Button>
                                    <Button className="w-full" asChild>
                                        <Link to="/painel">Área do Cliente</Link>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
