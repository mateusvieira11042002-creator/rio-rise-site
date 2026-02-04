# GUIA: COMO PUBLICAR SEU SITE ONLINE

## 🚀 Opções de Hospedagem

### 1. NETLIFY (Recomendado para Iniciantes) ⭐

**Vantagens:**
- Deploy automático do GitHub
- HTTPS grátis
- CDN global rápida
- Free tier generoso (100GB/mês)
- Suporta formulários

**Passo a Passo:**

1. Criar conta em https://www.netlify.com/
2. Fazer login
3. Clicar em "Add new site" → "Deploy manually"
4. Arrastar a pasta do seu site para a área indicada
5. Pronto! Seu site estará online com URL tipo: `seu-site-123.netlify.app`

**Para usar domínio próprio:**
1. Ir em "Site settings"
2. Procurar "Custom domain"
3. Adicionar seu domínio
4. Seguir instruções de DNS

### 2. VERCEL

**Vantagens:**
- Excelente performance
- Deploy automático
- Analytics integradas
- Grátis

**Passo a Passo:**

1. Acessar https://vercel.com/
2. Conectar conta GitHub
3. Importar repositório
4. Pronto! Deploy automático a cada push

### 3. GITHUB PAGES (Totalmente Grátis)

**Vantagens:**
- Grátis
- Integrado com Git
- Acesso ao código sempre

**Passo a Passo:**

1. Criar repositório no GitHub (nome: `seu-usuario.github.io`)
2. Fazer push dos arquivos
3. Ir em Settings → Pages
4. Selecionar branch `main`
5. Site estará em: `seu-usuario.github.io`

### 4. FIREBASE HOSTING (Google)

**Vantagens:**
- Grátis (com limites generosos)
- Integração com Google
- Performance otimizada
- CDN global

**Passo a Passo:**

1. Criar projeto em https://firebase.google.com/
2. Instalar Firebase CLI: `npm install -g firebase-tools`
3. Fazer login: `firebase login`
4. Inicializar: `firebase init hosting`
5. Deploy: `firebase deploy`

### 5. HOSPEDAGEM COMPARTILHADA (Se preferir Tradicional)

**Recomendações:**
- Hostinger (https://www.hostinger.com.br/)
- SiteGround (https://www.siteground.com/)
- Bluehost (https://www.bluehost.com/)

**Passo a Passo:**

1. Contratar plano
2. Acessar cPanel
3. Fazer upload via FTP:
   - Use FileZilla (gratuito)
   - Conectar com dados FTP fornecidos
   - Upload dos arquivos para pasta `public_html`
4. Pronto!

## 💻 Usando Git e GitHub

Se quiser usar Netlify/Vercel/GitHub Pages, você precisa do Git.

### Instalação do Git

1. Baixar em https://git-scm.com/
2. Instalar (seguir assistente)
3. Verificar: `git --version` no terminal

### Criando Repositório GitHub

1. Ir para https://github.com/
2. Clicar em "New repository"
3. Nome: `meu-site`
4. Descrição: "Meu site pessoal/profissional"
5. Criar repositório

### Enviando Código

```bash
# Abrir terminal na pasta do seu site

# Inicializar git
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Inicial: estrutura do site"

# Adicionar repositório remoto (copiar URL do GitHub)
git remote add origin https://github.com/seu-usuario/meu-site.git

# Enviar para GitHub
git push -u origin main
```

## 🌐 Registrar Domínio

### Onde Comprar

1. **Registro.br** (Domínios .com.br)
   - https://www.registro.br/
   - Oficial do Brasil
   - Preço: ~R$ 40/ano

2. **Namecheap**
   - https://www.namecheap.com/
   - Barato
   - Muitos TLDs

3. **GoDaddy**
   - https://www.godaddy.com/
   - Muita promoção

### Após Comprar o Domínio

1. **Obter Servidores DNS:**
   - Netlify/Vercel fornece automaticamente
   - Ou use nameservers padrão

2. **Apontar para Hospedagem:**
   - Ir no registrador
   - Procurar "DNS Settings" ou "Nameservers"
   - Adicionar endereços fornecidos pela hospedagem

3. **Aguardar Propagação:**
   - Pode levar até 24 horas
   - Verificar em https://whatsmydns.net/

### Exemplo Prático (Netlify)

1. Comprar domínio `meunegocio.com.br`
2. Publicar site no Netlify
3. No painel Netlify:
   - Site settings → Domain management
   - Add custom domain
   - Adicionar `meunegocio.com.br`
4. Seguir instruções de DNS
5. Pronto!

## 📋 Checklist Pre-Publicação

Antes de publicar, verifique:

- [ ] Arquivo principal é `index.html` (não `index_novo.html`)
- [ ] Todos os links funcionam
- [ ] Imagens aparecem corretamente
- [ ] Formulário está funcional
- [ ] Site responsivo (testar em mobile)
- [ ] Sem erros no console (F12 → Console)
- [ ] Velocidade de carregamento OK
- [ ] Todos os botões funcionam
- [ ] Links externos abrem corretamente
- [ ] Title e description da página estão corretos

## 🔍 Após Publicar

### 1. Registrar em Google Search Console

1. Acessar https://search.google.com/search-console/
2. Adicionar propriedade
3. Escolher "URL prefix" e adicionar seu domínio
4. Verificar propriedade (seguir instruções)
5. Enviar sitemap (vai gerar automaticamente)

### 2. Registrar em Google Analytics

1. Acessar https://analytics.google.com/
2. Criar nova propriedade
3. Adicionar seu site
4. Copiar código de rastreamento
5. Adicionar ao `<head>` do HTML

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

### 3. Criar Sitemap

1. Usar https://www.xml-sitemaps.com/
2. Colocar URL do site
3. Fazer download do sitemap
4. Colocar arquivo `sitemap.xml` na raiz
5. Adicionar ao robots.txt

### 4. Criar Robots.txt

Criar arquivo `robots.txt` na raiz:

```
User-agent: *
Allow: /
Sitemap: https://seu-site.com/sitemap.xml
```

## 🎯 Otimizações Após Publicar

### Performance

1. **Google PageSpeed Insights**
   - Acessar: https://pagespeed.web.dev/
   - Analisar seu site
   - Seguir recomendações

2. **Otimizar Imagens**
   - Usar TinyPNG: https://tinypng.com/
   - Converter para WebP se possível
   - Implementar lazy loading

3. **Minificar CSS/JS**
   - Usar ferramentas online
   - Ou configurar build process

### SEO

1. **Meta Tags**
   ```html
   <title>Seu Site - Descrição Breve</title>
   <meta name="description" content="Descrição do site (160 caracteres)">
   <meta name="keywords" content="palavra1, palavra2, palavra3">
   ```

2. **Headings Semânticos**
   - H1 uma vez por página
   - H2, H3 em ordem
   - Não pular níveis

3. **Links Internos**
   - Ligar seções relacionadas
   - Usar textos descritivos

## 💰 Estimativa de Custos

| Item | Custo |
|------|-------|
| Domínio .com.br | ~R$ 40/ano |
| Hospedagem Netlify | Grátis |
| Hospedagem Hostinger | ~R$ 3-5/mês |
| Email Corporativo | ~R$ 0-50/mês |
| **Total Mínimo** | **Grátis (com domínio free) ou ~R$ 40/ano** |

## 🎓 Próximas Melhorias

Depois de publicado:

1. **Blog/News**
   - Adicionar seção de posts
   - Melhor para SEO
   - Engaja visitantes

2. **Galeria**
   - Showcases de trabalhos
   - Portfólio

3. **Chat/WhatsApp**
   - Widget para contato
   - Melhora conversão

4. **Email Automático**
   - Resposta automática de contato
   - Newsletter

5. **Análises**
   - Comportamento de visitantes
   - Páginas mais visitadas
   - Taxa de conversão

## 🆘 Troubleshooting

### "Domínio não está funcionando"
- Verificar propagação DNS (até 24h)
- Testar em https://whatsmydns.net/
- Limpar cache do navegador

### "Site está lento"
- Otimizar imagens
- Verificar no PageSpeed Insights
- Usar CDN
- Minificar arquivos

### "Formulário não funciona"
- Verificar se campo é obrigatório
- Testar em console (F12)
- Verificar validação

### "Imagens não aparecem"
- Verificar caminho do arquivo
- Usar caminho relativo: `assets/images/foto.jpg`
- Verificar se arquivo existe

## 📞 Suporte

Se tiver problemas:

1. **Netlify Support**: https://support.netlify.com/
2. **GitHub Issues**: Pesquisar por problemas similares
3. **Stack Overflow**: https://stackoverflow.com/
4. **Comunidades**: Dev.to, Reddit r/webdev

---

**Você está pronto para publicar!** 🎉

Escolha a opção que mais se adequa ao seu caso e siga os passos.

Boa sorte! 🚀
