// Portfolio Website JavaScript
// By Anand Kumar - Enhanced Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all features when page loads
    initTypingAnimation();
    initScrollAnimations();
    initHoverEffects();
    initEmailFunctionality();
    initSectionAnimations();
    initLoadingEffects();

});

// 1. Typing Animation for Tagline
function initTypingAnimation() {
    const tagline = document.querySelector('.tagline');
    if (!tagline) return;
    
    const text = tagline.textContent;
    tagline.textContent = '';
    tagline.style.borderRight = '2px solid rgba(255,255,255,0.8)';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        } else {
            // Remove cursor after typing complete
            setTimeout(() => {
                tagline.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // Start typing after 1.5 seconds
    setTimeout(typeWriter, 1500);
}

// 2. Scroll-based Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element comes into view
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        // Set initial state for animation
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        section.style.transitionDelay = `${index * 0.1}s`;
        
        observer.observe(section);
    });
}

// 3. Enhanced Hover Effects
function initHoverEffects() {
    // Skill cards enhanced hover
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateZ(2deg)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateZ(0deg)';
            this.style.boxShadow = 'none';
        });
    });

    // Project cards enhanced hover
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotateZ(1deg)';
            this.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateZ(0deg)';
            this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        });
    });

    // Contact cards enhanced hover
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08) rotateZ(-1deg)';
            this.style.boxShadow = '0 15px 30px rgba(255, 107, 107, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateZ(0deg)';
            this.style.boxShadow = 'none';
        });
    });
}

// 4. Contact Functionality (Email + Phone + Instagram)
function initEmailFunctionality() {
    // Email Card
    const emailCard = document.querySelector('.email-card');
    if (emailCard) {
        emailCard.style.cursor = 'pointer';
        emailCard.title = 'Click to send email';
        
        emailCard.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            window.location.href = 'mailto:anandkrpra3244@gmail.com?subject=Portfolio Contact&body=Hi Anand, I saw your portfolio and would like to connect...';
        });
    }

    // Phone Card
    const phoneCard = document.querySelector('.phone-card');
    if (phoneCard) {
        phoneCard.style.cursor = 'pointer';
        phoneCard.title = 'Click to call';
        
        phoneCard.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            window.location.href = 'tel:+916394676408';
        });
    }

    // Instagram Card
    const instaCard = document.querySelector('.instagram-card');
    if (instaCard) {
        instaCard.style.cursor = 'pointer';
        instaCard.title = 'Follow on Instagram';
        
        instaCard.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            window.open('https://instagram.com/being_anand_18', '_blank');
        });
    }

    // LinkedIn Card
const linkedinCard = document.querySelector('.linkedin-card');
if (linkedinCard) {
    linkedinCard.style.cursor = 'pointer';
    linkedinCard.title = 'View LinkedIn Profile';
    
    linkedinCard.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        window.open('https://linkedin.com/in/anandkumar-data-analyst', '_blank');
    });
}
}

// 5. Section Animation Delays
function initSectionAnimations() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
    });
}

// 6. Loading Effects and Page Enhancement
function initLoadingEffects() {
    // Header animation
    const header = document.querySelector('.header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            header.style.transition = 'all 1s ease-out';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 300);
    }

    // Profile image pulse animation
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        setInterval(() => {
            profileImg.style.transform = 'scale(1.05)';
            setTimeout(() => {
                profileImg.style.transform = 'scale(1)';
            }, 1000);
        }, 3000);
    }

    // Smooth scroll for any internal links (future use)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
}

// 7. Utility Functions

// Add parallax effect to background (subtle)
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        document.body.style.backgroundPosition = `center ${rate}px`;
    });
}

// Add dynamic greeting based on time
function addDynamicGreeting() {
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour < 12) greeting = '🌅 Good Morning!';
    else if (hour < 17) greeting = '☀️ Good Afternoon!';
    else greeting = '🌙 Good Evening!';
    
    const description = document.querySelector('.description');
    if (description) {
        const greetingElement = document.createElement('p');
        greetingElement.textContent = greeting;
        greetingElement.style.fontSize = '1.1rem';
        greetingElement.style.marginTop = '15px';
        greetingElement.style.fontWeight = 'bold';
        description.parentNode.insertBefore(greetingElement, description.nextSibling);
    }
}

// Initialize special effects on load
setTimeout(() => {
    addDynamicGreeting();
    // initParallaxEffect(); // Uncomment if you want parallax
}, 2000);

// Add some Easter eggs for fun
let clickCount = 0;
document.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 10) {
        console.log('🎉 Thanks for exploring my portfolio! - Anand Kumar');
        clickCount = 0; // Reset counter
    }
});

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// Add this at the top of your script.js file, after the initial DOMContentLoaded event

// Smooth scroll optimization for high refresh rate displays
function optimizeScrolling() {
    // Enable smooth scrolling with CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Reduce animation frequency on high refresh displays
    const preferredFrameRate = 60; // Target 60fps instead of 144fps for animations
    let lastFrameTime = 0;
    
    function throttleAnimations(callback) {
        return function(...args) {
            const now = performance.now();
            if (now - lastFrameTime >= (1000 / preferredFrameRate)) {
                lastFrameTime = now;
                callback.apply(this, args);
            }
        };
    }
    
    // Apply to scroll events
    window.addEventListener('scroll', throttleAnimations(() => {
        // Scroll-based animations will now be throttled to 60fps
    }), { passive: true });
}

// Call this function early in your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    optimizeScrolling(); // Add this line first
    
    // Rest of your existing functions...
    initTypingAnimation();
    initScrollAnimations();
    initHoverEffects();
    initEmailFunctionality();
    initSectionAnimations();
    initLoadingEffects();
});
// Console message for developers
console.log(`
🚀 Portfolio Website by Anand Kumar
📧 anandkrpra3244@gmail.com
🏢 BrightAds - Marketing Agency
💻 Built with HTML, CSS & JavaScript

Thanks for checking out the code! 😊
`);
// Contact Form Enhancement
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Add loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            // Reset after form submission
            setTimeout(() => {
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 3000);
        });
    }
}

// Add this to your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // ... existing functions
    initContactForm(); // Add this line
});

// End of script.js



