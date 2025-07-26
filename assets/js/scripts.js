const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light": "dark";

    rootHtml.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme); 

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon");

}

toggleTheme.addEventListener("click", changeTheme);


document.addEventListener("DOMContentLoaded", function() {

const savedTheme = localStorage.getItem("theme") || "dark";
rootHtml.setAttribute("data-theme", savedTheme);

toggleTheme.classList.toggle("bi-sun", savedTheme === "dark");
toggleTheme.classList.toggle("bi-moon", savedTheme === "light");
})

const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () =>  {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");
        
        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    });
});

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active")
    });
});




