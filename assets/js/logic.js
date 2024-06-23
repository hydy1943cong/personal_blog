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
      localStorage.setItem('bloginfo', JSON.stringify(bloginfo));
    }
)
  