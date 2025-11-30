// Optional UX sugar: focus the first card on Enter from body
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target === document.body) {
        const firstCard = document.querySelector(".tool-card");
        if (firstCard) {
            window.location.href = firstCard.href;
        }
    }
});
