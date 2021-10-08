// show cart
const cartInfo = document.getElementById('cart-info')
const cart = document.getElementById('cart')
cartInfo.addEventListener('click', function() {
    cart.classList.toggle('show-cart')
})

// show totals
function showTotals(){
    const totalArray = []
    const items = document.querySelectorAll('.cart-item-price')

    items.forEach(function(item){
        totalArray.push(parseFloat(item.textContent))
    })

    var totalMoney = 0
    for(let i = 0; i < totalArray.length; i++){
        totalMoney += totalArray[i]
    }

    document.getElementById('cart-total').textContent = totalMoney
    document.getElementById('item-total').textContent = totalMoney
    document.getElementById('item-count').textContent = totalArray.length
}


// add to cart
const cartBtn = document.querySelectorAll('.store-item-icon')

cartBtn.forEach(function(btn){
    btn.addEventListener('click', function(event){
        if(event.target.parentElement.classList.contains('store-item-icon')){ 
            let path = event.target.parentElement.parentElement.parentElement.nextElementSibling.src 
            let position = path.indexOf('images') + 6
            let partialPath = path.slice(position)

            const item = {}
            item.img = `images-cart${partialPath}`

            let name = event.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.textContent      
            item.name = name

            let price = event.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling
            .nextElementSibling.nextElementSibling.textContent
            let finalPrice = price.slice(1).trim()
            item.price = finalPrice

            const cartItem = document.createElement('div')
            cartItem.classList.add('cart-item')

            cartItem.innerHTML = `
            <img src="/assets/${item.img}" alt="">
            <div class="item-text">
                <p id="cart-item-title">${item.name}</p>
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price">${item.price}</span>
            </div>
            <a href="#" class="cart-item-remove" id="cart-item-remove"></a>
            <i class="fas fa-trash"></i>
            `

            // select cart
            const cart = document.getElementById('cart')
            const total = document.querySelector('.cart-total-container')

            cart.insertBefore(cartItem, total)
            alert('item added to the cart')

            showTotals()
        }
    })


// clear items

const cartDetails = document.getElementById('cart');
cartDetails.addEventListener('click',function(event){

    if(event.target.classList.contains('fa-trash')){    
      
        const dying = event.target.parentElement;
        dying.parentElement.removeChild(dying);  //

        console.log(dying.parentElement)
        

    }else if(event.target.classList.contains('clear-btn')){         
    
        const parent = event.target.parentElement.parentElement;
      
        while(parent.firstElementChild.classList[0]==="cart-item"){
            console.log(parent.firstElementChild.classList[0]==="cart-item");
            parent.removeChild(parent.firstElementChild);
        }      
    } 
    showTotals();  
    
    })

})