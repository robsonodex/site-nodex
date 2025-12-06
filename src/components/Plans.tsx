import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
    {
        name: "Essencial",
        price: "R$ 319",
        period: "/ mês",
        description: "Para autônomos, MEI e escritórios muito pequenos.",
        features: [
            "Suporte remoto limitado (horário comercial)",
            "Monitoramento básico de estações",
            "Limpeza preventiva remota trimestral",
            "Atualizações de sistema",
            "Inventário de máquinas",
            "SLA: até 4 horas",
            "Até 3 dispositivos",
        ],
        extras: [
            "Dispositivo adicional: R$ 99 / mês",
            "Visita presencial: R$ 180 / visita",
        ],
        highlight: false,
        cta: "Escolher Essencial"
    },
    {
        name: "Profissional",
        price: "R$ 649",
        period: "/ mês",
        description: "Para empresas que precisam de estabilidade e resposta rápida.",
        features: [
            "Tudo do Essencial",
            "Suporte híbrido (remoto ilimitado + 2 visitas/mês)",
            "Gestão de rede e Wi-Fi",
            "Monitoramento proativo de falhas",
            "Relatório técnico mensal",
            "Política básica de segurança",
            "Gestão de impressoras",
            "SLA: até 2 horas",
            "Até 5 dispositivos",
        ],
        extras: [
            "Dispositivo adicional: R$ 99 / mês",
            "Visita adicional: R$ 180 / visita",
        ],
        highlight: true,
        cta: "Escolher Profissional"
    },
    {
        name: "Avançado",
        price: "R$ 1.190",
        period: "/ mês",
        description: "Para empresas que não podem parar.",
        features: [
            "Tudo do Profissional",
            "Suporte híbrido (remoto + 4 visitas/mês)",
            "Servidores, NAS e virtualização",
            "Firewall e VPN",
            "Monitoramento 24h de serviços críticos",
            "Auditoria de segurança semestral",
            "Relatórios executivos",
            "SLA: até 1 hora",
            "Até 10 dispositivos",
        ],
        extras: [
            "Dispositivo adicional: R$ 99 / mês",
            "Visita adicional: R$ 180 / visita",
        ],
        highlight: false,
        cta: "Escolher Avançado"
    }
];

const corporatePlans = [
    {
        name: "Corporativo Start",
        price: "A partir de R$ 2.400",
        period: "/ mês",
        description: "Para empresas com operação sensível.",
        features: [
            "Suporte 24/7",
            "Até 8 visitas presenciais/mês",
            "Monitoramento em tempo real",
            "Alta disponibilidade",
            "Gestão completa de infraestrutura",
            "Compliance básico (LGPD)",
            "SLA: até 30 minutos",
            "Até 15 dispositivos",
        ],
        extras: ["Dispositivo adicional: R$ 149 / mês"]
    },
    {
        name: "Corporativo Plus",
        price: "A partir de R$ 3.200",
        period: "/ mês",
        description: "Para empresas com operação crítica e projetos em andamento.",
        features: [
            "Tudo do Corporativo Start",
            "CIO Virtual",
            "Gestão de projetos de TI",
            "Auditoria de segurança trimestral",
            "Relatórios executivos avançados",
            "Suporte prioritário",
            "Até 20 dispositivos",
        ],
        extras: ["Dispositivo adicional: R$ 149 / mês"]
    },
    {
        name: "Corporativo Enterprise",
        price: "Sob contrato",
        period: "",
        description: "Para ambientes complexos e alta criticidade.",
        features: [
            "Operação crítica 24/7",
            "Ambientes híbridos e múltiplas unidades",
            "SLA customizado",
            "Time técnico dedicado",
            "Plantão técnico permanente",
            "Visitas presenciais contratuais",
        ],
        extras: ["Valores definidos em contrato"]
    }
];

export default function Plans() {
    return (
        <section id="plans" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 mb-4">
                        Planos de Manutenção e Suporte
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Escolha o nível de proteção e suporte ideal para o seu negócio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {plans.map((plan, index) => (
                        <Card key={index} className={`relative flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${plan.highlight ? 'border-primary shadow-lg scale-105 z-10' : 'border-border'}`}>
                            {plan.highlight && (
                                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                                    Mais Popular
                                </Badge>
                            )}
                            <CardHeader className="text-center pb-2">
                                <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                                <CardDescription className="text-muted-foreground min-h-[40px] flex items-center justify-center">
                                    {plan.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow pt-4">
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-foreground/80">
                                            <Check className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                {plan.extras && plan.extras.length > 0 && (
                                    <div className="border-t pt-4">
                                        <p className="text-xs font-semibold text-muted-foreground mb-2 text-center uppercase tracking-wider">Adicionais</p>
                                        <ul className="space-y-2">
                                            {plan.extras.map((extra, i) => (
                                                <li key={i} className="flex items-center text-xs text-muted-foreground justify-center">
                                                    <Info className="h-3 w-3 mr-1.5" />
                                                    {extra}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter className="pt-2 pb-6">
                                <Button className={`w-full ${plan.highlight ? 'bg-primary hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'}`}>
                                    {plan.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Planos Corporativos – Infraestrutura Crítica
                    </h3>
                    <p className="text-muted-foreground">
                        Soluções de alta performance para operações que não podem parar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {corporatePlans.map((plan, index) => (
                        <Card key={index} className="flex flex-col h-full bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-primary">{plan.name}</CardTitle>
                                <div className="mt-2">
                                    <span className="text-2xl font-bold text-foreground">{plan.price}</span>
                                    <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
                                </div>
                                <CardDescription className="mt-2">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-2">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-foreground/80">
                                            <Check className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                {plan.extras && plan.extras.length > 0 && (
                                    <div className="mt-4 pt-4 border-t border-border/50">
                                        {plan.extras.map((extra, i) => (
                                            <p key={i} className="text-xs text-muted-foreground flex items-center">
                                                <Info className="h-3 w-3 mr-1.5" />
                                                {extra}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10 hover:text-primary">
                                    Falar com Consultor
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
