/**
 * @author "Anjan Maity"
 * @contacts "anjanmaity1824@gmail.com"
 * @description "all logics are implemented by me"
 * @version "1.0.0"
 */

let upiWrapper = document.querySelector(".upi-qr-wrapper img");
let modalBody = document.querySelector(".modal-body");
let preLoader = document.querySelector(".preloader");
let temp = '';

// preloader animation start-up
const loader = () => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
        preLoader.style.display = "none";
        document.body.style.overflow = "auto";
    }, 3000)
}

/*window.addEventListener('DOMContentLoaded', () => {
    loader();
});*/

// set qr-code image to modal-body
upiWrapper.addEventListener("click", (eArgs) => {
    temp += `<img src="./images/QR_Code.jpg" alt="payment-upi-qr-code">`;
    if (modalBody.innerHTML === "" || modalBody.innerHTML === " " || modalBody.innerHTML === "\n") {
        upiWrapper.innerHTML = "";
        modalBody.innerHTML = temp;
    } else {
        upiWrapper.style.display = "block";
        upiWrapper.innerHTML = temp;
    }
});

window.addEventListener('scroll', (e) => {
    let scrollY = Math.floor(window.scrollY);
    // display go-back-button after scrolling some ections 
    if (scrollY >= 1550) {
        document.querySelector(".back-home-icon").style.display = "block";
    } else {
        document.querySelector(".back-home-icon").style.display = "none";
    }
});

// go back home/top of the page
function goBackHome() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}
