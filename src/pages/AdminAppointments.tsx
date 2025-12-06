import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data
const appointments = [
    { id: 1, client: "Roberto Silva", date: "2024-12-10", time: "09:00", service: "Manutenção", status: "Confirmado" },
    { id: 2, client: "Clínica Sorrir", date: "2024-12-11", time: "14:00", service: "Wi-Fi", status: "Pendente" },
    { id: 3, client: "Condomínio Azul", date: "2024-12-12", time: "10:00", service: "Vistoria", status: "Concluído" },
];

export default function AdminAppointments() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Painel Administrativo</h1>
                    <Button variant="outline" asChild><a href="/">Voltar ao Site</a></Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Agendamentos Hoje</CardTitle></CardHeader>
                        <CardContent><div className="text-2xl font-bold">4</div></CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Pendentes</CardTitle></CardHeader>
                        <CardContent><div className="text-2xl font-bold text-yellow-500">2</div></CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Total Mês</CardTitle></CardHeader>
                        <CardContent><div className="text-2xl font-bold">32</div></CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Agendamentos</CardTitle>
                        <div className="flex gap-4 mt-4">
                            <Input
                                placeholder="Buscar cliente..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="max-w-sm"
                            />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Cliente</TableHead>
                                    <TableHead>Data</TableHead>
                                    <TableHead>Horário</TableHead>
                                    <TableHead>Serviço</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Ações</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {appointments.map((apt) => (
                                    <TableRow key={apt.id}>
                                        <TableCell className="font-medium">{apt.client}</TableCell>
                                        <TableCell>{apt.date}</TableCell>
                                        <TableCell>{apt.time}</TableCell>
                                        <TableCell>{apt.service}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant="secondary"
                                                className={
                                                    apt.status === "Confirmado" ? "bg-green-100 text-green-800 hover:bg-green-100" :
                                                        apt.status === "Pendente" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" :
                                                            "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                                }
                                            >
                                                {apt.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">Detalhes</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
