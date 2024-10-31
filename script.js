const popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

function openPopup() {
    popup.classList.add("open-popup");
    popup.classList.remove("close-popup");
}

function closePopup() {
    popup.classList.add("close-popup"); 
    setTimeout(() => {
        popup.classList.remove("open-popup");
        popup.classList.remove("close-popup");
    }, 500); // Duration should match the closing animation in CSS
}
