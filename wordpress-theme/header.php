<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?> - <?php bloginfo('description'); ?></title>
    <meta name="description" content="Agência Ads Flow - Especialistas em tráfego pago, Google Ads, Meta Ads e Growth Marketing. Transformamos cliques em clientes e conectamos marcas ao público certo.">
    <meta name="keywords" content="agência marketing digital, tráfego pago, google ads, meta ads, facebook ads, instagram ads, growth marketing, landing pages, SEO">
    <link rel="canonical" href="<?php echo home_url(); ?>">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php bloginfo('name'); ?> - Marketing & Performance">
    <meta property="og:description" content="Transformamos cliques em clientes e conectamos marcas ao público certo.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo home_url(); ?>">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/og-image.jpg">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php bloginfo('name'); ?> - Marketing & Performance">
    <meta name="twitter:description" content="Transformamos cliques em clientes e conectamos marcas ao público certo.">
    <meta name="twitter:image" content="<?php echo get_template_directory_uri(); ?>/assets/og-image.jpg">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Ads Flow",
        "description": "Agência de marketing digital especializada em tráfego pago e growth marketing",
        "url": "<?php echo home_url(); ?>",
        "logo": "<?php echo get_template_directory_uri(); ?>/assets/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-34-99900-0559",
            "contactType": "Customer Service",
            "availableLanguage": "Portuguese"
        },
        "sameAs": [
            "https://www.facebook.com/adsflow",
            "https://www.instagram.com/adsflow",
            "https://www.linkedin.com/company/adsflow"
        ],
        "service": [
            {
                "@type": "Service",
                "name": "Google Ads Management",
                "description": "Campanhas otimizadas para máximo ROI no Google Ads"
            },
            {
                "@type": "Service",
                "name": "Meta Ads Management",
                "description": "Estratégias avançadas no Facebook e Instagram"
            },
            {
                "@type": "Service",
                "name": "Growth Marketing",
                "description": "Metodologias de crescimento acelerado baseadas em dados"
            }
        ]
    }
    </script>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header class="site-header">
        <div class="header-container">
            <a href="<?php echo home_url(); ?>" class="logo">
                Ads Flow
            </a>
            
            <nav class="main-nav">
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                    <li><a href="https://wa.me/5534999000559?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20de%20marketing..." target="_blank">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>