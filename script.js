 // Toggle contact form in navbar
        document.getElementById('contact-link').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('contact-form').classList.toggle('active');
        });

        // Close contact form when clicking outside
        document.addEventListener('click', function(e) {
            const contactForm = document.getElementById('contact-form');
            const contactLink = document.getElementById('contact-link');
            
            if (!contactForm.contains(e.target) && e.target !== contactLink) {
                contactForm.classList.remove('active');
            }
        });

        // Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            });
        });