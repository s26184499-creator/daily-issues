document.addEventListener("DOMContentLoaded", () => {
  const cartTableBody = document.querySelector("#cartTable tbody");
  const cartTotalEl = document.getElementById("cartTotal");
  const checkoutBtn = document.querySelector(".checkoutButton");

  // Load cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Disable checkout button if cart is empty
  if (cart.length === 0) {
    checkoutBtn.classList.add("disabled");
    checkoutBtn.style.pointerEvents = "none"; // prevent clicking
    checkoutBtn.style.opacity = "0.5"; // dim it
  } else {
    checkoutBtn.classList.remove("disabled");
    checkoutBtn.style.pointerEvents = "auto";
    checkoutBtn.style.opacity = "1";
  }

  let total = 0;

  // Render cart items
  cart.forEach((item) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>${item.quantity}</td>
      <td>$${subtotal.toFixed(2)}</td>
    `;
    cartTableBody.appendChild(row);
  });

  // Update total
  cartTotalEl.textContent = `$${total.toFixed(2)}`;
});
