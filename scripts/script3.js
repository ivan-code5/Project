document.addEventListener("DOMContentLoaded", () => {
    preloader = document.querySelector('div#preloader'); 
    console.log(preloader); 
  
    const content = document.querySelector('.content');
      if (preloader && content) {
          setTimeout(() => {
              preloader.style.opacity = '0';
              preloader.style.visibility = 'hidden';
  
              content.style.display = 'block';
  
  
              preloader.remove();
          }, 1800); 
      }
  });

  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', function() {
      const name = input1.value;
      const password = input2.value;

      if (name && password) {
          localStorage.setItem('names', name);
          localStorage.setItem('parol', password);
          window.location.href = 'index1.html';
      } else {
          alert('Заполните оба поля');
      }
  });
