var offcanvas = document.getElementById("offcanvas");
var collapsebar = document.querySelector(".collapse-bar");

var searchicon = document.querySelector(".search-icon");
var searchboxmobile = document.getElementById("searchbox-mobile");

var navbar = document.getElementById("navbar");

var banners = document.querySelectorAll(".imgs"); // Doğru sınıf seçimi
var index = 0; // Başlangıç indexi

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


collapsebar.addEventListener("click", () => {
    if (searchboxmobile.style.display == "flex" && isOpen(offcanvas) == "Close") {
        searchboxmobile.style.display = "none";
        offcanvas.classList.add("slideInLeft");
        offcanvas.style.display = "flex";
    }
    else if (offcanvas.style.display == "flex") {
        offcanvas.style.display = "none";
        searchboxmobile.style.display = "none";
    }
    else {
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



