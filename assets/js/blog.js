const back=document.querySelector('#back');
const author=document.querySelector('#username');

back.addEventListener('click', function (event) {
    event.preventDefault();
      location.replace("index.html");
    }
)


function displayblogContent() {
    const blogContent = JSON.parse(localStorage.getItem('bloginfo'));    
    const blogContentElement = document.createElement('div'); 
    const blogAuthorElement = document.createElement('p');
    blogContentElement.innerHTML += `<h2>Title: ${blogContent.title}</h2>`;
    blogContentElement.innerHTML += `<p>Content: ${blogContent.content}</p>`; 
    blogContentElement.innerHTML += `<p>Uploaded by: ${blogContent.username}</p>`; 

    // Choose where to display the content (replace with your desired location)
    const mainElement = document.querySelector('main');
    mainElement.appendChild(blogContentElement);
  } 

displayblogContent();
