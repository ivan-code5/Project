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