var offcanvas = document.getElementById("offcanvas");
var collapsebar = document.querySelector(".collapse-bar");

var searchicon = document.querySelector(".search-icon");
var searchboxmobile = document.getElementById("searchbox-mobile");

var navbar = document.getElementById("navbar");

var banners = document.querySelectorAll(".imgs"); // Doğru sınıf seçimi
var index = 0; // Başlangıç indexi


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
    if (searchboxmobile.style.display == "block" && isOpen(offcanvas) == "Close") {
        searchboxmobile.style.display = "none";
        offcanvas.classList.add("slideInLeft");
        offcanvas.style.display = "block";
    }
    else if (offcanvas.style.display == "block") {
        offcanvas.style.display = "none";
        searchboxmobile.style.display = "none";
    }
    else {
        offcanvas.style.display = "block";
        offcanvas.classList.add("slideInLeft");
    }
});


function isOpen(element) { //Offcanvas'ın o anki durumunu almak için
    if (element.style.display == "block") {
        return "Open"
    }
    else {
        return "Close"
    }
}



searchicon.addEventListener("click", () => {
    if (searchboxmobile.style.display == "none" && offcanvas.style.display == "block") {
        offcanvas.style.display = "none";
        searchboxmobile.style.display = "block";
    }
    else if (searchboxmobile.style.display == "block") {
        searchboxmobile.style.display = "none";
    }
    else {
        searchboxmobile.style.display = "block";
        searchboxmobile.classList.add("slideInDown");
    }
})



