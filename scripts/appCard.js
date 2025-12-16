 let card = JSON.parse(localStorage.getItem('cardProduct')) || [];
 const count = document.querySelector('.count')
 const cardContainer = document.querySelector('.cart-products')
 let totalPrice = document.querySelector('.cart-info b')
 const cardInfo = document.querySelector('.cart-info')
 const alertBox = document.querySelector('.alert');
 const yesBtn = document.querySelector('.yes-btn');
 const noBtn = document.querySelector('.no-btn');
 const alertText = document.querySelector('.alert-pro-name span');

 let deleteIndex = null;


 function amountHandler() {
     count.innerHTML = card.length
 }
 amountHandler()

 function elements(product, index) {
     return `
       <div class="cart-product">

                    <div class="id">
                         <b>${index+1}</b>
                    </div>

                    <div class="pro-name">
                        <span>${product.name}</span>
                       <b>${product.type}</b>
</div>

                   <div class="pro-image">
                     <img src=${product.img} alt="">
                    </div>

                  <div class="pro-amount">
                       <button onclick="counter('plus' , ${index})">+</button>
                         <span>${product.amount}</span>
                     <button onclick="counter('minus' , ${index})">-</button>
                     </div>

                    <div class="pro-price">
                        <b>$ ${product.price*product.amount }</b>
                  </div>

 <div class="cart-actions">
                        <button onclick="deleteProduct(${index})">
                      <i class="fa-solid fa-trash"></i>
                   </button>
                    </div>

                 </div>
    `;
 }
 card.forEach((product, index) => {
     cardContainer.innerHTML += elements(product, index);
 })


 function deleteProduct(index) {
     deleteIndex = index;
     alertText.innerHTML = card[index].name;
     alertBox.classList.add('active');
 }

 function updateCartUI() {
     amountHandler();
     totalHandler();

     if (card.length === 0) {
         cardContainer.innerHTML = `
            <h2>your cart is empty ...</h2>
            <b><a href='/views/shop.html'>back to shop</a></b>
        `;
         cardInfo.style.display = 'none';
     } else {
         cardContainer.innerHTML = card.map((p, i) => elements(p, i)).join('');
         cardInfo.style.display = 'flex';
     }
 }


 function totalHandler() {
     let total = 0;
     card.forEach(e => {
         const amt = e.amount || 1;
         total += (Number(e.price) || 0) * amt;
     });

     // ابحث عن totalPrice بعد كل render
     const totalPriceElement = document.querySelector('.cart-info b');
     if (totalPriceElement) {
         totalPriceElement.innerHTML = ` $${total}`;
     }
 }

 totalHandler()
 if (card.length == 0) {
     cardInfo.style.display = 'none'
     cardContainer.innerHTML = ` </h2>your card is empty ...</h2>
                <b><a href='/views/shop.html'>back to shop</a></b>`
 }

 function counter(action, index) {
     if (action === 'plus') {
         card[index].amount += 1
     } else {
         if (card[index].amount > 1) {
             card[index].amount -= 1
         } else {
             card[index].amount = 1
         }
     }
     localStorage.setItem('cardProduct', JSON.stringify(card))
     cardContainer.innerHTML = card.map((p, i) => elements(p, i)).join('');
     amountHandler()
     totalHandler()
 }
 yesBtn.onclick = function() {
     if (deleteIndex !== null) {
         card.splice(deleteIndex, 1);
         localStorage.setItem('cardProduct', JSON.stringify(card));

         updateCartUI();
     }

     alertBox.classList.remove('active');
 }
 noBtn.onclick = function() {
     alertBox.classList.remove('active');
 }
 const menuBtn = document.querySelector('.menu-btn');
 const mobileMenu = document.querySelector('.mobile-menu');

 menuBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('show');

 });