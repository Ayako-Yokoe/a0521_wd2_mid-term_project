/* 
    SEARCH (filter) 
*/
let searchInput = document.querySelector('#search-item');
let galleryContainerRight=document.querySelector('.gallery-container-right');

searchInput.addEventListener('keyup',function(event){
    let searchChar=event.target.value.toLowerCase();
    console.log(searchChar);

    var productName = galleryContainerRight.getElementsByTagName('h3'); 
    console.log(productName);

    Array.from(productName).forEach(function(h3){ 
        let productTitle = h3.textContent.toLowerCase();
        console.log(productTitle.indexOf(searchChar));

        console.log(h3.parentElement);

        if (productTitle.indexOf(searchChar)!==-1){ 
            h3.parentElement.style.display="block";
        }else{           // === -1  means not found 
           
            h3.parentElement.style.display="none";
        }
    })



})