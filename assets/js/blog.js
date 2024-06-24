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
    const blogEntriesElement = document.createElement('div'); 
    const blogAuthorElement = document.createElement('p');
    blogEntriesElement.innerHTML += `<h2>Title: ${entry.title}</h2>`;
    blogEntriesElement.innerHTML += `<p>Content: ${entry.content}</p>`; 
    blogEntriesElement.innerHTML += `<p>Uploaded by: ${entry.username}</p>`;  
    mainElement.appendChild(blogEntriesElement);
    }  
  } 

displayblogContent();
