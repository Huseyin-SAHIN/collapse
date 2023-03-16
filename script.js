const faq = document.querySelectorAll(".faq");

faq.forEach(element => {
    element.addEventListener("click", () => {
        for (let i of faq) {
            i.classList.remove("active")
        }
        element.classList.add("active")
    })
});