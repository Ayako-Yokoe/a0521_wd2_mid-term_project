//(function(){})();

// show like details
(function(){
    const seeLike =document.getElementById('seeLike');
    const likeDetails = document.getElementById('likeDtails');

    console.log(seeLike);
    console.log(likeDetails);

    seeLike.addEventListener('click',function(){
        likeDetails.classList.toggle('show-cart');
    });
})();


// add items to the like details
(function(){
    const likeBtn = document.querySelectorAll('.card-overlay-icons');
    console.log(likeBtn);

    likeBtn.forEach((btn)=>{
        btn.addEventListener('click',function(event){
            if (event.target.parentElement.classList.contains('card-overlay-icons-like')){
                
                // === to get img path ===
                console.log(event.target.parentElement.parentElement.parentElement.nextElementSibling); 
                console.log(event.target.parentElement.parentElement.parentElement.nextElementSibling.src); 
                let fullPath = event.target.parentElement.parentElement.parentElement.nextElementSibling.src;
                let pos=fullPath.indexOf("images-gallery");  
                let partPath =fullPath.slice(29+14) 
              
                // === to create a leteral object ===
                const item ={};
                item.img=`http://127.0.0.1:5500/assets/images-cart${partPath}`;

                // === to get product name === 
                let name= event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].textContent; 
                item.name=name;

                // === to get product price === 
                let price = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[3].textContent;
                let finalPrice =price.slice(1).trim(); 
                item.price=finalPrice;

                console.log(item);


                // === create new element  -- likeItem ===
                const likeItem = document.createElement('div');

                //add style by applaying .class
                likeItem.classList.add("cart-item");
                console.log(likeItem); //<div class="cart-item"></div>

                //set innerHTML
                likeItem.innerHTML=`
                    
                    <img src="${item.img}" alt="" class="cart-item-img" id="cart-item-img">
                    <div class="cart-item-text like-item-text">
                        <p class="cart-item-title">
                            ${item.name}
                        </p>
                
                    </div>
                    <a href="#" class="cart-item-remove" id="cart-item-remove"></a>
                    <i class="fas fa-trash"></i>
            
                `

                // insert new element(likeItem) just created 
                const likeDtails=document.getElementById('likeDtails');
                const totalLike=document.querySelector('.cart-buttons-container');

                likeDtails.insertBefore(likeItem,totalLike);
                alert(`the "${item.name}" has been added to your like list!`);
                showTotals();  // call the function
                
            

            }
        })   
    })

    // === show total ====
    function showTotals(){

        const items = document.querySelectorAll('.like-item-text');  // select mutiple elements
        console.log(items);
       
        document.getElementById('like-count').textContent=items.length;
    
    }

/* delete and clear all like items */
    const likeDtails = document.getElementById('likeDtails');

    
    likeDtails.addEventListener('click',function(event){

        // delete like items
        if(event.target.classList.contains('fa-trash')){     
          
            const dying = event.target.parentElement;
            dying.parentElement.removeChild(dying); 
            
        // clear all like item    
        }else if(event.target.classList.contains('clear-btn')){      
            const parent = event.target.parentElement.parentElement;
            while(parent.firstElementChild.classList[0]==="cart-item"){
                console.log(parent.firstElementChild.classList[0]==="cart-item");
                parent.removeChild(parent.firstElementChild);
            }
   
            
        }
        showTotals();  // call the function
    })


})();



