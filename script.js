/* ===================================
   Digital Letter for Thaynara - Script
   Interactive Functionality
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const revealBtn = document.getElementById('revealBtn');
    const messageSection = document.getElementById('message');
    const welcomeSection = document.getElementById('welcome');
    const starfield = document.getElementById('starfield');
    
    // Create dynamic starfield
    createStarfield();
    
    // Button click handler - reveal message
    if (revealBtn && messageSection) {
        revealBtn.addEventListener('click', function() {
            revealMessage();
        });
    }
    
    // Function to reveal the message with animation
    function revealMessage() {
        // Hide button with fade out
        revealBtn.style.opacity = '0';
        revealBtn.style.transform = 'translateY(-20px)';
        
        setTimeout(function() {
            revealBtn.classList.add('hidden');
            
            // Show message section
            messageSection.classList.remove('hidden');
            
            // Trigger reflow for animation
            messageSection.offsetHeight;
            
            // Add visible class for animation
            messageSection.classList.add('visible');
            
            // Scroll to message
            setTimeout(function() {
                messageSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }, 400);
    }
    
    // Function to create dynamic starfield
    function createStarfield() {
        if (!starfield) return;
        
        const starCount = 50;
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random position
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 3 + 1;
            
            // Random animation delay
            const delay = Math.random() * 5;
            
            // Random duration
            const duration = Math.random() * 3 + 4;
            
            // Random color (golden, white, or lilac)
            const colors = ['#c9a227', '#ffffff', '#b47cff'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            star.style.cssText = `
                position: absolute;
                left: ${x}%;
                top: ${y}%;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                opacity: ${Math.random() * 0.5 + 0.3};
                animation: twinkle ${duration}s ease-in-out infinite;
                animation-delay: ${delay}s;
            `;
            
            fragment.appendChild(star);
        }
        
        starfield.appendChild(fragment);
    }
    
    // Add smooth scroll behavior for quotes
    const quoteCards = document.querySelectorAll('.quote-card');
    quoteCards.forEach(function(card, index) {
        card.style.animationDelay = (index * 0.2 + 0.8) + 's';
        card.style.opacity = '0';
        card.style.animation = 'fadeInUp 0.8s ease-out forwards';
        card.style.animationDelay = (index * 0.2 + 0.8) + 's';
    });
    
    // Keyboard accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            if (document.activeElement === revealBtn) {
                e.preventDefault();
                revealMessage();
            }
        }
    });
    
    // Add focus styles for accessibility
    if (revealBtn) {
        revealBtn.addEventListener('focus', function() {
            revealBtn.style.boxShadow = '0 0 0 3px rgba(201, 162, 39, 0.5), 0 0 30px rgba(201, 162, 39, 0.3)';
        });
        
        revealBtn.addEventListener('blur', function() {
            revealBtn.style.boxShadow = '';
        });
    }
    
    // Welcome section animation on load
    if (welcomeSection) {
        welcomeSection.style.opacity = '0';
        welcomeSection.style.transform = 'translateY(30px)';
        
        setTimeout(function() {
            welcomeSection.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            welcomeSection.style.opacity = '1';
            welcomeSection.style.transform = 'translateY(0)';
        }, 100);
    }
});
