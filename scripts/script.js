'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

document.addEventListener("DOMContentLoaded", () => {
    const posts = [
      { id: 1, title: "Отзыв", excerpt: "Неплохой ресурс" },
      { id: 2, title: "Отзыв", excerpt: "Как агроном я заинтересован" }
    ];
  
    const comments = [];
  
    const blogPosts = document.getElementById("blog-posts");
    const commentList = document.getElementById("comment-list");
    const commentInput = document.getElementById("comment-input");
  
    const renderPosts = () => {
      blogPosts.innerHTML = posts
        .map(
          (post) => `
                      <div class="post">
                          <h3>${post.title}</h3>
                          <p>${post.excerpt}</p>
                      </div>
                  `
        )
        .join("");
    };
  
    window.addComment = () => {
      const commentText = commentInput.value;
      if (commentText) {
        comments.push(commentText);
        renderComments();
        commentInput.value = "";
        window.sessionStorage.setItem('comment', commentText);
      }
      console.log(window.sessionStorage);
    };
  
    const renderComments = () => {
      commentList.innerHTML = comments
        .map((comment) => `<li>${comment}</li>`)
        .join("");
    };
  
    renderPosts();
  });

 /* document.addEventListener("DOMContentLoaded", function() { 
    document.querySelectorAll('textarea, input').forEach(function(e) {
       
        e.addEventListener('input', function() {
            window.sessionStorage.setItem(e.name, e.value);
        })
    })

}); 
  */

/* 
        *   Алгоритм
        *
        *   1. Начало.
        *   2. Получено значение (из кнопки секции 1)
        *   3. Получено значение (из кнопки секции 3)
        *   3.1 Если значения боль ше 0, перемножение
        *   4. получено значение (из кнопки секции 4)
        *   4.1 если значения больше 0, перемножение
        *   5. получено значение (из кнопки секции 5)
        *   5.1 если значения больше 0, перемножение
        *   6.получено значение (из кнопки секции 6)
        *   6.1 если значения больше 0, перемножение
        *   7.получено значение (из кнопки секции 7)
        *   7.1 если значения больше 0, перемножение
        *   8.получено значение (из кнопки секции 8)
        *   8.1 если значения больше 0, перемножение
        *   9.получено значение (из кнопки секции 9)
        *   9.1 если значения больше 0, перемножение
        *   10. ввод значения в поле ввода
        *   10.1 если значение больше 0, перемножение
        *   11. перемножение значения с заданой переменной
        *   12. вывод значений
        *   13. Конец
        * 
        *   Блок-схема: /images/block-schema.png
        */

document.getElementById("enter__button").addEventListener("click", function () {
  console.log('кнопка нажата')
});

