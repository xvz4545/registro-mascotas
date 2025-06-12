
document.addEventListener('DOMContentLoaded', () => {
  console.log("Página cargada y lista para usar");

  
  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  
  const botones = document.querySelectorAll('.btn');
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      boton.classList.toggle('btn-success');
      boton.classList.toggle('btn-primary');
    });
  });

  
  const beneficios = document.querySelectorAll('.animate-beneficio');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  beneficios.forEach(el => observer.observe(el));

  
  const formSuscripcion = document.getElementById('form-suscripcion');
  const inputEmail = document.getElementById('email-suscripcion');
  const mensaje = document.getElementById('mensaje-suscripcion');

  if (formSuscripcion) {
    formSuscripcion.addEventListener('submit', (e) => {
      e.preventDefault();
      const correo = inputEmail.value.trim();

      if (!correo || !correo.includes('@')) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
      }

      
      mensaje.style.display = 'block';

      
      inputEmail.value = '';

      
      setTimeout(() => {
        mensaje.style.display = 'none';
      }, 4000);
    });
  }
});

  
