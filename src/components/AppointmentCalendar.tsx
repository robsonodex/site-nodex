import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Calendar as CalendarIcon, Clock, Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const timeSlots = [
    "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"
];

export default function AppointmentCalendar() {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [time, setTime] = useState<string | undefined>(undefined);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        notes: ""
    });

    const handleDateSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate);
        setTime(undefined); // Reset time when date changes
    };

    const handleNextStep = () => {
        if (step === 1 && date && time) setStep(2);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ date, time, ...formData });
        toast.success("Agendamento Solicitado!", {
            description: `Data: ${date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : ""} às ${time}`
        });
        setStep(3);
    };

    return (
        <Card className="w-full max-w-4xl mx-auto shadow-2xl border-primary/20">
            <CardHeader>
                <CardTitle>Agendar Visita Técnica</CardTitle>
                <CardDescription>Selecione a data e o horário para receber um de nossos especialistas.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                {step === 1 && (
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={handleDateSelect}
                                className="rounded-md border"
                                locale={ptBR}
                                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                            />
                        </div>
                        <div className="flex-1 space-y-4">
                            <h3 className="font-semibold flex items-center gap-2">
                                <Clock className="w-4 h-4" /> Horários Disponíveis
                            </h3>
                            <div className="grid grid-cols-3 gap-2">
                                {timeSlots.map((slot) => (
                                    <Button
                                        key={slot}
                                        variant={time === slot ? "default" : "outline"}
                                        className={time === slot ? "bg-primary text-primary-foreground" : ""}
                                        disabled={!date}
                                        onClick={() => setTime(slot)}
                                    >
                                        {slot}
                                    </Button>
                                ))}
                            </div>
                            {!date && <p className="text-sm text-muted-foreground mt-4">Selecione uma data para ver os horários.</p>}

                            <div className="pt-8 flex justify-end">
                                <Button onClick={handleNextStep} disabled={!date || !time} className="w-full md:w-auto">
                                    Continuar
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
                        <div className="bg-secondary/20 p-4 rounded-lg mb-6 flex items-center gap-4">
                            <CalendarIcon className="w-5 h-5 text-primary" />
                            <div>
                                <p className="font-semibold">Data Selecionada</p>
                                <p className="text-sm text-muted-foreground">
                                    {date && format(date, "EEEE, d 'de' MMMM", { locale: ptBR })} às {time}
                                </p>
                            </div>
                            <Button variant="ghost" size="sm" className="ml-auto" onClick={() => setStep(1)}>Alterar</Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Nome Completo</Label>
                                <Input
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Telefone</Label>
                                <Input
                                    required
                                    placeholder="(21) ..."
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Observações (Opcional)</Label>
                            <Textarea
                                value={formData.notes}
                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button type="button" variant="outline" onClick={() => setStep(1)}>Voltar</Button>
                            <Button type="submit" className="flex-1">Confirmar Agendamento</Button>
                        </div>
                    </form>
                )}

                {step === 3 && (
                    <div className="text-center py-12 animate-fade-in">
                        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Solicitação Enviada!</h3>
                        <p className="text-muted-foreground mb-8">
                            Recebemos seu pedido de agendamento. Em breve entraremos em contato para confirmar.
                        </p>
                        <Button onClick={() => { setStep(1); setDate(undefined); setTime(undefined); }}>
                            Novo Agendamento
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}


