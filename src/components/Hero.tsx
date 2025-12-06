import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background with gradient and grid */}
            <div className="absolute inset-0 bg-background z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
                <div className="absolute inset-0 grid-pattern opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <div className="animate-fade-in-up space-y-6 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-secondary text-sm text-primary mb-8 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Soluções completas em TI para sua empresa
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
                        Infraestrutura, Segurança <br className="hidden md:block" /> e Tecnologia.
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Transformamos desafios técnicos em resultados. Suporte especializado, redes de alta performance e desenvolvimento sob medida.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                        <Button size="lg" className="h-14 px-8 text-lg gap-2 shadow-lg shadow-primary/25" asChild>
                            <a href="#contact">
                                Falar com Especialista
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
                            <a href="#services">
                                Conhecer Serviços
                            </a>
                        </Button>
                    </div>

                    {/* Features Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
                        <div className="flex flex-col gap-2 p-6 rounded-2xl bg-secondary/20 border border-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <Zap className="w-10 h-10 text-primary mb-2" />
                            <h3 className="font-semibold text-lg">Alta Performance</h3>
                            <p className="text-sm text-muted-foreground">Otimização de sistemas e redes para máxima velocidade.</p>
                        </div>
                        <div className="flex flex-col gap-2 p-6 rounded-2xl bg-secondary/20 border border-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-primary mb-2" />
                            <h3 className="font-semibold text-lg">Segurança Total</h3>
                            <p className="text-sm text-muted-foreground">Proteção de dados e monitoramento constante.</p>
                        </div>
                        <div className="flex flex-col gap-2 p-6 rounded-2xl bg-secondary/20 border border-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <Globe className="w-10 h-10 text-primary mb-2" />
                            <h3 className="font-semibold text-lg">Presença Digital</h3>
                            <p className="text-sm text-muted-foreground">Sites e apps modernos para alavancar seu negócio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
