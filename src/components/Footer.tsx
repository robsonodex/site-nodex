import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter text-primary">NODEX</h2>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Soluções em Infraestrutura, Segurança e Tecnologia.
                            Transformando desafios em resultados para sua empresa e residência.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Contato</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>(21) 96553-2247</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary" />
                                <span>contato@nodexsolutions.com.br</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>Jacarepaguá, Rio de Janeiro - RJ</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Links Rápidos</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#services" className="hover:text-primary transition-colors">Nossos Serviços</a></li>
                            <li><a href="#plans" className="hover:text-primary transition-colors">Planos de Manutenção</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Agendar Visita</a></li>
                            <li><a href="/painel" className="hover:text-primary transition-colors">Área do Cliente</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Redes Sociais</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/nodex.solutions/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {currentYear} Nodex Soluções. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
