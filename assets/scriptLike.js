//(function(){})();

// show like details
(function(){
    const seeLike =document.getElementById('seeLike');
    const likeDetails = document.getElementById('likeDtails');

    console.log(seeLike);
    console.log(likeDetails);

    seeLike.addEventListener('click',function(){
        likeDetails.classList.toggle('show-like');
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
                console.log(event.target.parentElement.parentElement.parentElement.nextElementSibling); // <img></img>
                console.log(event.target.parentElement.parentElement.parentElement.nextElementSibling.src); // http://127.0.0.1:5501/assets/images-cart${partPath}
                let fullPath = event.target.parentElement.parentElement.parentElement.nextElementSibling.src;
                let pos=fullPath.indexOf("images-gallery");  //29
                let partPath =fullPath.slice(29+14) // "/p1.png"
              
                // === to create a leteral object ===
                const item ={};
                item.img=`http://127.0.0.1:5501/assets/images-cart${partPath}`;

                // === to get product name === 
                let name= event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].textContent; //MINI CANELE Minin Kelly
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
                //console.log(likeItem); //<div class="cart-item"></div>

                likeItem.classList.add("like-item"); //<div class="cart-item cart-item"></div>
                //console.log(likeItem);

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

                // ===  insert new element(likeItem) just created & deal with duplicate=== 
                const likeDtails=document.getElementById('likeDtails');
                const totalLike=document.querySelector('.cart-buttons-container');

                // to grab all like items' title inside whishlist(likeDtails)
                const itemTitles = likeDtails.getElementsByTagName('p');
                console.log(itemTitles);

                // Array.from() to convert it to an array
                let found=false;
                let checkTimes =0;
                console.log(itemTitles.length);
               
                while(!found && checkTimes<itemTitles.length){
                    Array.from(itemTitles).forEach(function(iT){
                        //console.log('.innerText:',iT.innerText);
                        //console.log('.textContent:',iT.textContent);
                        //console.log('.innerHTML:',iT.innerHTML);
                        
                        console.log(iT.innerText.toLowerCase());
                        console.log(item.name.toLowerCase());

                        if(iT.innerText.toLowerCase().indexOf(item.name.toLowerCase())!== -1 ){ // found
                            alert(`the "${item.name}" has already exist in your wishlist!`);

                            found=true;

                        }else {
                            checkTimes+=1;

                        }
                            
                    })
                }
                if(!found){
                    likeDtails.insertBefore(likeItem,totalLike);
                    alert(`the "${item.name}" has been added to your wishlist!`);
                    showTotals();  // call the function
                }
             
                    

               
                
            

            }
        })   
    })

    // === show total ====
    function showTotals(){

        const items = document.querySelectorAll('.like-item-text');  // select mutiple elements
        console.log(items);
       
        document.getElementById('like-count').textContent=items.length;
    
    }

/* delete and clear all like items / add to shopping cart from like items */
    const likeDtails = document.getElementById('likeDtails');

    
    likeDtails.addEventListener('click',function(event){

        // +++ delete like items +++
        if(event.target.classList.contains('fa-trash')){      // 或 if(event.target.classList[1]==='fa-trash')){}
            //console.log(event.target.classList);
            console.log(event.target.parentElement);  //  <div class="cart-item "></div>
            console.log(event.target.parentNode);     //  <div class="cart-item "></div>
    
            const dying = event.target.parentElement;
            dying.parentElement.removeChild(dying); // 或 dying.parentNode.removeChild(dying);
            

        // +++ clear all like item +++   
        }else if(event.target.classList.contains('clear-btn')){      // 或 if(event.target.classList[0]==='clear-btn')){}        
            //console.log(event.target.classList);
            //console.log(event.target.parentElement.parentElement.firstElementChild); // <div class="cart-item "></<div>
            //console.log(event.target.parentElement.parentElement.firstChild);  // #text
            const parent = event.target.parentElement.parentElement;
            //console.log(parent);
            //console.log(parent.firstElementChild);
            //console.log(parent.childNodes);


            while(parent.firstElementChild.classList[0]==="cart-item"){
                console.log(parent.firstElementChild.classList[0]==="cart-item");
                parent.removeChild(parent.firstElementChild);
            }
   
           // +++ add-to-cart-from-like items  +++
        }else if(event.target.classList.contains('fa-cart-arrow-down')){
            console.log('add to cart');
            console.log(event.target);  //<i class="fas fa-cart-arrow-down"></i>

            // remove the item from like/whishlist
            const dying = event.target.parentElement.parentElement;
            //console.log(dying); //<div class="cart-item like-item"></>
            dying.parentElement.removeChild(dying); // 或 dying.parentNode.removeChild(dying);

            // add the item from like/whishlist
                // 1.create new element  -- cartItem 
            const cartItem = document.createElement('div');

                // 2. to find out the same one inside gallery
           


        }
        showTotals();  // call the function
    })




})();



