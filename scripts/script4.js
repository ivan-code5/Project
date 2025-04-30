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

  document.getElementById('loginBtn').addEventListener('click', function() { 
    const inputNames = document.getElementById('input1').value;
    const inputParol = document.getElementById('input2').value;
  
    const storedNames = localStorage.getItem('names');
    const storedParol = localStorage.getItem('parol');
 
    if (inputNames === storedNames && inputParol === storedParol) {
        window.location.href = 'index1.html';   
    } else {
        alert('Неверные логин или пароль');
    }
});

document.getElementById('registerBtn').addEventListener('click', function() {
    window.location.href = 'login.html';  
});

