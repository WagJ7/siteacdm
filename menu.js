document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

function toggleNav() {
    const navbar = document.getElementById("myNavbar");
    const container = document.querySelector(".container");
    const openBtn = document.querySelector(".open-btn");
    if (navbar.style.width === "0px" || navbar.style.width === "") {
        navbar.style.width = "230px";
        container.style.marginLeft = "230px";
        openBtn.innerHTML = "&#9776; Fechar Menu";
    } else {
        navbar.style.width = "0";
        container.style.marginLeft = "0";
        openBtn.innerHTML = "&#9776; Abrir Menu";
    }
}
