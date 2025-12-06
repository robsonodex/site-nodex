# Configuração do EmailJS para Formulário de Contato

## 📧 O que é EmailJS?

EmailJS é um serviço gratuito que permite enviar e-mails diretamente do frontend sem precisar de um servidor backend.

## 🚀 Passo a Passo para Configurar

### 1. Criar Conta no EmailJS

1. Acesse: https://www.emailjs.com/
2. Clique em **"Sign Up"** (Cadastrar)
3. Crie sua conta gratuita

### 2. Adicionar Serviço de E-mail

1. No dashboard, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de e-mail:
   - **Gmail** (recomendado para teste)
   - Outlook
   - Yahoo
   - Ou outro provedor
4. Conecte sua conta de e-mail
5. **Copie o Service ID** (ex: `service_abc123`)

### 3. Criar Template de E-mail

1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template:

**Subject (Assunto):**
```
Nova mensagem de {{from_name}} - Site Nodex
```

**Content (Conteúdo):**
```
Nome: {{from_name}}
E-mail: {{from_email}}
Telefone: {{phone}}

Mensagem:
{{message}}

---
Enviado via formulário do site Nodex
```

**Settings (Configurações):**
- **From Email**: noreply@nodexsolutions.com.br (ou seu e-mail)
- **From Name**: Nodex - Site
- **To Email**: contato@nodexsolucoes.com.br
- **Reply To**: {{reply_to}}

4. Clique em **"Save"**
5. **Copie o Template ID** (ex: `template_xyz789`)

### 4. Obter Public Key

1. Vá em **"Account"** → **"General"**
2. Encontre **"Public Key"**
3. **Copie a Public Key** (ex: `user_ABC123XYZ`)

### 5. Configurar no Código

Abra o arquivo `src/components/Contact.tsx` e substitua os valores:

```typescript
const serviceId = 'service_abc123';    // Seu Service ID
const templateId = 'template_xyz789';  // Seu Template ID
const publicKey = 'user_ABC123XYZ';    // Sua Public Key
```

**Exemplo real:**
```typescript
const serviceId = 'service_nodex2024';
const templateId = 'template_contact_form';
const publicKey = 'user_Kx7mP9nQ2Rt5Yw8Z';
```

### 6. Testar o Formulário

1. Execute o site: `npm run dev`
2. Acesse: http://localhost:5173
3. Vá até a seção de contato
4. Preencha o formulário
5. Clique em "Enviar Mensagem"
6. Verifique se o e-mail chegou em `contato@nodexsolucoes.com.br`

## ⚙️ Configurações Avançadas (Opcional)

### Limitar Envios

No EmailJS, você pode configurar:
- **Rate Limiting**: Limitar número de e-mails por hora
- **Captcha**: Adicionar proteção contra spam
- **Auto-Reply**: Enviar resposta automática para o usuário

### Personalizar Template

Você pode adicionar mais campos ao template:
- Data/hora do envio
- IP do usuário
- Página de origem
- Etc.

## 🆓 Plano Gratuito

O plano gratuito do EmailJS permite:
- ✅ 200 e-mails por mês
- ✅ 2 serviços de e-mail
- ✅ Templates ilimitados
- ✅ Suporte básico

Para mais e-mails, considere o plano pago ($15/mês para 1000 e-mails).

## 🔧 Alternativas ao EmailJS

Se preferir outras soluções:

### 1. **Formspree** (mais simples)
- Gratuito até 50 envios/mês
- Não precisa configurar nada
- Código: `<form action="https://formspree.io/f/YOUR_ID">`

### 2. **SendGrid** (mais profissional)
- 100 e-mails/dia grátis
- Requer backend (Node.js/Python)
- Melhor para produção

### 3. **Resend** (moderno)
- 100 e-mails/dia grátis
- API simples
- Requer backend

## ❓ Problemas Comuns

### E-mail não chega
- Verifique a pasta de spam
- Confirme que o Service ID, Template ID e Public Key estão corretos
- Verifique se o serviço de e-mail está conectado no EmailJS

### Erro "Failed to send email"
- Verifique sua conexão com internet
- Confirme que a conta EmailJS está ativa
- Veja o console do navegador (F12) para detalhes do erro

### E-mail chega mas sem formatação
- Revise o template no EmailJS
- Certifique-se de usar as variáveis corretas: `{{from_name}}`, `{{message}}`, etc.

## 📞 Suporte

Se tiver problemas:
1. Documentação EmailJS: https://www.emailjs.com/docs/
2. Suporte EmailJS: support@emailjs.com
3. Ou me avise que ajudo a configurar!
