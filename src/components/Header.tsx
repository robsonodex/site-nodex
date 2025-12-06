import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "5521965532247";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os serviços da Nodex.";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Início", href: "#hero" },
        { name: "Serviços", href: "#services" },
        { name: "Planos", href: "#plans" },
        { name: "Contato", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        if (href.startsWith("#")) {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/assets/nodex-logo.png"
                            alt="Nodex Logo"
                            className="h-14 w-14 md:h-16 md:w-16 transition-transform group-hover:scale-110"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Social Icons + CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://instagram.com/nodexsolucoes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                            aria-label="Instagram"
                        >
                            <img src="/assets/instagram-icon.png" alt="Instagram" className="h-6 w-6" />
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                            aria-label="WhatsApp"
                        >
                            <img src="/assets/whatsapp-icon.png" alt="WhatsApp" className="h-6 w-6" />
                        </a>
                        <Button
                            variant="default"
                            size="sm"
                            asChild
                            className="bg-primary hover:bg-primary/90"
                        >
                            <a href="#contact">
                                <Phone className="h-4 w-4 mr-2" />
                                Fale Conosco
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] bg-background">
                            <nav className="flex flex-col gap-6 mt-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.href);
                                        }}
                                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="flex gap-4 pt-4 border-t border-border">
                                    <a
                                        href="https://instagram.com/nodexsolucoes"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-80 transition-opacity"
                                    >
                                        <img src="/assets/instagram-icon.png" alt="Instagram" className="h-7 w-7" />
                                    </a>
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-80 transition-opacity"
                                    >
                                        <img src="/assets/whatsapp-icon.png" alt="WhatsApp" className="h-7 w-7" />
                                    </a>
                                </div>
                                <Button className="w-full mt-4" asChild>
                                    <a href="#contact">
                                        <Phone className="h-4 w-4 mr-2" />
                                        Fale Conosco
                                    </a>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
