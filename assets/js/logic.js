const username=document.querySelector('#username');
const title=document.querySelector('#title');
const content=document.querySelector('#content');
const submit=document.querySelector('#submit');



submit.addEventListener('click', function (event) {
    event.preventDefault();
    const bloginfo = {
        username: username.value,
        title: title.value,
        content: content.value.trim()
      };
      if (username.value === '') {
        alert("Username cannot be blank");
      } else if (title.value === '') {
        alert("Title cannot be blank");
      } else if (content.value === '') {
        alert('Content cannot be blank');
      };
      localStorage.setItem('bloginfo', JSON.stringify(bloginfo));
      location.replace("blog.html");
    }
)


  