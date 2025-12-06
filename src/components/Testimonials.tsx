import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Roberto Silva",
        role: "Diretor Comercial, Imobiliária Silva",
        content: "A Nodex transformou nossa rede. Antes tínhamos quedas diárias que atrapalhavam as vendas. Hoje tudo roda liso, e o suporte é imediato quando precisamos.",
        avatar: "RS"
    },
    {
        name: "Cláudia Mendes",
        role: "Proprietária, Clínica Sorrir",
        content: "Excelente atendimento. Configuraram todo o sistema da clínica e o Wi-Fi para os pacientes. Profissionais muito educados e técnicos.",
        avatar: "CM"
    },
    {
        name: "Marcelo Oliveira",
        role: "Síndico, Condomínio Reserva Azul",
        content: "Contratamos a manutenção mensal para o condomínio. As visitas preventivas reduziram muito os problemas com portões e câmeras. Recomendo.",
        avatar: "MO"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-secondary/10">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">O que dizem nossos clientes</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-background p-8 rounded-2xl border border-border shadow-sm">
                            <Quote className="w-10 h-10 text-primary/20 mb-6" />
                            <p className="text-lg text-muted-foreground mb-8 italic">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
