 // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('nav');

        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });

        // Cart Functionality
        const cartCount = document.querySelector('.cart-count');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                let currentCount = parseInt(cartCount.textContent);
                cartCount.textContent = currentCount + 1;
                
                // Animation feedback
                button.textContent = 'Added!';
                button.style.backgroundColor = '#27ae60';
                
                setTimeout(() => {
                    button.textContent = 'Add to Cart';
                    button.style.backgroundColor = '#3498db';
                }, 1500);
            });
        });

        // Newsletter Form Submission
        const newsletterForm = document.querySelector('.newsletter-form');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input').value;
            
            // In a real implementation, you would send this to a server
            alert(`Thank you for subscribing with ${email}!`);
            e.target.reset();
        });

        // Scroll Animation
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            // Add shadow to header when scrolling
            if (scrollPosition > 50) {
                document.querySelector('header').style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            } else {
                document.querySelector('header').style.boxShadow = 'none';
            }
        });

        // Initialize animations
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.animate');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            animatedElements.forEach(element => {
                observer.observe(element);
            });
        });