function openModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("show");
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
}

// Cierra el modal al hacer clic fuera del contenido
document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) {
        closeModal();
    }
});
