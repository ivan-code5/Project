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
                          <button onclick="viewPost(${post.id})">Read More</button>
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
      }
    };
  
    const renderComments = () => {
      commentList.innerHTML = comments
        .map((comment) => `<li>${comment}</li>`)
        .join("");
    };
  
    renderPosts();
  });
  
