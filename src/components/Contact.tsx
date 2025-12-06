import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const contactSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("E-mail inválido"),
    phone: z.string().min(10, "Telefone inválido"),
    message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(data);
        toast.success("Mensagem enviada com sucesso!", {
            description: "Entraremos em contato em breve.",
        });
        reset();
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Fale Conosco
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Entre em contato</h2>
                        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                            Pronto para transformar a tecnologia da sua empresa? Preencha o formulário ou nutilize nossos canais diretos.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">WhatsApp / Telefone</h3>
                                    <p className="text-muted-foreground">(21) 96553-2247</p>
                                    <p className="text-sm text-muted-foreground mt-1">Sg a Sex, 09h às 18h</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">E-mail</h3>
                                    <p className="text-muted-foreground">contato@nodexsolutions.com.br</p>
                                    <p className="text-sm text-muted-foreground mt-1">Resposta em até 24h</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Atendimento</h3>
                                    <p className="text-muted-foreground">Jacarepaguá, Rio de Janeiro - RJ</p>
                                    <p className="text-sm text-muted-foreground mt-1">Atendemos todo o Rio de Janeiro</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-2xl border shadow-lg">
                        <h3 className="text-2xl font-bold mb-6">Envie sua mensagem</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nome Completo</Label>
                                <Input
                                    id="name"
                                    placeholder="Seu nome ou da sua empresa"
                                    {...register("name")}
                                    className={errors.name ? "border-destructive" : ""}
                                />
                                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        {...register("email")}
                                        className={errors.email ? "border-destructive" : ""}
                                    />
                                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Telefone / WhatsApp</Label>
                                    <Input
                                        id="phone"
                                        placeholder="(21) 99999-9999"
                                        {...register("phone")}
                                        className={errors.phone ? "border-destructive" : ""}
                                    />
                                    {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Como podemos ajudar?</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Descreva sua necessidade..."
                                    className={`min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
                                    {...register("message")}
                                />
                                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                            </div>

                            <Button type="submit" className="w-full h-12 text-lg gap-2" disabled={isSubmitting}>
                                {isSubmitting ? "Enviando..." : (
                                    <>
                                        Enviar Mensagem
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
