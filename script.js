let menuVisible = false;

// Función que oculta o muestra el menú
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
    menuVisible = !menuVisible;
}

// Función para ocultar el menú al seleccionar una opción
function seleccionar() {
    if (menuVisible) {
        toggleMenu(); // Reutilizar la función toggle para cerrar el menú
    }
}

// Función que aplica las animaciones de las habilidades cuando están en el viewport
function efectoHabilidades() {
    const skills = document.getElementById("skills");
    const distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if (distanciaSkills >= 300) {
        document.querySelectorAll('.progreso').forEach((el, index) => {
            const clases = ["javascript", "htmlcss", "photoshop", "wordpress", "drupal", "comunicacion", "trabajo", "creatividad", "dedicacion", "proyect"];
            if (index < clases.length) el.classList.add(clases[index]);
        });
    }
}

// Detectar el desplazamiento para aplicar la animación de la barra de habilidades
window.addEventListener('scroll', efectoHabilidades);

// Listener para manejar los clicks en los enlaces del menú
document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', seleccionar);
});

// Listener para el botón del menú responsivo
document.querySelector('.nav-responsive').addEventListener('click', toggleMenu);
