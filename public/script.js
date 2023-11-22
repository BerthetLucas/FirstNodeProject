fetch("/api")
  .then(response => response.json())
  .then(data => display(data))
  .catch(error => console.error('Error:', error));



function display(data) {

    console.log(data); 

    const container = document.querySelector('.galerie-container'); 

   const dataTest = data; 

    data.forEach((item) => {

        img = document.createElement('img'); 
        img.setAttribute("src", item.image); 

        container.appendChild(img); 
    }); 

}