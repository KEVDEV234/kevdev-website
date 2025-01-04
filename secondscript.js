const menuOpenButten = document.querySelector("#menu-open-button");
const menuCloseButten = document.querySelector("#menu-close-button");


menuOpenButten.addEventListener("click", () => {
    //turgle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});


menuCloseButten.addEventListener("click", () => menuOpenButten.click()
);