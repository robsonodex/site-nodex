import { Mail, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "5521965532247";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

    return (
        <footer className="bg-secondary border-t border-border">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img
                                src="/assets/nodex-logo.png"
                                alt="Nodex Logo"
                                className="h-16 w-16 md:h-20 md:w-20"
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Soluções em Infraestrutura, Segurança e Tecnologia
                        </p>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#hero" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a href="#plans" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Planos
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Entre em Contato</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                                <a href="mailto:contato@nodexsolucoes.com.br" className="hover:text-primary transition-colors">
                                    contato@nodexsolucoes.com.br
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                                <span>Rio de Janeiro, RJ</span>
                            </li>
                        </ul>
                    </div>

                    {/* Redes Sociais */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/nodexsolucoes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-background hover:bg-primary/10 transition-colors"
                                aria-label="Instagram"
                            >
                                <img src="/assets/instagram-icon.png" alt="Instagram" className="h-6 w-6" />
                            </a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-background hover:bg-green-500/10 transition-colors"
                                aria-label="WhatsApp"
                            >
                                <img src="/assets/whatsapp-icon.png" alt="WhatsApp" className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Nodex Soluções. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
