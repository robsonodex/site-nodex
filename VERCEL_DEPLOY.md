# Como Fazer Deploy/Update na Vercel

## 🚀 Método 1: Deploy Automático via Git (Recomendado)

### Passo 1: Verificar se tem Git configurado
```bash
git status
```

### Passo 2: Adicionar todas as alterações
```bash
git add .
```

### Passo 3: Fazer commit das mudanças
```bash
git commit -m "Update: EmailJS, ícones coloridos, logo otimizada e texto CFTV"
```

### Passo 4: Enviar para o repositório
```bash
git push origin main
```
ou
```bash
git push origin master
```

### Passo 5: Aguardar Deploy Automático
A Vercel vai detectar automaticamente o push e fazer o deploy! 🎉

Você pode acompanhar em: https://vercel.com/dashboard

---

## 🚀 Método 2: Deploy Manual via Vercel CLI

### Passo 1: Instalar Vercel CLI (se ainda não tem)
```bash
npm install -g vercel
```

### Passo 2: Fazer login na Vercel
```bash
vercel login
```

### Passo 3: Fazer deploy
```bash
vercel --prod
```

A Vercel vai:
1. Fazer build do projeto
2. Fazer upload dos arquivos
3. Publicar automaticamente

---

## 🚀 Método 3: Deploy via Dashboard Vercel

### Opção A: Conectar ao Git (Primeira vez)

1. Acesse https://vercel.com/dashboard
2. Clique em **"Add New..."** → **"Project"**
3. Conecte seu repositório GitHub/GitLab/Bitbucket
4. Selecione o repositório `site-nodex`
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Clique em **"Deploy"**

### Opção B: Atualizar Projeto Existente

Se você já tem o site na Vercel conectado ao Git:

1. Faça push das alterações (Método 1)
2. A Vercel detecta automaticamente
3. Deploy acontece sozinho!

---

## 📋 Checklist Antes do Deploy

- [ ] Build local funcionando: `npm run build`
- [ ] Site funcionando local: `npm run dev`
- [ ] Todas as alterações commitadas
- [ ] EmailJS configurado corretamente
- [ ] Ícones e logo no lugar certo (`public/assets/`)

---

## 🔧 Configurações da Vercel

### Build Settings
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Environment Variables (se necessário)
Não precisa adicionar nada para este projeto, pois as configurações do EmailJS estão no código.

---

## ⚡ Deploy Rápido (Recomendado)

Se você já tem o projeto conectado ao Git na Vercel, basta:

```bash
# 1. Adicionar alterações
git add .

# 2. Fazer commit
git commit -m "Update site: EmailJS + ícones + CFTV"

# 3. Enviar para repositório
git push

# 4. Aguardar! A Vercel faz o resto automaticamente 🎉
```

---

## 🔍 Verificar Deploy

1. Acesse https://vercel.com/dashboard
2. Veja o status do deploy em tempo real
3. Quando terminar, clique no link do site
4. Teste todas as funcionalidades:
   - [ ] Logo aparecendo
   - [ ] Ícones coloridos (Instagram/WhatsApp)
   - [ ] Formulário de contato funcionando
   - [ ] Texto CFTV na seção Serviços
   - [ ] Planos redirecionando para WhatsApp

---

## ❓ Problemas Comuns

### "Build failed"
- Verifique se `npm run build` funciona localmente
- Veja os logs de erro na Vercel

### "Site não atualiza"
- Limpe o cache do navegador (Ctrl + Shift + R)
- Aguarde alguns minutos (propagação de CDN)

### "Ícones não aparecem"
- Verifique se os arquivos estão em `public/assets/`
- Confirme que fez commit dos arquivos de imagem

---

## 📞 Precisa de Ajuda?

Me avise qual método você quer usar que eu te guio passo a passo! 😊
