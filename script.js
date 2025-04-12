        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu after clicking
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navigation-menu');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Back to top button
        const backToTopButton = document.querySelector('.back-to-top');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });

        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                // Here you would typically send this data to a server
                console.log('Form submitted:', { name, email, subject, message });
                
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            });
        }

        // Download CV button
        const downloadCV = document.getElementById('downloadCV');
        if (downloadCV) {
            downloadCV.addEventListener('click', function(e) {
                e.preventDefault();
                alert('CV download functionality would be implemented here.');
                // In a real implementation, you would link to your actual CV file
                // window.location.href = 'path/to/your-cv.pdf';
            });
        }

        // View All Projects button
        const viewAllProjects = document.getElementById('viewAllProjects');
        if (viewAllProjects) {
            viewAllProjects.addEventListener('click', function(e) {
                e.preventDefault();
                alert('This would show all projects in a dedicated page.');
            });
        }

        // Certificate modal
        const certificateModal = new bootstrap.Modal(document.getElementById('certificateModal'));
        const certificateImage = document.getElementById('certificateImage');
        
        document.querySelectorAll('.view-certificate').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const certType = this.getAttribute('data-cert');
                // Set the appropriate image based on certificate type
                certificateImage.src = `./${certType}-certificate.jpg`; // You would have actual certificate images
                certificateModal.show();
            });
        });

        // Animate elements when they come into view
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.fade-in');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Run once on page load
        animateOnScroll();
        
        // Then run on scroll
        window.addEventListener('scroll', animateOnScroll);