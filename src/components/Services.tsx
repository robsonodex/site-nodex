import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gauge, Wifi, Code2, Check } from "lucide-react";

const services = [
    {
        category: "OTIMIZAÇÃO E SUPORTE",
        icon: Gauge,
        description: "Garanta que seus equipamentos e sistemas funcionem com desempenho máximo.",
        items: [
            "Suporte técnico remoto imediato",
            "Manutenção e otimização de computadores (PC/Mac)",
            "Configuração de PDV, impressoras e fiscais",
            "Correção de lentidão e instabilidade",
            "Montagem e organização de rede interna"
        ]
    },
    {
        category: "WI-FI EMPRESARIAL E RESIDENCIAL",
        icon: Wifi,
        description: "Conectividade estável e veloz em todos os ambientes.",
        items: [
            "Instalação de Wi-Fi profissional (Ubiquiti/Mikrotik)",
            "Mapa de calor e eliminação de zonas de sombra",
            "Redes visitantes e controle de banda",
            "Soluções para lojas, clínicas e condomínios"
        ]
    },
    {
        category: "DESENVOLVIMENTO E PRESENÇA DIGITAL",
        icon: Code2,
        description: "Soluções de software personalizadas para alavancar seu negócio.",
        items: [
            "Criação de sites profissionais e institucionais",
            "Landing pages de alta conversão",
            "Aplicativos Android e iOS",
            "Sistemas SaaS personalizados",
            "Consultoria de digitalização para PMEs"
        ]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-secondary/20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Nossos Serviços</h2>
                    <p className="text-lg text-muted-foreground">
                        Oferecemos um ecossistema completo de soluções tecnológicas para resolver problemas e impulsionar o crescimento do seu negócio.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-card border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group">
                            <CardHeader>
                                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <CardTitle className="text-xl font-bold">{service.category}</CardTitle>
                                <CardDescription className="text-base mt-2">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <Check className="w-5 h-5 text-primary shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
