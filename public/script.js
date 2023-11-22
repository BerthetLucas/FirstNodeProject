fetch("/api")
  .then(response => response.json())
  .then(data => display(data))
  .catch(error => console.error('Error:', error));



function display(data) {

    console.log(data); 

    const container = document.querySelector('.galerie-container'); 

   const dataTest = data; 

    data.forEach((item) => {
        title = document.createElement('h2'); 
        title.innerText = item.title; 
        img = document.createElement('img'); 
        img.setAttribute("src", item.image); 
        desc = document.createElement('p'); 
        desc.innerText = item.description; 

        container.appendChild(title); 
        container.appendChild(img); 
        container.appendChild(desc); 
    }); 

}