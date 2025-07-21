// Espera que todo el contenido del DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    //  Selecciona todos los enlaces que tienen scroll hacia secciones (con clase .scroll-link)
    const scrollLinks = document.querySelectorAll('.scroll-link');

    //  Selecciona todas las secciones de la página a las que se puede hacer scroll (con clase .page-section)
    const sections = document.querySelectorAll('.page-section');

    //  Selecciona todos los enlaces dentro del menú de navegación
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    //  Funcionalidad para hacer scroll suave al hacer clic en un enlace
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que el enlace redireccione inmediatamente

            // Obtiene el ID de la sección destino (remueve el "#" del href)
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                //  Ajusta la posición considerando la altura del header sticky
                const headerOffset = document.querySelector('.header').offsetHeight;
                const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 20; // Padding adicional

                //  Scroll animado hacia la posición calculada
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                //  Actualiza el enlace activo inmediatamente tras hacer clic
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    //  Configuración del IntersectionObserver
    const observerOptions = {
        root: null, // Usa la ventana del navegador como viewport
        rootMargin: '-50% 0px -50% 0px', // Detecta cuando la sección está centrada verticalmente
        threshold: 0 // Activa cuando cualquier parte de la sección es visible
    };

    //  Observador que detecta qué sección está visible para marcar el enlace activo
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSectionId = entry.target.id;

                // Limpia clases activas y activa la del enlace correspondiente a la sección visible
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentSectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    //  Observa cada sección para detectar cuándo entra en el viewport
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    //  Función alternativa para resaltar el enlace activo en caso de que falle el IntersectionObserver
    function highlightActiveLinkOnLoad() {
        let currentActiveLink = null;

        // Recorre las secciones desde abajo hacia arriba
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();

            // Verifica si la sección está en el centro de la pantalla aproximadamente
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentActiveLink = document.querySelector(`.scroll-link[href="#${section.id}"]`);
                break;
            }
        }

        // Si se encuentra una sección visible, marca su enlace como activo
        if (currentActiveLink) {
            navLinks.forEach(link => link.classList.remove('active'));
            currentActiveLink.classList.add('active');
        }
    }

    // Ejecuta la función anterior al cargar la página y al hacer scroll
    window.addEventListener('load', highlightActiveLinkOnLoad);
    window.addEventListener('scroll', () => {
        //  Si hay problemas de rendimiento, se puede optimizar con debounce o throttle
        highlightActiveLinkOnLoad();
    });
});
