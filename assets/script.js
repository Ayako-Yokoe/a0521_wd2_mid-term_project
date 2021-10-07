function showCart() {
    const cartInfo = document.getElementById('cart-info')
    const cart = document.getElementById('cart')

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart')
    })
}

function addToCart() {
    const cartBtn = document.querySelectorAll('.store-item-icon')

    cartBtn.forEach(function(btn){
        btn.addEventListener('click', function(event){
            if(event.target.parentElement.classList.contains('store-item-icon')){ 
                let fullPath = event.target.parentElement.previouElementSiblig.src 
                let position = fullPath.indexOf('img') + 3
                let partialPath = fullPath.slice(pos)

                const item = {}
                item.img = `img-cart${partialPath}`
                let name = event.target.parentElement.nextElementSibling.
                children[0].children[0].textContent  
                item.name = name
                let price = event.target.parentElement.nextElementSibling.
                children[0].children[1].textContent
                let finalPrice = price.slice(1).trim()
                item.price = finalPrice

                const cartItem = document.createElement('div')
                cartItem.classList.add('cart-item') // *4

                cartItem.innerHTML = `
                <img src="${item.img}" alt="">
                <div class="item-text">
                  <p id="cart-item-title">${item.name}</p>
                  <span>$</span>
                  <span id="cart-item-price" class="cart-item-price">${item.price}</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                  <i class="fas fa-trash"></i>
                </a>
              </div>
                `
             // select cart
             const cart = document.getElementById('cart')
             const total = document.querySelector('.cart-total-container')

             cart.insertBefore(cartItem, total)
             alert('item added to the cart')
            }
        })
    })

    addToCart()

    // show totals
    function showTotals(){
        const total = []
        const items = document.querySelectorAll('.cart-item-price')

        items.forEach(function(item){
            total.push(parseFloat(item.textContent))
        })
        const totalMoney = total.reduce(function(total, item) {
            total += item
            return total
        }, 0)
        const finalMoney = totalMoney.toFixed(2)

        document.getElementById('cart-total').textContent = finalMoney
        document.getElementsByClassName('.item-total').textContent = finalMoney
        document.getElementById('item-count').textContent = total.length

    }
}

showTotals()
