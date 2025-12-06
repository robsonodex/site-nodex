# 📧 Configuração Atual e Como Enviar E-mail Automático para o Cliente

## 📊 Como Está HOJE

### Fluxo Atual:
```
Cliente preenche formulário
         ↓
EmailJS envia e-mail
         ↓
E-mail chega em: contato@nodexsolucoes.com.br
         ↓
Cliente NÃO recebe confirmação automática
```

### Configuração Atual:
- **From (Remetente)**: Configurado no EmailJS (provavelmente seu e-mail)
- **To (Destinatário)**: `contato@nodexsolucoes.com.br`
- **Reply-To**: E-mail do cliente (para você poder responder)

---

## ✅ Como DEVE FICAR (Com E-mail Automático para o Cliente)

### Novo Fluxo:
```
Cliente preenche formulário
         ↓
EmailJS envia 2 e-mails:
         ↓
1. Para VOCÊ: contato@nodexsolucoes.com.br
2. Para CLIENTE: e-mail que ele preencheu
         ↓
Cliente recebe confirmação automática
```

---

## 🔧 SOLUÇÃO: Criar 2 Templates no EmailJS

### Template 1: E-mail para VOCÊ (já existe)
**Template ID**: `template_xzz4y8m`
- **To**: `contato@nodexsolucoes.com.br`
- **From**: `noreply@nodexsolucoes.com.br`
- **Conteúdo**: Dados do cliente + mensagem

### Template 2: E-mail para o CLIENTE (novo)
**Template ID**: `template_autoresposta` (você vai criar)
- **To**: `{{from_email}}` (e-mail do cliente)
- **From**: `noreply@nodexsolucoes.com.br`
- **Conteúdo**: Mensagem de confirmação

---

## 📝 PASSO A PASSO - Configurar E-mail Automático

### Passo 1: Criar Novo Template no EmailJS

1. Acesse https://dashboard.emailjs.com/admin
2. Vá em **Email Templates**
3. Clique em **"Create New Template"**
4. Configure:

#### Settings (Configurações):
```
Template Name: Confirmação de Contato - Cliente
Template ID: template_autoresposta
```

#### From (Remetente):
```
From Name: Nodex Soluções
From Email: noreply@nodexsolucoes.com.br
```

#### To (Destinatário):
```
To Email: {{from_email}}
```
⚠️ **IMPORTANTE**: Use `{{from_email}}` para enviar para o e-mail do cliente!

#### Reply To:
```
Reply To: contato@nodexsolucoes.com.br
```

#### Subject (Assunto):
```
✅ Recebemos sua mensagem - Nodex Soluções
```

#### Content (Conteúdo HTML):
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #0080FF 0%, #0066CC 100%); padding: 40px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">
                                ✅ Mensagem Recebida!
                            </h1>
                        </td>
                    </tr>

                    <!-- Conteúdo -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                                Olá <strong>{{from_name}}</strong>,
                            </p>
                            
                            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                                Recebemos sua mensagem e agradecemos pelo contato! 🎉
                            </p>

                            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                                Nossa equipe está analisando sua solicitação e retornaremos em breve.
                            </p>

                            <!-- Resumo da Mensagem -->
                            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #0080FF; margin: 30px 0;">
                                <h3 style="color: #0080FF; margin: 0 0 15px 0; font-size: 18px;">
                                    📋 Resumo da sua mensagem:
                                </h3>
                                <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">{{message}}</p>
                            </div>

                            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 30px 0 20px 0;">
                                <strong>Tempo médio de resposta:</strong> 24 horas úteis
                            </p>

                            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                                Se preferir, você também pode entrar em contato via WhatsApp: <strong>(21) 96553-2247</strong>
                            </p>

                            <!-- Botão WhatsApp -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                                <tr>
                                    <td align="center">
                                        <a href="https://wa.me/5521965532247" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; font-size: 14px;">
                                            💬 Falar no WhatsApp
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
                                Atenciosamente,<br>
                                <strong style="color: #0080FF;">Equipe Nodex Soluções</strong>
                            </p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                            <p style="color: #666666; margin: 0; font-size: 12px;">
                                <strong>Nodex Soluções</strong><br>
                                Infraestrutura, Segurança e Tecnologia<br>
                                Rio de Janeiro - RJ
                            </p>
                            <p style="color: #999999; margin: 10px 0 0 0; font-size: 11px;">
                                📧 contato@nodexsolucoes.com.br<br>
                                📱 (21) 96553-2247
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

5. Clique em **"Save"**
6. **Copie o Template ID** (ex: `template_autoresposta`)

---

### Passo 2: Atualizar o Código do Site

Abra `src/components/Contact.tsx` e substitua a função `onSubmit`:

```typescript
const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
        console.log('📧 Iniciando envio de e-mails...', data);
        
        // Configuração EmailJS
        const serviceId = 'service_qkcl5pn';
        const templateParaVoce = 'template_xzz4y8m';
        const templateParaCliente = 'template_autoresposta'; // NOVO!
        const publicKey = 'iiipgD7w-zlqjId-v';

        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            message: data.message,
            to_email: 'contato@nodexsolucoes.com.br',
            reply_to: data.email,
        };

        // Inicializar EmailJS
        emailjs.init(publicKey);
        
        // 1. Enviar e-mail para VOCÊ
        console.log('📧 Enviando e-mail para contato@nodexsolucoes.com.br...');
        await emailjs.send(serviceId, templateParaVoce, templateParams);
        console.log('✅ E-mail enviado para você!');
        
        // 2. Enviar e-mail de CONFIRMAÇÃO para o CLIENTE
        console.log('📧 Enviando e-mail de confirmação para o cliente...');
        await emailjs.send(serviceId, templateParaCliente, templateParams);
        console.log('✅ E-mail de confirmação enviado para o cliente!');

        toast.success("Mensagem enviada com sucesso!", {
            description: "Você receberá um e-mail de confirmação em breve.",
        });
        
        reset();
    } catch (error: any) {
        console.error('❌ Erro ao enviar e-mail:', error);
        
        toast.error("Erro ao enviar mensagem", {
            description: error.text || "Por favor, tente novamente ou entre em contato via WhatsApp.",
        });
    } finally {
        setIsSubmitting(false);
    }
};
```

---

## ⚙️ Configurar E-mail Remetente no EmailJS

### IMPORTANTE: Domínio Personalizado

Para usar `noreply@nodexsolucoes.com.br`, você precisa:

#### Opção 1: Usar Gmail/Outlook (Mais Fácil)
1. No EmailJS, vá em **Email Services**
2. Conecte seu Gmail ou Outlook
3. O e-mail será enviado desse endereço
4. **Limitação**: Aparecerá como "via emailjs.com"

#### Opção 2: Domínio Próprio (Profissional)
1. Configure SPF, DKIM e DMARC no seu domínio
2. No EmailJS, use o plano pago (Personal $15/mês)
3. Configure SMTP customizado
4. E-mails sairão de `noreply@nodexsolucoes.com.br` sem "via"

#### Opção 3: SendGrid/Mailgun (Recomendado para Produção)
- Mais confiável
- Melhor deliverability
- Estatísticas detalhadas
- Requer backend (Node.js/Python)

---

## 🧪 Testar

1. Salve as alterações
2. Rode `npm run build`
3. Preencha o formulário com **seu e-mail**
4. Envie
5. Verifique:
   - ✅ E-mail chegou em `contato@nodexsolucoes.com.br`?
   - ✅ E-mail de confirmação chegou no **seu e-mail**?

---

## 📋 Resumo

**HOJE:**
- Cliente preenche → E-mail vai para você → Cliente não recebe nada

**DEPOIS:**
- Cliente preenche → 2 e-mails enviados:
  1. Para você: com dados do cliente
  2. Para cliente: confirmação automática

**Remetente:**
- Configurado no EmailJS (Email Services)
- Pode ser Gmail, Outlook ou domínio próprio

Quer que eu atualize o código agora? 😊
