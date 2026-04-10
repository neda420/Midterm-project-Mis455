// Product Store - script.js
// Md Nadimul Islam, ID: 2222063

// ── Shopping Cart ────────────────────────────────────────────────────────────

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName, price) {
  const existing = cart.find(item => item.name === productName);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name: productName, price: price, qty: 1 });
  }
  saveCart();
  showCartNotification(productName);
}

function showCartNotification(productName) {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = `"${productName}" added to cart!`;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 2500);
}

// Attach click handlers to all "Buy Now" buttons
document.addEventListener('DOMContentLoaded', function () {
  const buyButtons = document.querySelectorAll('.product-item button');
  buyButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const name = btn.dataset.name || 'Product';
      const price = parseFloat(btn.dataset.price) || 0;
      addToCart(name, price);
    });
  });

  // ── Contact Form Validation ───────────────────────────────────────────────
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateContactForm()) {
        document.getElementById('form-success').style.display = 'block';
        form.reset();
        setTimeout(() => {
          document.getElementById('form-success').style.display = 'none';
        }, 5000);
      }
    });
  }
});

function validateContactForm() {
  let valid = true;

  const name = document.getElementById('name');
  const nameError = document.getElementById('name-error');
  if (!name.value.trim()) {
    nameError.textContent = 'Full name is required.';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  const email = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  if (!email.value.trim()) {
    emailError.textContent = 'Email address is required.';
    valid = false;
  } else if (!email.checkValidity()) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  const message = document.getElementById('message');
  const messageError = document.getElementById('message-error');
  if (!message.value.trim()) {
    messageError.textContent = 'Message cannot be empty.';
    valid = false;
  } else {
    messageError.textContent = '';
  }

  return valid;
}
