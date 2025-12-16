 const products = [{
     name: "Dell Precision Edge",
     type: "laptops",
     price: 6500,
     dis: 9500,
     review: 17,
     img: "/assets/images/laptops/DellPrecisionEdge.png",
     amount: 1
 }, {
     name: "HP Aura ProBook",
     type: "laptops",
     price: 10200,
     dis: 12200,
     review: 11,
     img: "/assets/images/laptops/HPAuraProBook.png",
     amount: 1
 }, {
     name: "MacBook Obsidian Stealth",
     type: "laptops",
     price: 17500,
     dis: 20000,
     review: 40,
     img: "/assets/images/laptops/MacBookObsidianStealth.png",
     amount: 1
 }, {
     name: "Alienware Quantum Core",
     type: "laptops",
     price: 5500,
     dis: 8000,
     review: 34,
     img: "/assets/images/laptops/AlienwareQuantumCore.png",
     amount: 1

 }, {
     name: "ROG Zenith Blaze",
     type: "laptops",
     price: 6800,
     dis: 8000,
     review: 13,
     img: "/assets/images/laptops/ROGZenithBlaze.png",
     amount: 1
 }, {
     name: "Samsung Galaxy Zenith",
     type: "phones",
     price: 9000,
     dis: 11500,
     review: 20,
     img: "/assets/images/phones/SamsungGalaxyZenith.png",
     amount: 1
 }, {
     name: "Pixel Aura Flow",
     type: "phones",
     price: 7800,
     dis: 9000,
     review: 13,
     img: "/assets/images/phones/PixelAuraFlow.png",
     amount: 1
 }, {
     name: "Huawei Nova Prism",
     type: "phones",
     price: 5800,
     dis: 6300,
     review: 13,
     img: "/assets/images/phones/HuaweiNovaPrism.png",
     amount: 1
 }, {
     name: "iPhone Onyx Pro",
     type: "phones",
     price: 9000,
     dis: 11500,
     review: 20,
     img: "/assets/images/phones/iPhoneOnyxPro.png",
     amount: 1
 }, {
     name: "Echo Horizon",
     type: "headphones",
     price: 500,
     dis: 800,
     review: 17,
     img: "/assets/images/headphones/EchoHorizon.png",
     amount: 1
 }, {
     name: "RogueAudio Pro",
     type: "headphones",
     price: 950,
     dis: 1100,
     review: 19,
     img: "/assets/images/headphones/RogueAudioPro.png",
     amount: 1
 }, {
     name: "Lumina Clarity",
     type: "headphones",
     price: 570,
     dis: 850,
     review: 32,
     img: "/assets/images/headphones/LuminaClarity.png",
     amount: 1
 }, {
     name: "VortexBlazeGaming",
     type: "headphones",
     price: 1250,
     dis: 1600,
     review: 19,
     img: "/assets/images/headphones/VortexBlazeGaming.png",
     amount: 1
 }, {
     name: "Quantum PulseX",
     type: "headphones",
     price: 850,
     dis: 1100,
     review: 25,
     img: "/assets/images/headphones/QuantumPulseX.png",
     amount: 1
 }, {
     name: "Azure Vision X",
     type: "cameras",
     price: 3500,
     dis: 5000,
     review: 25,
     img: "/assets/images/cameras/AzureVisionX.png"
 }, {
     name: "Aurora Gold Pro",
     type: "cameras",
     price: 3700,
     dis: 4500,
     review: 25,
     img: "/assets/images/cameras/AuroraGoldPro.png",
     amount: 1
 }, {
     name: "Phantom Lux 5000",
     type: "cameras",
     price: 4700,
     dis: 5500,
     review: 25,
     img: "/assets/images/cameras/AzureVisionX.png",
     amount: 1
 }, ]

 function elements(product) {
     return `
    <div class="product">
        <span class="img">
            <img src="${product.img}" alt="">
            <span class="pruchers">
                <button data-name="${product.name}"><i class="fa-solid fa-store"></i></button>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-regular fa-eye"></i></span>
            </span>
        </span>
        <p class="head">${product.name}</p>
        <p class="title">${product.type}</p>
        <p class="price"><del>${product.dis} $</del><span> ${product.price} $</span></p>
        <p class="review">( ${product.review} reviews)</p>
        <p class="stars">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </p>
    </div>
    `;
 }
 let Btns = document.querySelectorAll('.items button')
 let card = JSON.parse(localStorage.getItem('cardProduct')) || [];
 let productShop = document.querySelector('.Products')
 let searchInput = document.querySelector('#searchValue')
 const count = document.querySelector('.count')
 const alertBox = document.querySelector('.alert');
 const alertTitle = document.querySelector('.alert-pro-name');
 const alertIcon = document.querySelector('.alert-icon');

 function searchData(e) {
     const type = e.id;
     productShop.innerHTML = '';

     products.forEach((product, index) => {
         if (type === 'all' || product.type === type) {
             productShop.innerHTML += elements(product, index);
         }
     });
     searchInput.onkeyup = function(el) {
         const searchValue = el.target.value;
         productShop.innerHTML = '';

         products.forEach(product => {
             if (product.name.toLowerCase().includes(searchValue.toLowerCase()) || product.type.toLowerCase().includes(searchValue.toLowerCase())) {
                 productShop.innerHTML += elements(product);
             }
         })
     }
     Btns.forEach(btn => {
         btn.onclick = function() {
             Btns.forEach(b => b.classList.remove('active'));
             this.classList.add('active');
             searchData(this);
         }
     });
     attachButtons();

 }

 function attachButtons() {
     const storeBtns = productShop.querySelectorAll('.pruchers button');
     storeBtns.forEach(btn => {
         btn.onclick = () => {
             const productName = btn.dataset.name;
             btnClick(productName);
         }
     });
 }
 window.addEventListener('DOMContentLoaded', () => {
     const allButton = document.getElementById('all');
     searchData(allButton);
 });

 function btnClick(index) {
     amountHandler()
     if (!card.some(e => e.name === products[index].name)) {
         card.push(products[index]);
         localStorage.setItem('cardProduct', JSON.stringify(card));
         console.log("Added:", card);
         amountHandler();
     } else {
         console.log("Already added!");
         amountHandler();
     }

 }

 function amountHandler() {
     count.innerHTML = card.length
 }
 amountHandler()

 function showAlert(text, isDanger) {
     alertTitle.innerHTML = text;

     if (isDanger) {
         alertIcon.classList.add('danger');
     } else {
         alertIcon.classList.remove('danger');
     }

     alertBox.classList.add('active');

     setTimeout(() => {
         alertBox.classList.remove('active');
     }, 2000);
 }

 function btnClick(productName) {
     const product = products.find(p => p.name === productName);
     if (!product) return;

     const exists = card.some(e => e.name === product.name);

     if (!exists) {
         card.push(product);
         localStorage.setItem('cardProduct', JSON.stringify(card));
         showAlert(`${product.name} added ✅`, false);
     } else {
         showAlert(`${product.name} already added ⚠️`, true);
     }

     amountHandler();
 }

 const displayWhish = document.querySelector('.store .wishlist')
 console.log(displayWhish);

 function displayWhishList() {
     if (displayWhish.style.display === 'flex') {
         displayWhish.style.display = 'none';
     } else {
         displayWhish.style.display = 'flex';
     }
 }
 const menuBtn = document.querySelector('.menu-btn');
 const mobileMenu = document.querySelector('.mobile-menu');

 menuBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('show');

 });