function toggleTheme() {

    const btn = document.querySelector(".theme-btn")

    btn.classList.add("rotate")

    setTimeout(() => {

        document.body.classList.toggle("light")

        localStorage.setItem(
            "theme",
            document.body.classList.contains("light") ? "light" : "dark"
        )

        btn.classList.remove("rotate")

    }, 200)

}

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light")
}

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        card.style.setProperty("--x", x + "px")
        card.style.setProperty("--y", y + "px")

    })

})

const modal = document.getElementById("modal")
const modalTitle = document.getElementById("modal-title")
const modalText = document.getElementById("modal-text")
const modalImage = document.getElementById("modal-image")
const modalContent = document.querySelector(".modal-content")

function closeModal() {
    modal.classList.add("closing-modal");
    modalContent.classList.add("closing");

    setTimeout(() => {
        modal.classList.remove("show");
        modal.classList.remove("closing-modal");
        modalContent.classList.remove("closing");
        modalContent.classList.remove("opening");
    }, 250);
}

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {

        modalContent.classList.remove("closing")
        modalContent.classList.add("opening")

        modal.classList.add("show")

        modalTitle.textContent = card.dataset.title
        modalText.innerHTML = card.dataset.text
        modalImage.src = card.dataset.image

    })

})

document.querySelector(".close").onclick = closeModal

window.onclick = (e) => {

    if (e.target === modal) {
        closeModal()
    }

}

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {
        closeModal()
    }

})