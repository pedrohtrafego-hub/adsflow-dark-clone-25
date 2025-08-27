/**
 * Ads Flow Theme JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.main-nav');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe service cards and other elements
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .section-title');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Contact form validation
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const message = this.querySelector('textarea[name="message"]').value.trim();
            
            let isValid = true;
            
            // Reset previous error states
            this.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            
            // Validate name
            if (name === '') {
                this.querySelector('input[name="name"]').classList.add('error');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '' || !emailRegex.test(email)) {
                this.querySelector('input[name="email"]').classList.add('error');
                isValid = false;
            }
            
            // Validate message
            if (message === '') {
                this.querySelector('textarea[name="message"]').classList.add('error');
                isValid = false;
            }
            
            if (isValid) {
                // Form is valid, you can submit it or process it
                console.log('Form is valid, submitting...');
                // Uncomment the next line to actually submit the form
                // this.submit();
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                this.appendChild(successMessage);
                
                // Reset form
                this.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
    
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Performance optimization - preload critical resources
    function preloadCriticalResources() {
        // Preload hero image if it exists
        const heroImage = document.querySelector('.hero-section img');
        if (heroImage && heroImage.dataset.src) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = heroImage.dataset.src;
            document.head.appendChild(link);
        }
    }
    
    preloadCriticalResources();
    
    // WhatsApp button pulse animation control
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        // Stop pulse animation when user hovers
        whatsappButton.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        whatsappButton.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
    
    // Analytics tracking for button clicks
    function trackButtonClick(buttonText, destination) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'Button',
                'event_label': buttonText,
                'value': destination
            });
        }
    }
    
    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-outline');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackButtonClick(this.textContent.trim(), this.href);
        });
    });
});

// CSS for animations (add to the CSS file)
const additionalCSS = `
.animate-in {
    animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.service-card,
.testimonial-card,
.section-title {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
}

.service-card.animate-in,
.testimonial-card.animate-in,
.section-title.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.success-message {
    background: #28a745;
    color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    text-align: center;
}

.error {
    border-color: #dc3545 !important;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.scrolled {
    background: rgba(0, 0, 0, 0.98) !important;
    backdrop-filter: blur(20px);
}

.lazy {
    opacity: 0;
    transition: opacity 0.3s;
}

.lazy.loaded {
    opacity: 1;
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);