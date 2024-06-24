const username=document.querySelector('#username');
const title=document.querySelector('#title');
const content=document.querySelector('#content');
const submit=document.querySelector('#submit');
const modeMain=document.querySelector('#modeMain');


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
      } else {
        localStorage.setItem('bloginfo', JSON.stringify(bloginfo));
        location.replace("blog.html");
      };
      
    }
)

modeMain.addEventListener('click',function(event) {
    event.preventDefault();
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")){
    document.getElementById("modeMain").innerHTML = "Light Mode";
}
else {  document.getElementById("modeMain").innerHTML = "Dark Mode";}
}
)

  