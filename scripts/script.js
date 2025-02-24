'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

document.getElementById("calculate").addEventListener("click", function () { 
  alert("Результаты получены"); 
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




var var1, var2, var3, var4, var5, var6, var7, var8;
    var var9;
    var10 = 60;
    var11 = 90;
    var12 = 90;
  function getValue(value) {
    switch (value) {
      case 1:
        var1 = value;
        break;
      case 2:
        var2 = value;
        break;
      case 3:
        var3 = value;
        break;
      case 4:
        var4 = value;
        break;
      case 5:
        var5 = value;
        break;
      case 6:
        var6 = value;
        break;
      case 7:
        var7 = value;
        break;
      case 8:
        var8 = value;
        break;
    }
  }

  function getResult(result) {
    if (var1 > 0 && var2 > 0 && var3 > 0 && var4 > 0 && var5 > 0 && var6 > 0 && var7 > 0 && var8 > 0) { 
      var result = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var9 * var10;
      document.getElementById("calculate").textContent = "Результат: азот" + result;  
      window.savedResult = result;
      }
      else {
      alert("Обязательно укажите площадь");
      }
    if (var1 > 0 && var2 > 0 && var3 > 0 && var4 > 0 && var5 > 0 && var6 > 0 && var7 > 0 && var8 > 0) { 
      var result = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var9 * var11;
      document.getElementById("calculate").textContent = "Результат: азот" + result;  
      window.savedResult = result;
      }
      else {
      alert("Обязательно укажите площадь");
      }
      if (var1 > 0 && var2 > 0 && var3 > 0 && var4 > 0 && var5 > 0 && var6 > 0 && var7 > 0 && var8 > 0) { 
        var result = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var9 * var12;
        document.getElementById("calculate").textContent = "Результат: азот" + result;  
        window.savedResult = result;
      }
      else {
      alert("Обязательно укажите площадь");
      }
  }

  function reset() { 
    var1 = null;
    var2 = null;
    var3 = null;
    var4 = null;
    var5 = null;
    var6 = null;
    var7 = null;
    var8 = null;
    var9 = null;
    document.getElementById("result").textContent = "";
  }

  