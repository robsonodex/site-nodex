# 📧 Configuração SMTP para noreply@nodexsolucoes.com.br

## ⚙️ Dados para Preencher no EmailJS

### Informações Necessárias:

Você precisa obter estas informações do seu **provedor de hospedagem de e-mail** (onde o domínio nodexsolucoes.com.br está hospedado):

---

### 1. **Nome**
```
Nodex - SMTP Server
```
(Pode ser qualquer nome descritivo)

---

### 2. **ID de Serviço**
```
service_u0t6p4f
```
✅ Já está preenchido automaticamente

---

### 3. **Anfitrião (Host/Servidor SMTP)**

Depende do seu provedor de hospedagem:

#### Se usar **cPanel/Hostgator/Locaweb**:
```
mail.nodexsolucoes.com.br
```
ou
```
smtp.nodexsolucoes.com.br
```

#### Se usar **Google Workspace (Gmail empresarial)**:
```
smtp.gmail.com
```

#### Se usar **Outlook/Microsoft 365**:
```
smtp.office365.com
```

#### Se usar **Titan Email**:
```
smtp.titan.email
```

**Como descobrir:**
- Entre no painel de controle do seu e-mail
- Procure por "Configurações SMTP" ou "Configurações de E-mail"
- Ou pergunte ao suporte da sua hospedagem

---

### 4. **Porta**

Escolha baseado no SSL:

#### Se marcar "Use SSL" ✅:
```
465
```

#### Se NÃO marcar "Use SSL":
```
587
```
(usa TLS/STARTTLS)

**Recomendado:** Use SSL com porta **465**

---

### 5. **Use SSL**
```
✅ Marque esta opção
```
(Mais seguro)

---

### 6. **Usuário**
```
noreply@nodexsolucoes.com.br
```

**IMPORTANTE:** 
- Este e-mail precisa **existir** no seu servidor
- Você precisa ter criado a conta `noreply@nodexsolucoes.com.br` no painel de e-mails

**Se não existir, crie assim:**
1. Acesse o painel de controle da sua hospedagem
2. Vá em "E-mails" ou "Contas de E-mail"
3. Crie nova conta: `noreply@nodexsolucoes.com.br`
4. Defina uma senha forte

---

### 7. **Senha do App**
```
[Senha da conta noreply@nodexsolucoes.com.br]
```

**Importante:**
- Use a senha que você definiu ao criar a conta `noreply@nodexsolucoes.com.br`
- Se usar Google Workspace, crie uma "Senha de App" específica
- Se usar Outlook, pode precisar de uma "Senha de Aplicativo"

---

## 🔍 Configurações Comuns por Provedor

### **Hostgator / Locaweb / cPanel**
```
Host: mail.nodexsolucoes.com.br
Porta: 465
SSL: ✅ Sim
Usuário: noreply@nodexsolucoes.com.br
Senha: [senha da conta]
```

### **Google Workspace**
```
Host: smtp.gmail.com
Porta: 465
SSL: ✅ Sim
Usuário: noreply@nodexsolucoes.com.br
Senha: [senha de app - gerar em myaccount.google.com]
```

### **Microsoft 365 / Outlook**
```
Host: smtp.office365.com
Porta: 587
SSL: ❌ Não (usa TLS)
Usuário: noreply@nodexsolucoes.com.br
Senha: [senha da conta ou senha de app]
```

---

## ✅ Passo a Passo Completo

### 1. Criar a conta de e-mail (se não existe)
- Acesse painel da hospedagem
- Crie: `noreply@nodexsolucoes.com.br`
- Defina senha forte

### 2. Obter configurações SMTP
- Procure "Configurações SMTP" no painel
- Ou pergunte ao suporte da hospedagem
- Anote: Host, Porta, SSL

### 3. Preencher no EmailJS
```
Nome: Nodex - SMTP Server
ID de Serviço: service_u0t6p4f (já preenchido)
Anfitrião: mail.nodexsolucoes.com.br (ou outro)
Porta: 465
Use SSL: ✅ Sim
Usuário: noreply@nodexsolucoes.com.br
Senha: [sua senha]
```

### 4. Desmarcar "Enviar e-mail de teste"
Se o usuário não for um e-mail válido ainda, desmarque temporariamente.

### 5. Salvar
Clique em "Create Service"

### 6. Testar depois
Após criar, vá em "Test It" para enviar um e-mail de teste.

---

## ❓ Não sabe as configurações?

### Opção 1: Perguntar à hospedagem
Entre em contato com o suporte e pergunte:
> "Quais são as configurações SMTP para enviar e-mails do domínio nodexsolucoes.com.br?"

### Opção 2: Verificar painel de controle
- cPanel: Seção "Email Accounts" → "Configure Email Client"
- Outros: Procure "SMTP Settings" ou "Email Settings"

### Opção 3: Usar Gmail temporariamente
Se tiver pressa, pode usar Gmail:
```
Host: smtp.gmail.com
Porta: 465
SSL: ✅ Sim
Usuário: seu@gmail.com
Senha: [senha de app do Gmail]
```

Depois troca para o domínio próprio.

---

## 🎯 Depois de Configurar

1. **Teste o serviço** no EmailJS
2. **Copie o novo Service ID** (se mudou)
3. **Atualize no código** `Contact.tsx`:
   ```typescript
   const serviceId = 'service_u0t6p4f'; // Novo ID
   ```

---

**Me avise quando conseguir as configurações SMTP que eu te ajudo a preencher!** 😊

Ou se preferir, pode usar Gmail/Outlook temporariamente enquanto configura o domínio próprio.
