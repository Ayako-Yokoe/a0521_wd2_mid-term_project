
// show like details
(function(){
    const seeLike =document.getElementById('seeLike');
    const likeDetails = document.getElementById('likeDtails');


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
                let fullPath = event.target.parentElement.parentElement.parentElement.nextElementSibling.src;
                let pos=fullPath.indexOf("images");  
                let partPath =fullPath.slice(pos+6);
     
               
                const item ={};
                item.img=` http://127.0.0.1:5500/assets/images-cart${partPath}`;

          
                let name= event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].textContent; //MINI CANELE Minin Kelly
                item.name=name;

             
                let price = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[3].textContent;
                let finalPrice =price.slice(1).trim(); 
                item.price=finalPrice;

                console.log(item);



                const likeItem = document.createElement('div');

  
                likeItem.classList.add("cart-item");
                likeItem.classList.add("like-item"); 


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

             
                const likeDtails=document.getElementById('likeDtails');
                const totalLike=document.querySelector('.cart-buttons-container');

             
                const itemTitles = likeDtails.getElementsByTagName('p');
                console.log(itemTitles);

            
                let found=false;
                let checkTimes =0;
                console.log(itemTitles.length);
               
                while(!found && checkTimes<itemTitles.length){
                    Array.from(itemTitles).forEach(function(iT){

                        
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
                    showTotals(); 
                }
             
                    

               
                
            

            }
        })   
    })

    // === show total ====
    function showTotals(){

        const items = document.querySelectorAll('.like-item-text');  
        console.log(items);
       
        document.getElementById('like-count').textContent=items.length;
    
    }


    const likeDtails = document.getElementById('likeDtails');
    
    likeDtails.addEventListener('click',function(event){

       
        if(event.target.classList.contains('fa-trash')){    
          
    
            const dying = event.target.parentElement;
            dying.parentElement.removeChild(dying); 
            

        }else if(event.target.classList.contains('clear-btn')){         
        
            const parent = event.target.parentElement.parentElement;
          
            while(parent.firstElementChild.classList[0]==="cart-item"){
                console.log(parent.firstElementChild.classList[0]==="cart-item");
                parent.removeChild(parent.firstElementChild);
            }
   
          
        }
           


      
        showTotals();  
    })




})();