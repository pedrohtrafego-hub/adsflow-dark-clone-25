# Ads Flow WordPress Theme

Um tema WordPress moderno e responsivo para agências de marketing digital, especializado em tráfego pago e growth marketing.

## 🚀 Características

- **Design Moderno**: Interface dark com efeitos de partículas e gradientes
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **SEO Otimizado**: Meta tags, structured data e performance otimizada
- **Componentes Reutilizáveis**: Sistema de design consistente
- **Integração WhatsApp**: Botões de CTA direcionam para WhatsApp
- **Animações**: Efeitos de scroll e hover suaves
- **Performance**: Código otimizado e carregamento rápido

## 📁 Estrutura dos Arquivos

```
wordpress-theme/
├── style.css           # CSS principal do tema
├── index.php          # Página inicial
├── header.php         # Cabeçalho
├── footer.php         # Rodapé
├── functions.php      # Funções do tema
├── js/
│   └── theme.js       # JavaScript do tema
├── assets/            # Imagens e recursos
└── README.md          # Este arquivo
```

## 🔧 Instalação

1. **Download dos arquivos**: Baixe todos os arquivos da pasta `wordpress-theme/`

2. **Criação do tema**: 
   - Crie uma pasta com o nome `ads-flow` em `/wp-content/themes/`
   - Faça upload de todos os arquivos para esta pasta

3. **Ativação**:
   - Acesse o painel do WordPress
   - Vá em Aparência > Temas
   - Ative o tema "Ads Flow Marketing Agency"

4. **Configuração das imagens**:
   - Faça upload das imagens para a pasta `assets/`
   - Certifique-se de que os caminhos estão corretos

## 📸 Imagens Necessárias

Você precisará das seguintes imagens na pasta `assets/`:

- `team-meeting.jpg` - Imagem da equipe (seção sobre)
- `google-ads-dashboard.jpg` - Dashboard do Google Ads
- `meta-ads-dashboard.jpg` - Dashboard do Meta Ads  
- `growth-marketing.jpg` - Imagem de growth marketing
- `logo.png` - Logo da empresa
- `og-image.jpg` - Imagem para redes sociais

## ⚙️ Personalização

### Cores do Tema

As cores principais podem ser alteradas no arquivo `style.css`:

```css
:root {
    --primary-color: #26C6DA;      /* Cor principal (cyan) */
    --primary-dark: #00BCD4;       /* Cor primária escura */
    --background-dark: #0A0A0A;    /* Fundo escuro */
    --card-background: #1A1A1A;    /* Fundo dos cards */
    --text-secondary: #CCCCCC;     /* Texto secundário */
    --border-color: #333333;       /* Cor das bordas */
}
```

### Conteúdo

Para personalizar o conteúdo:

1. **Textos**: Edite diretamente no arquivo `index.php`
2. **Links do WhatsApp**: Substitua o número nos links por seu número
3. **Logo**: Substitua "Ads Flow" pela sua marca no `header.php`
4. **Depoimentos**: Edite a seção de testimonials no `index.php`

### Menu de Navegação

O menu é definido no `header.php`. Para adicionar/remover itens, edite a variável `$nav_items`:

```php
$nav_items = array(
    'Sobre' => '#sobre',
    'Serviços' => '#servicos', 
    'Depoimentos' => '#depoimentos',
    'Contato' => '#contato'
);
```

## 📱 WhatsApp Integration

Todos os botões de CTA direcionam para o WhatsApp. Para personalizar:

1. Substitua `5534999000559` pelo seu número
2. Personalize as mensagens pré-definidas nos links
3. O botão flutuante do WhatsApp está no `footer.php`

## 🎨 Seções Principais

### Hero Section
- Título principal com efeito gradient
- Chamada para ação
- Efeito de partículas animadas

### Sobre
- Informações da agência
- Badges de certificação
- Imagem da equipe

### Serviços
- Grid de serviços com ícones
- Cards com hover effects
- CTA para contato

### Serviços Detalhados
- Google Ads, Meta Ads e Growth Marketing
- Imagens dos dashboards
- Lista de benefícios
- CTAs específicos

### Depoimentos
- Cards de clientes
- Layout responsivo
- Informações dos clientes

### CTA Final
- Chamada para ação principal
- Link direto para WhatsApp

## 🔍 SEO Features

- Meta tags otimizadas
- Structured data (JSON-LD)
- Open Graph para redes sociais
- URLs amigáveis
- Performance otimizada
- Mobile-first design

## 📊 Google Analytics

Para adicionar o Google Analytics, insira o código no `header.php` antes do `</head>`:

```php
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## ⚡ Performance

O tema já vem otimizado com:

- CSS minificado
- JavaScript otimizado
- Imagens lazy loading
- Remoção de scripts desnecessários do WordPress
- Preload de recursos críticos

## 🐛 Troubleshooting

### Problema: Imagens não aparecem
**Solução**: Verifique se as imagens estão na pasta `assets/` e os caminhos estão corretos

### Problema: Links do WhatsApp não funcionam
**Solução**: Verifique se o número está no formato correto (com código do país)

### Problema: Menu não funciona no mobile
**Solução**: Certifique-se de que o JavaScript está carregando corretamente

### Problema: Cores não aplicam
**Solução**: Limpe o cache do navegador e verifique se o CSS está sendo carregado

## 📞 Suporte

Este tema foi desenvolvido especificamente para a Ads Flow. Para customizações adicionais, você pode:

1. Editar os arquivos CSS e PHP conforme necessário
2. Adicionar plugins do WordPress para funcionalidades extras
3. Implementar um sistema de blog usando os templates padrão do WordPress

## 📝 Licença

Este tema é proprietário da Ads Flow. Uso restrito conforme acordado.

---

**Desenvolvido para Ads Flow - Marketing & Performance**