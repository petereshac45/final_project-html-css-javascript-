let product = document.querySelector('.products')
let selling = document.querySelector('.selling')
let count = document.querySelector('.count')

const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');

});


const products = [{
    name: "Dell Precision Edge",
    type: "laptops",
    price: 6500,
    dis: 9500,
    review: 17,
    img: "assets/images/laptops/DellPrecisionEdge.png",
    amount: 1
}, {
    name: "HP Aura ProBook",
    type: "laptops",
    price: 10200,
    dis: 12200,
    review: 11,
    img: "assets/images/laptops/HPAuraProBook.png",
    amount: 1
}, {
    name: "MacBook Obsidian Stealth",
    type: "laptops",
    price: 17500,
    dis: 20000,
    review: 40,
    img: "assets/images/laptops/MacBookObsidianStealth.png"
}, {
    name: "Alienware Quantum Core",
    type: "laptops",
    price: 5500,
    dis: 8000,
    review: 34,
    img: "assets/images/laptops/AlienwareQuantumCore.png",
    amount: 1

}, {
    name: "ROG Zenith Blaze",
    type: "laptops",
    price: 6800,
    dis: 8000,
    review: 13,
    img: "assets/images/laptops/ROGZenithBlaze.png",
    amount: 1
}, {
    name: "Samsung Galaxy Zenith",
    type: "phones",
    price: 9000,
    dis: 11500,
    review: 20,
    img: "assets/images/phones/SamsungGalaxyZenith.png",
    amount: 1
}, {
    name: "Pixel Aura Flow",
    type: "phones",
    price: 7800,
    dis: 9000,
    review: 13,
    img: "assets/images/phones/PixelAuraFlow.png",
    amount: 1
}, {
    name: "Huawei Nova Prism",
    type: "phones",
    price: 5800,
    dis: 6300,
    review: 13,
    img: "assets/images/phones/HuaweiNovaPrism.png",
    amount: 1
}, {
    name: "iPhone Onyx Pro",
    type: "phones",
    price: 9000,
    dis: 11500,
    review: 20,
    img: "assets/images/phones/iPhoneOnyxPro.png",
    amount: 1
}, {
    name: "Echo Horizon",
    type: "headphones",
    price: 500,
    dis: 800,
    review: 17,
    img: "assets/images/headphones/EchoHorizon.png",
    amount: 1
}, {
    name: "RogueAudio Pro",
    type: "headphones",
    price: 950,
    dis: 1100,
    review: 19,
    img: "assets/images/headphones/RogueAudioPro.png",
    amount: 1
}, {
    name: "Lumina Clarity",
    type: "headphones",
    price: 570,
    dis: 850,
    review: 32,
    img: "assets/images/headphones/LuminaClarity.png",
    amount: 1
}, {
    name: "VortexBlazeGaming",
    type: "headphones",
    price: 1250,
    dis: 1600,
    review: 19,
    img: "assets/images/headphones/VortexBlazeGaming.png",
    amount: 1
}, {
    name: "Quantum PulseX",
    type: "headphones",
    price: 850,
    dis: 1100,
    review: 25,
    img: "assets/images/headphones/QuantumPulseX.png",
    amount: 1
}, ]



function elements(i, name) {
    return `
            <div class=${name}>

                <span class="img">
                    <img src="${products[i].img}" alt="">
                    <span class="pruchers">
                        <span ><a href='../views/shop.html'><i class="fa-solid fa-store"></i></a></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                    </span>
                </span>
                <p class="head">${products[i].name}</p>
                <p class="title">${products[i].type}</p>
                <p class="price"><del>${products[i].dis} $</del><span> ${products[i].price} $</span> </p>
                <p class="review">( ${products[i].review} reviews)</p>
                <p class="stars">
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </p>

            </div>
        `;

}

if (products) {
    for (let i = 0; i < products.length; i++) {

        if (i % 2 == 0) {
            product.innerHTML += elements(i, "product")
        }

    }
}
if (selling) {

    for (let i = 0; i < products.length; i++) {
        if (i % 3 == 0) {

            selling.innerHTML += elements(i, "sell")
        }
    }
}
$(document).ready(function() {
    $('.products').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.newProduct .arrows .prev',
        nextArrow: '.newProduct .arrows .next',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1
                }
            }, {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.selling').slick({
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.topSelling .arrows .prevSell',
        nextArrow: '.topSelling .arrows .nextSell',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1
                }
            }, {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function() {
    var now = new Date().getTime();
    var countdownDate = now + 2 * 24 * 60 * 60 * 1000;

    function updateTimer() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        if (distance < 0) {
            $('.countDay, .countHours, .countMins, .countSecs').text('0');
            clearInterval(timerInterval);
            return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('.countDay').text(days);
        $('.countHours').text(hours);
        $('.countMins').text(minutes);
        $('.countSecs').text(seconds);
    }

    var timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
});