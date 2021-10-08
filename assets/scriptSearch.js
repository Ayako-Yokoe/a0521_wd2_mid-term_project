
/* for test */
let test=document.getElementsByTagName('div');
let test2=document.getElementsByClassName('gallery-container-right');
//console.log(test);
//console.log(test2);

let words ="mini canele minin kelly cactus cement desert potted plant $ 20"
console.log(words.indexOf("ni"));
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
    
// Array.from() to convert it to an array
    Array.from(productName).forEach(function(h3){ // <h3></h3>
        //console.log(h3);
        //console.log(h3.textContent); // print out all descendant's text
        //console.log(h3.innerText); // print out direct child's text
        //console.log(h3.innerHTML);

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