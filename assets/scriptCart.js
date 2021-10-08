//(function(){})();

// show like details
(function(){
    const cartInfo =document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    console.log(cartInfo);
    console.log(cart);

    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart');
    });
})();


// add items to the cart
(function(){
    const cartBtn = document.querySelectorAll('.card-overlay-icons');
    console.log(cartBtn);

    cartBtn.forEach((btn)=>{
        btn.addEventListener('click',function(event){
            if (event.target.parentElement.classList.contains('card-overlay-icons-cart')){
                
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


                // === create new element  -- cartItem ===
                const cartItem = document.createElement('div');

                //add style by applaying .class
                cartItem.classList.add("cart-item");
                console.log(cartItem); //<div class="cart-item"></div>

                //set innerHTML
                cartItem.innerHTML=`
                    
                    <img src="${item.img}" alt="" class="cart-item-img" id="cart-item-img">
                    <div class="cart-item-text">
                        <p class="cart-item-title">
                            ${item.name}
                        </p>
                    <span>$</span>
                        <span class=" cart-item-price" id="cart-item-price"> ${item.price}</span>
                    </div>

                    <a href="#" class="cart-item-remove" id="cart-item-remove"></a>
                    <i class="fas fa-trash"></i>

                `

                // insert new element(cartItem) just created 
                const cart=document.getElementById('cart');
                const cartTotal=document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem,cartTotal);
                alert(`the "${item.name}" has been added to your shopping cart!`);
                showTotals();  // call the function
                
            

            }
        })   
    })

    // === show total ====
    function showTotals(){

        // create an empty arr
        const total=[];
        const items = document.querySelectorAll('.cart-item-price');   // select mutiple elements
        console.log(items);

        items.forEach((item)=>{
            console.log(item.textContent);
            total.push(parseFloat(item.textContent));  // parseFloat() to conver a string to a number
        })
        console.log(total);

        // reduce() is to return the sum of all the elements in an array.
        // put callback function as an argument: 
        const totallMoney = total.reduce((sum,currentValue)=>{
            sum+=currentValue;
            return sum;
        },0) // set initial value to 0
        console.log(totallMoney);
       

        // show total amount to browser
        document.getElementById('item-count').textContent=items.length;
        document.getElementById('item-total').textContent=totallMoney;
        document.getElementById('cart-total').textContent=totallMoney;

    
    }


/* delete and clear all cart items */
    const cart = document.getElementById('cart');

    
    cart.addEventListener('click',function(event){

        // delete cart items
        if(event.target.classList.contains('fa-trash')){      // 或 if(event.target.classList[1]==='fa-trash')){}
            //console.log(event.target.classList);
            console.log(event.target.parentElement);  //  <div class="cart-item "></div>
            console.log(event.target.parentNode);     //  <div class="cart-item "></div>
    
            const dying = event.target.parentElement;
            dying.parentElement.removeChild(dying); // 或 dying.parentNode.removeChild(dying);
            

        // clear all cart items    
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
   
            
        }
        showTotals();  // call the function
    })


})();



