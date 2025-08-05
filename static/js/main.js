// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    offset: 100
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target element
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active navigation links on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// Tab functionality for Minecraft section
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to current button and related content
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });
    
    testimonials[index].style.display = 'block';
}

if (testimonials.length > 0) {
    showTestimonial(currentIndex);
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });
}

// Create stars with correct z-index
function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (0.5px to 3px)
        const size = Math.random() * 2.5 + 0.5;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.5;
        
        // Some stars will twinkle
        if (Math.random() > 0.7) {
            star.classList.add('twinkle');
            // Random animation delay
            const animationDelay = Math.random() * 4;
            star.style.animationDelay = `${animationDelay}s`;
        }
        
        star.style.cssText = `
            position: absolute;
            top: ${y}%;
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${opacity};
            background-color: #ffffff;
            border-radius: 50%;
            box-shadow: 0 0 4px #ffffff, 0 0 8px rgba(255, 255, 255, 0.5);
            z-index: 2; /* Ensure consistent z-index */
        `;
        
        starsContainer.appendChild(star);
    }
}

// Create improved shooting stars/comets with dynamic tail direction
function createShootingStars() {
    const shootingStarsContainer = document.getElementById('shootingStars');
    
    // Create a new comet less frequently (more rare)
    setInterval(() => {
        // Only create a comet 30% of the time to make them more rare
        if (Math.random() > 0.7) {
            const shootingStar = document.createElement('div');
            shootingStar.classList.add('shooting-star');
            
            // Random position across the screen
            const startX = Math.random() * 70;
            const startY = Math.random() * 50;
            
            // Random direction for the comet (angle in degrees)
            const angle = Math.floor(Math.random() * 360);
            
            // Calculate end position based on angle
            // We'll use a fixed distance for simplicity
            const distance = 1000;
            const radians = angle * Math.PI / 180;
            const endX = startX + (Math.cos(radians) * distance);
            const endY = startY + (Math.sin(radians) * distance);
            
            // Random length for the comet tail
            const length = Math.random() * 150 + 50;
            
            // Random duration for the animation
            const duration = Math.random() * 3 + 2;
            
            // Set initial position and rotation
            shootingStar.style.cssText = `
                top: ${startY}%;
                left: ${startX}%;
                width: ${length}px;
                transform: rotate(${angle}deg);
                animation: none;
            `;
            
            // Create a unique animation for this shooting star
            const animationName = `shooting-${Date.now()}`;
            const keyframes = `
                @keyframes ${animationName} {
                    from {
                        transform: rotate(${angle}deg) translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: rotate(${angle}deg) translateX(${distance}px);
                        opacity: 0;
                    }
                }
            `;
            
            // Add the keyframes to the stylesheet
            const styleSheet = document.createElement('style');
            styleSheet.innerHTML = keyframes;
            document.head.appendChild(styleSheet);
            
            // Apply the animation
            setTimeout(() => {
                shootingStar.style.animation = `${animationName} ${duration}s linear forwards`;
            }, 10);
            
            shootingStarsContainer.appendChild(shootingStar);
            
            // Remove the shooting star after animation ends
            setTimeout(() => {
                shootingStar.remove();
                styleSheet.remove(); // Clean up the style element
            }, duration * 1000);
        }
    }, 8000); // Check every 8 seconds (making comets more rare)
}

// Replace astronaut with spaceship animation
function animateSpaceship() {
    const spaceship = document.getElementById('flyingSpaceship');
    if (!spaceship) return;
    
    // The animation is handled by CSS, but we can add some random variations
    setInterval(() => {
        // Random size variation
        const size = (Math.random() * 0.4 + 0.8).toFixed(2); // 0.8 to 1.2
        
        // Slightly random flight path
        const yOffset = (Math.random() * 40 - 20).toFixed(0); // -20 to +20
        
        spaceship.style.transform = `scale(${size})`;
        
        // Reset the animation
        spaceship.style.animation = 'none';
        spaceship.offsetHeight; // Trigger reflow
        
        // Random animation duration
        const duration = Math.floor(Math.random() * 20 + 30); // 30-50s
        
        spaceship.style.animation = `fly-spaceship ${duration}s linear forwards`;
        
        // Add some Y position randomness
        const keyframes = `
            @keyframes fly-spaceship {
                0% {
                    transform: translate(-150px, calc(50vh ${yOffset > 0 ? '+' : ''} ${yOffset}px)) rotate(10deg) scale(${size});
                    opacity: 0;
                }
                5% {
                    opacity: 1;
                }
                45% {
                    transform: translate(calc(40vw), calc(20vh ${yOffset > 0 ? '+' : ''} ${yOffset}px)) rotate(-5deg) scale(${size});
                }
                55% {
                    transform: translate(calc(60vw), calc(40vh ${yOffset > 0 ? '-' : '+'} ${yOffset}px)) rotate(5deg) scale(${size});
                }
                95% {
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(100vw + 150px), calc(70vh ${yOffset > 0 ? '+' : ''} ${yOffset}px)) rotate(-10deg) scale(${size});
                    opacity: 0;
                }
            }
        `;
        
        // Add the keyframes to the stylesheet
        const styleSheet = document.createElement('style');
        styleSheet.innerHTML = keyframes;
        document.head.appendChild(styleSheet);
        
    }, 40000); // New spaceship flight every 40 seconds
}

// Remove or modify the nebula effect that's creating unwanted circular gradients
function createNebula() {
    // Completely remove this function or leave it empty
    // This will prevent the creation of those circular gradients
    return; // Early return to prevent any execution
    
    /* Original code commented out:
    const spaceBackground = document.querySelector('.space-background');
    
    // Create several nebula clouds with different colors
    const colors = [
        'rgba(100, 255, 218, 0.03)', // Cyan
        'rgba(125, 95, 255, 0.03)',  // Purple
        'rgba(255, 100, 100, 0.03)'  // Red
    ];
    
    colors.forEach((color, index) => {
        const nebula = document.createElement('div');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 300 + 200;
        
        nebula.style.cssText = `
            position: absolute;
            top: ${y}%;
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle at center, ${color} 0%, transparent 70%);
            border-radius: 50%;
            filter: blur(30px);
            z-index: -1;
            opacity: 0.7;
        `;
        
        spaceBackground.appendChild(nebula);
    });
    */
}

// Initialize all dynamic space elements
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createShootingStars();
    // createNebula(); - already removed
    animateSpaceship();
    
    // Make sure there's no moon-related code here
});

// Form validation
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        let valid = true;
        const inputs = this.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && input.value.trim() === '') {
                valid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (valid) {
            // Here you would normally send the form data to your server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}
