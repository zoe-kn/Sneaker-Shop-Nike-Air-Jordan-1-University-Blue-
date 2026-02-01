

const alertBox = document.getElementById('custom-alert');
const alertText = document.getElementById('alert-text');
const alertClose = document.getElementById('alert-close');

function showAlert(message) {
    alertText.textContent = message;
    alertBox.classList.remove('hidden');
}

alertClose.addEventListener('click', () => {
    alertBox.classList.add('hidden');
});


document.querySelector(".add-to-cart").addEventListener("click", () => {
  showAlert("Produkt wurde zum Warenkorb hinzugefügt!");
});

document.querySelector(".favorite").addEventListener("click", () => {
  showAlert("Produkt wurde zu den Favoriten hinzugefügt!");
});
