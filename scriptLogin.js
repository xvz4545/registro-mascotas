// scriptLogin.js

const usuarioEjemplo = {
  email: "ejemplo@correo.com",
  password: btoa("clave123") // contraseña cifrada en base64
};

document.getElementById('loginBtn').onclick = function () {
  document.getElementById('loginModal').style.display = 'block';
};

document.querySelector('.close').onclick = function () {
  document.getElementById('loginModal').style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === document.getElementById('loginModal')) {
    document.getElementById('loginModal').style.display = 'none';
  }
};

document.getElementById('loginForm').onsubmit = function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validar formato del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un correo válido.');
    return;
  }

  // Validar longitud mínima de contraseña
  if (password.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    return;
  }

  // Cifrar contraseña para comparar
  const passwordCifrada = btoa(password);

  // Validar credenciales
  if (email === usuarioEjemplo.email && passwordCifrada === usuarioEjemplo.password) {
    alert('Inicio de sesión exitoso. ¡Bienvenido!');
    document.getElementById('loginModal').style.display = 'none';

    // Redirigir a crud.html
    window.location.href = 'crud.html';
  } else {
    alert('Correo o contraseña incorrectos.');
  }
};
