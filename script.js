document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Industrial Glitch Strobe on Hover
    const glitchLinks = document.querySelectorAll('.nav-links a, .btn-zine');
    glitchLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.opacity = '0.5';
            setTimeout(() => { link.style.opacity = '1'; }, 50);
        });
    });

    // Simple Form Submission for Urban Zine
    const zineForm = document.getElementById('zineForm');
    if (zineForm) {
        zineForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = zineForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'UPLOADING...';
            btn.style.backgroundColor = '#FFFFFF';
            btn.style.color = '#000000';
            btn.disabled = true;

            setTimeout(() => {
                alert('SIGNAL RECEIVED. THE UNDERGROUND HAS LOGGED YOUR DATA.');
                zineForm.reset();
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
                btn.disabled = false;
            }, 1500);
        });
    }
});
