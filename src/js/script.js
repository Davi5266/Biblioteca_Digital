function openModal(title, description) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = description;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
