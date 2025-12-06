import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

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

        try {
            console.log('📧 Iniciando envio de e-mails...', data);

            // Configuração EmailJS
            const serviceId = 'service_u0t6p4f';
            const templateParaVoce = 'template_3nt41uk';
            const templateParaCliente = 'template_autoresposta';
            const publicKey = 'iiipgD7w-zlqjId-v';

            console.log('📧 Configuração EmailJS:', { serviceId, templateParaVoce, templateParaCliente, publicKey });

            const templateParams = {
                from_name: data.name,
                from_email: data.email,
                phone: data.phone,
                message: data.message,
                to_email: 'contato@nodexsolucoes.com.br',
                reply_to: data.email,
            };

            console.log('📧 Parâmetros do template:', templateParams);

            // Inicializar EmailJS com a public key
            emailjs.init(publicKey);

            // 1. Enviar e-mail para VOCÊ
            console.log('📧 Enviando e-mail para contato@nodexsolucoes.com.br...');
            const response1 = await emailjs.send(
                serviceId,
                templateParaVoce,
                templateParams
            );
            console.log('✅ E-mail enviado para você!', response1);

            // 2. Enviar e-mail de CONFIRMAÇÃO para o CLIENTE
            console.log('📧 Enviando e-mail de confirmação para o cliente...');
            const response2 = await emailjs.send(
                serviceId,
                templateParaCliente,
                templateParams
            );
            console.log('✅ E-mail de confirmação enviado para o cliente!', response2);

            toast.success("Mensagem enviada com sucesso!", {
                description: "Você receberá um e-mail de confirmação em breve.",
            });

            reset();
        } catch (error: any) {
            console.error('❌ Erro ao enviar e-mail:', error);
            console.error('❌ Detalhes do erro:', {
                message: error.message,
                text: error.text,
                status: error.status
            });

            toast.error("Erro ao enviar mensagem", {
                description: error.text || "Por favor, tente novamente ou entre em contato via WhatsApp.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Fale Conosco
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">Entre em contato</h2>
                        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                            Pronto para transformar a tecnologia da sua empresa? Preencha o formulário ou utilize nossos canais diretos.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">E-mail</h3>
                                    <a
                                        href="mailto:contato@nodexsolucoes.com.br"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        contato@nodexsolucoes.com.br
                                    </a>
                                    <p className="text-sm text-muted-foreground mt-1">Resposta em até 24h</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">Atendimento</h3>
                                    <p className="text-muted-foreground">Rio de Janeiro - RJ</p>
                                    <p className="text-sm text-muted-foreground mt-1">Atendemos todo o Rio de Janeiro</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-foreground">Envie sua mensagem</h3>
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
