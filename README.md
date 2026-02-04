# Meu Site - Documentação

Bem-vindo ao seu novo site! Este é um projeto completamente limpo e organizado, pronto para ser customizado com suas próprias funcionalidades.

## Estrutura de Pastas

```
rio rise/
├── index_novo.html          # Novo HTML limpo (use este arquivo)
├── assets/
│   ├── css/
│   │   └── style.css        # Estilos CSS principais
│   ├── js/
│   │   └── script.js        # JavaScript principal
│   └── images/              # Pasta para suas imagens
└── README.md                # Esta documentação
```

## Como Começar

1. **Renomear o arquivo**: Delete o antigo `index.html` e renomeie `index_novo.html` para `index.html`

2. **Editar o conteúdo**: Abra o `index.html` e customize com suas informações

3. **Adicionar imagens**: Coloque suas imagens na pasta `assets/images/`

4. **Personalizar estilos**: Edite `assets/css/style.css` conforme necessário

## Seções do Site

### 1. Header (Navegação)
- Logo/Título do site
- Menu de navegação com links para seções

### 2. Hero Section
- Banner principal com destaque
- Botão de chamada para ação (CTA)

### 3. Services (Serviços)
- 3 cards de serviços (você pode adicionar mais)
- Hover effect para interatividade

### 4. About (Sobre)
- Seção para contar sua história
- Descrição do seu negócio

### 5. Contact (Contato)
- Formulário para os visitantes entrarem em contato
- Validação básica de campos

### 6. Payment Methods (Formas de Pagamento)
- Exibição das formas de pagamento aceitas
- Fácil de customizar

### 7. Footer
- Copyright
- Links rápidos
- Links para políticas

## Variáveis CSS

O arquivo `style.css` usa variáveis CSS para facilitar customização:

```css
:root {
    --primary-color: #007BFF;        /* Cor principal */
    --secondary-color: #6C757D;      /* Cor secundária */
    --success-color: #28A745;        /* Cor de sucesso */
    --danger-color: #DC3545;         /* Cor de perigo */
    --dark-color: #343A40;           /* Cor escura */
    --light-color: #F8F9FA;          /* Cor clara */
}
```

Para alterar as cores globalmente, basta mudar essas variáveis!

## Adicionar Novas Seções

Para adicionar uma nova seção ao site:

1. **HTML**: Adicione uma nova `<section>` no `index.html`:
```html
<section id="nova-secao" class="nova-secao">
    <div class="container">
        <h2>Minha Nova Seção</h2>
        <!-- Seu conteúdo aqui -->
    </div>
</section>
```

2. **CSS**: Adicione estilos em `assets/css/style.css`:
```css
.nova-secao {
    background-color: var(--white-color);
    padding: var(--spacing-xxl) var(--spacing-md);
}
```

3. **JavaScript**: Adicione interatividade em `assets/js/script.js` conforme necessário

## Adicionar Formas de Pagamento

Para adicionar mais formas de pagamento, adicione cards na seção `payment-methods`:

```html
<div class="payment-option">
    <h3>PayPal</h3>
    <p>Pagamento rápido e seguro</p>
</div>
```

## Formulário de Contato

O formulário envia os dados via console por enquanto. Para conectar a um backend:

1. Abra `assets/js/script.js`
2. Localize a função `initContactForm()`
3. Substitua `submitForm()` com sua URL de API:

```javascript
submitForm('/api/contact', {
    nome: nome,
    email: email,
    mensagem: mensagem
});
```

## Responsividade

O site é totalmente responsivo! Usa media queries para:
- **Desktop**: Versão completa com múltiplas colunas
- **Tablet** (até 768px): Layouts adaptados
- **Mobile** (até 480px): Versão mobile otimizada

## Cores e Temas

### Paleta Padrão
- **Primária**: Azul (#007BFF)
- **Secundária**: Cinza (#6C757D)
- **Sucesso**: Verde (#28A745)
- **Perigo**: Vermelho (#DC3545)

Para mudar o tema, edite as variáveis CSS em `style.css`.

## Como Adicionar Imagens

1. Salve suas imagens em `assets/images/`
2. Referencie no HTML:
```html
<img src="assets/images/sua-imagem.jpg" alt="Descrição">
```

## Próximos Passos

- [ ] Adicionar seu logo
- [ ] Customizar cores e fonts
- [ ] Adicionar mais conteúdo
- [ ] Conectar formulário a backend
- [ ] Adicionar integração com formas de pagamento (Stripe, PayPal, etc)
- [ ] Deploy do site

## Suporte e Documentação

Para dúvidas sobre HTML, CSS e JavaScript, consulte:
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)

## Licença

Este projeto é seu! Use livremente para seu negócio.

---

**Última atualização**: Fevereiro 2026

Boa sorte com seu site! 🚀
