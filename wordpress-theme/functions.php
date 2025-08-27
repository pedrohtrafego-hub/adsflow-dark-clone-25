<?php
/**
 * Ads Flow Theme Functions
 */

// Theme Setup
function adsflow_theme_setup() {
    // Add theme support for various features
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menu
    register_nav_menus(array(
        'primary' => 'Primary Menu',
    ));
}
add_action('after_setup_theme', 'adsflow_theme_setup');

// Enqueue Scripts and Styles
function adsflow_scripts() {
    // Enqueue theme stylesheet
    wp_enqueue_style('adsflow-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue Google Fonts
    wp_enqueue_style('adsflow-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap', array(), null);
    
    // Enqueue theme JavaScript
    wp_enqueue_script('adsflow-script', get_template_directory_uri() . '/js/theme.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'adsflow_scripts');

// Custom Post Types and Fields can be added here if needed

// SEO Optimization Functions
function adsflow_add_meta_tags() {
    if (is_home() || is_front_page()) {
        echo '<meta name="description" content="Agência Ads Flow - Especialistas em tráfego pago, Google Ads, Meta Ads e Growth Marketing. Transformamos cliques em clientes.">';
        echo '<meta name="keywords" content="agência marketing digital, tráfego pago, google ads, meta ads, growth marketing">';
    }
}
add_action('wp_head', 'adsflow_add_meta_tags');

// Remove unnecessary WordPress features for performance
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

// Custom Logo Support
function adsflow_custom_logo_setup() {
    $defaults = array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array('site-title', 'site-description'),
    );
    add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'adsflow_custom_logo_setup');

// Widget Areas
function adsflow_widgets_init() {
    register_sidebar(array(
        'name'          => 'Footer Widget Area',
        'id'            => 'footer-widgets',
        'description'   => 'Widgets that appear in the footer',
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'adsflow_widgets_init');

// Performance Optimizations
function adsflow_optimize_performance() {
    // Disable emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    
    // Remove jQuery migrate
    function adsflow_remove_jquery_migrate($scripts) {
        if (!is_admin() && isset($scripts->registered['jquery'])) {
            $script = $scripts->registered['jquery'];
            if ($script->deps) {
                $script->deps = array_diff($script->deps, array('jquery-migrate'));
            }
        }
    }
    add_action('wp_default_scripts', 'adsflow_remove_jquery_migrate');
}
add_action('init', 'adsflow_optimize_performance');

// Contact Form Processing (if using custom contact form)
function adsflow_process_contact_form() {
    if (isset($_POST['contact_form_submit'])) {
        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $message = sanitize_textarea_field($_POST['message']);
        
        // Send email
        $to = get_option('admin_email');
        $subject = 'Novo contato do site - Ads Flow';
        $body = "Nome: $name\nEmail: $email\nMensagem: $message";
        $headers = array('Content-Type: text/html; charset=UTF-8');
        
        if (wp_mail($to, $subject, $body, $headers)) {
            wp_redirect(add_query_arg('sent', '1', wp_get_referer()));
            exit;
        }
    }
}
add_action('init', 'adsflow_process_contact_form');

// Custom excerpt length
function adsflow_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'adsflow_excerpt_length');

// Custom excerpt more
function adsflow_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'adsflow_excerpt_more');
?>