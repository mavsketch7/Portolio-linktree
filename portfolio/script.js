const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');

// Seguir al mouse
document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

// Hover en enlaces y botones
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = "translate(-50%, -50%) scale(2)";
        cursor.style.background = "rgba(0,0,0,0.2)";
        cursor.style.border = "2px solid var(--bg-color)";
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.background = "transparent";
        cursor.style.border = "2px solid var(--text-color)";
    });
});


// Scroll suave personalizado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

