// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // DOM Elements
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const contactForm = document.getElementById('contactForm');
    const header = document.querySelector('.header');

    // Mobile Menu Functionality
    function toggleMobileMenu() {
        console.log('Toggle menu clicked'); // Debug
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }

    // Mobile menu toggle - Verificar que el elemento existe
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    } else {
        console.error('Mobile menu elements not found');
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos obligatorios.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un email válido.');
                return;
            }
            
            // Simulate form submission
            alert('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
            contactForm.reset();
        });
    }
    
    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 25px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
        
        // Enter key to toggle mobile menu when focused
        if (e.key === 'Enter' && document.activeElement === mobileMenuBtn) {
            toggleMobileMenu();
        }
    });
    
});
