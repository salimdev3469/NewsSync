var offcanvas = document.getElementById("offcanvas");
var collapsebar = document.querySelector(".collapse-bar");

var searchicon = document.querySelector(".search-icon");
var searchboxmobile = document.getElementById("searchbox-mobile");

var navbar = document.getElementById("navbar");

var banners = document.querySelectorAll(".imgs"); // Doğru sınıf seçimi
var index = 0; // Başlangıç indexi

collapsebar.addEventListener("click", () => {
    if (searchboxmobile.style.display == "flex" && isOpen(offcanvas) == "Close") {
        searchboxmobile.style.display = "none";
        offcanvas.classList.add("slideInLeft");
        offcanvas.style.display = "flex";
        progressBar.style.display = "none";
    }
    else if (offcanvas.style.display == "flex") {
        offcanvas.style.display = "none";
        searchboxmobile.style.display = "none";
        progressBar.style.display = "block";
    }
    else {
        progressBar.style.display = "none";
        offcanvas.style.display = "flex";
        offcanvas.classList.add("slideInLeft");
    }
});


function isOpen(element) { //Offcanvas'ın o anki durumunu almak için
    if (element.style.display == "flex") {
        return "Open"
    }
    else {
        return "Close"
    }
}



searchicon.addEventListener("click", () => {
    if (searchboxmobile.style.display == "none" && offcanvas.style.display == "flex") {
        offcanvas.style.display = "none";
        searchboxmobile.style.display = "flex";
    }
    else if (searchboxmobile.style.display == "flex") {
        searchboxmobile.style.display = "none";
    }
    else {
        searchboxmobile.style.display = "flex";
        searchboxmobile.classList.add("slideInDown");
    }
})


const fadeElements = document.querySelectorAll(".fade-in");

const revealOnScroll = () => {
    fadeElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.95) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Sayfa yüklendiğinde de kontrol et



const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // 300px aşağı kaydırınca buton görünsün
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


var progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY; // Kullanıcının kaydırdığı mesafe
    let docHeight = document.documentElement.scrollHeight - window.innerHeight; // Sayfanın toplam yüksekliği
    let scrollPercent = (scrollTop / docHeight) * 100; // % hesapla

    progressBar.style.width = `${scrollPercent}%`; // Çubuğun genişliğini güncelle
});


var catDropdown = document.getElementById("category-dropdown");
var catListMobile = document.querySelector(".categories-mobile");
var downArrow = document.querySelector(".fa-angle-down");
var rightArrow = document.querySelector(".fa-angle-right");

catDropdown.addEventListener("click", () => {
    if (catListMobile.style.display == "block") {
        catListMobile.style.display = "none";
        downArrow.style.display = "block";
        rightArrow.style.display = "none";
    }
    else {
        catListMobile.style.display = "block";
        downArrow.style.display = "none";
        rightArrow.style.display = "block";
    }

})

const links = document.querySelectorAll(".categories ul li a");

links.forEach(link => {
    link.addEventListener("click", function () {
        // Önce tüm linklerden 'active' sınıfını kaldır
        links.forEach(item => item.classList.remove("category-active"));
        // Tıklanan linke 'active' sınıfını ekle
        this.classList.add("category-active");
    });
});


const container = document.querySelector(".card-deck");

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("active"); // İsteğe bağlı: Sürüklerken bir efekt ekleyebilirsin
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("active");
});

container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("active");
});

container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Hız ayarı, gerekirse değiştir
    container.scrollLeft = scrollLeft - walk;
});



function switchActiveClass() {
    banners.forEach(el => el.classList.remove("active")); // Tüm `active`leri kaldır
    banners[index].classList.add("active"); // Şu anki indexe `active` ekle

    index = (index + 1) % banners.length; // Sıradaki elemanı seç (Döngüsel)
}

// Başlangıçta bir aktif eleman olsun
switchActiveClass();

// 5 saniyede bir çalıştır
setInterval(switchActiveClass, 5000);



window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        navbar.classList.add("scale-up");
        navbar.style.transition = "transform 0.3s ease-in-out";
        navbar.classList.remove("scale-down");
    }
    else {
        navbar.classList.add("scale-down");
        navbar.classList.remove("scale-up");
    }
})





