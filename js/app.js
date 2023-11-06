const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();


function addComment() {
  var name = document.getElementById('comment-name').value;
  var commentText = document.getElementById('comment-text').value;

  if (name && commentText) {
    var commentContainer = document.getElementById('comments-container');

    var commentDiv = document.createElement('div');
    commentDiv.className = 'comment';

    var commentContent = '<strong>' + name + ':</strong> ' + commentText;
    commentDiv.innerHTML = commentContent;

    commentContainer.appendChild(commentDiv);

    // Limpar o formulário
    document.getElementById('new-comment-form').reset();
  } else {
    alert('Por favor, preencha todos os campos do formulário.');
  }
}