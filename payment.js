// Get form elements
const cardInput = document.getElementById("cardNumber");
const cardType = document.getElementById("cardType");
const paymentForm = document.getElementById("paymentForm");

// Detect card type
cardInput.addEventListener("input", () => {
  const value = cardInput.value.trim();
  if (/^4/.test(value)) {
    cardType.textContent = "Visa Card detected";
  } else if (/^5/.test(value)) {
    cardType.textContent = "MasterCard detected";
  } else {
    cardType.textContent = "";
  }
});

// Fetch cart data from localStorage
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const itemTotalElement = document.querySelector(".summary-item:nth-child(2) span:last-child");
const shippingElement = document.querySelector(".summary-item:nth-child(3) span:last-child");
const totalElement = document.querySelector(".summary-item.total span:last-child");

let itemTotal = 0;
cartItems.forEach(item => {
  itemTotal += item.price * item.quantity;
});

const shippingFee = cartItems.length > 0 ? 25 : 0;
const finalTotal = itemTotal + shippingFee;

// Display totals
itemTotalElement.textContent = `$${itemTotal.toFixed(2)}`;
shippingElement.textContent = `$${shippingFee.toFixed(2)}`;
totalElement.textContent = `$${finalTotal.toFixed(2)}`;

// Success popup function
function showSuccessPopup() {
  const popup = document.getElementById("successPopup");
  popup.style.display = "block";

  // Create receipt data
  const receipt = {
    items: cartItems,
    itemTotal: itemTotal.toFixed(2),
    shipping: shippingFee.toFixed(2),
    total: finalTotal.toFixed(2),
    date: new Date().toLocaleString(),
  };

  // Save receipt to localStorage
  localStorage.setItem("lastReceipt", JSON.stringify(receipt));

  setTimeout(() => {
    popup.style.display = "none";
    localStorage.removeItem("cart"); // Clear cart
    window.location.href = "receipt.html"; // Redirect to receipt
  }, 3000);
}

// Handle payment form submission
paymentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Basic validations
  if (cartItems.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  if (cardInput.value.trim().length < 16) {
    alert("Card number must be 16 digits.");
    return;
  }

  // Show success popup
  showSuccessPopup();
});
