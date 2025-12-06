import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Carlos Silva",
        company: "Silva & Associados",
        role: "Diretor de TI",
        content: "A Nodex transformou nossa infraestrutura de TI. O suporte é excepcional e a equipe extremamente competente. Recomendo!",
        rating: 5
    },
    {
        name: "Marina Costa",
        company: "Costa Clínica Médica",
        role: "Administradora",
        content: "Implementaram nossa rede Wi-Fi e sistema de gestão. Tudo funcionando perfeitamente. Atendimento rápido e profissional.",
        rating: 5
    },
    {
        name: "Roberto Alves",
        company: "Alves Comércio",
        role: "Proprietário",
        content: "Suporte técnico impecável. Sempre que precisamos, a equipe está pronta para resolver qualquer problema. Parceria de confiança!",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">O que dizem nossos clientes</h2>
                    <p className="text-lg text-muted-foreground">
                        Confiança construída através de resultados reais e parcerias duradouras.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                            <CardHeader>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>
                                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                                <CardDescription>
                                    {testimonial.role} • {testimonial.company}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
