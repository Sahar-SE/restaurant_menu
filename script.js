function toggleNav() {
    document.getElementById("nav").classList.toggle("open");
}

function reveal() {
    const reveals = document.querySelectorAll(".reveal, .card");

    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
            el.classList.add("active");
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
window.onload = reveal;

