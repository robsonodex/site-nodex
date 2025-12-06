# Template de E-mail para EmailJS - Nodex Soluções

## 📧 Template HTML Profissional

Cole este código no **Content** do seu template no EmailJS:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova Mensagem - Nodex Soluções</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <!-- Container Principal -->
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #0080FF 0%, #0066CC 100%); padding: 30px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                                📧 Nova Mensagem de Contato
                            </h1>
                            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">
                                Nodex Soluções - Site Institucional
                            </p>
                        </td>
                    </tr>

                    <!-- Conteúdo -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            
                            <!-- Informações do Cliente -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding-bottom: 20px;">
                                        <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #0080FF; padding-bottom: 10px;">
                                            👤 Dados do Cliente
                                        </h2>
                                    </td>
                                </tr>
                                
                                <!-- Nome -->
                                <tr>
                                    <td style="padding: 10px 0;">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="120" style="color: #666666; font-weight: bold; font-size: 14px;">
                                                    Nome:
                                                </td>
                                                <td style="color: #333333; font-size: 14px;">
                                                    {{from_name}}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- E-mail -->
                                <tr>
                                    <td style="padding: 10px 0;">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="120" style="color: #666666; font-weight: bold; font-size: 14px;">
                                                    E-mail:
                                                </td>
                                                <td style="color: #0080FF; font-size: 14px;">
                                                    <a href="mailto:{{from_email}}" style="color: #0080FF; text-decoration: none;">
                                                        {{from_email}}
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Telefone -->
                                <tr>
                                    <td style="padding: 10px 0;">
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="120" style="color: #666666; font-weight: bold; font-size: 14px;">
                                                    Telefone:
                                                </td>
                                                <td style="color: #333333; font-size: 14px;">
                                                    {{phone}}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Mensagem -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                                <tr>
                                    <td style="padding-bottom: 15px;">
                                        <h2 style="color: #333333; margin: 0; font-size: 20px; border-bottom: 2px solid #0080FF; padding-bottom: 10px;">
                                            💬 Mensagem
                                        </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #0080FF;">
                                        <p style="color: #333333; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Botão de Ação -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:{{from_email}}" style="display: inline-block; background-color: #0080FF; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; font-size: 14px;">
                                            📧 Responder Cliente
                                        </a>
                                    </td>
                                </tr>
                            </table>

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
                                E-mail enviado automaticamente via formulário do site<br>
                                <a href="https://nodexsolucoes.com.br" style="color: #0080FF; text-decoration: none;">www.nodexsolucoes.com.br</a>
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

## ⚙️ Configurações do Template no EmailJS

### 1. **Subject (Assunto)**
```
🔔 Nova Mensagem de {{from_name}} - Site Nodex
```

### 2. **From Email**
```
noreply@nodexsolutions.com.br
```

### 3. **From Name**
```
Nodex - Site
```

### 4. **To Email**
```
contato@nodexsolucoes.com.br
```

### 5. **Reply To**
```
{{reply_to}}
```

## 📋 Variáveis Utilizadas

O template usa estas variáveis que são enviadas pelo formulário:

- `{{from_name}}` - Nome do cliente
- `{{from_email}}` - E-mail do cliente
- `{{phone}}` - Telefone do cliente
- `{{message}}` - Mensagem do cliente
- `{{reply_to}}` - E-mail para resposta (mesmo que from_email)

## 🎨 Características do Template

✅ **Design Profissional** - Visual limpo e moderno
✅ **Responsivo** - Funciona em todos os clientes de e-mail
✅ **Cores da Marca** - Azul (#0080FF) da Nodex
✅ **Fácil Leitura** - Informações bem organizadas
✅ **Botão de Resposta** - Link direto para responder o cliente
✅ **Informações Completas** - Todos os dados do formulário

## 🚀 Como Aplicar no EmailJS

1. Acesse https://www.emailjs.com/
2. Vá em **Email Templates**
3. Clique no template `template_xzz4y8m`
4. Cole o código HTML acima no campo **Content**
5. Configure o **Subject**, **From**, **To** e **Reply To** conforme indicado
6. Clique em **Save**
7. Teste enviando um e-mail pelo formulário do site

Pronto! Agora seus e-mails chegarão com um visual profissional! 🎉
