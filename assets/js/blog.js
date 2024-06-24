const back=document.querySelector('#back');
const mainElement = document.querySelector('main');
const mode=document.querySelector('#mode');

back.addEventListener('click', function (event) {
    event.preventDefault();
      location.replace("index.html");
    }
)

mode.addEventListener('click',function(event) {
    event.preventDefault();
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")){
    document.getElementById("mode").innerHTML = "Light Mode";
}
else {  document.getElementById("mode").innerHTML = "Dark Mode";}
}
)



function displayblogContent() {
  let blogEntries=JSON.parse(localStorage.getItem('blogEntries'));
    for (const entry of blogEntries) {
      const blogEntryElement = document.createElement('div'); 
      blogEntryElement.classList.add('blogEntry'); 
  
      const blogTitleElement = document.createElement('h2');
      blogTitleElement.textContent = `Title: ${entry.title}`;
      blogEntryElement.appendChild(blogTitleElement);
  
      const blogContentElement = document.createElement('p');
      blogContentElement.textContent = `Content: ${entry.content}`;
      blogEntryElement.appendChild(blogContentElement);
  
      const blogAuthorElement = document.createElement('p');
      blogAuthorElement.textContent = `Posted by: ${entry.username}`;
      blogEntryElement.appendChild(blogAuthorElement);
  
      mainElement.appendChild(blogEntryElement);
    }
  }
  
displayblogContent();
