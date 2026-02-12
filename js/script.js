   document.addEventListener("DOMContentLoaded", function() {
            const footerContent = document.getElementById('footerContent');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        footerContent.classList.add('visible');
                    }
                });
            }, { threshold: 0.2 });
            observer.observe(document.querySelector('.footer'));
        });