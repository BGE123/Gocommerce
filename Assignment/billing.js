document
  .getElementById("billing-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const fullName = encodeURIComponent(
      document.getElementById("fullname").value
    );
    const address = encodeURIComponent(
      document.getElementById("address").value
    );
    const phoneNumber = encodeURIComponent(
      document.getElementById("phone").value
    );
    const cardNumber = encodeURIComponent(
      document.getElementById("card-number").value
    );
    const expiryDate = encodeURIComponent(
      document.getElementById("expiry-date").value
    );
    const cvv = encodeURIComponent(document.getElementById("cvv").value);

    const checkoutURL = `checkout.html?fullName=${fullName}&address=${address}&phoneNumber=${phoneNumber}&cardNumber=${cardNumber}&expiryDate=${expiryDate}&cvv=${cvv}`;

    window.location.href = checkoutURL;
  });

document.addEventListener("DOMContentLoaded", function () {
  let phoneInput = document.getElementById("phone");

  phoneInput.value = "+234 ";

  phoneInput.addEventListener("input", function () {
    if (!this.value.startsWith("+234 ")) {
      this.value = "+234 ";
    }
  });

  phoneInput.addEventListener("keydown", function (event) {
    if (
      this.selectionStart <= 5 &&
      (event.key === "Backspace" || event.key === "Delete")
    ) {
      event.preventDefault();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cardInput = document.getElementById("card-number");

  cardInput.addEventListener("input", function (event) {
    let cursorPosition = this.selectionStart;
    let value = this.value.replace(/\D/g, "");
    value = value.substring(0, 12);

    let formattedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += "-";
      }
      formattedValue += value[i];
    }
    let oldLength = this.value.length;
    this.value = formattedValue;
    let newLength = this.value.length;

    cursorPosition += newLength - oldLength;
    this.selectionStart = this.selectionEnd = cursorPosition;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const expiryInput = document.getElementById("expiry-date");

  expiryInput.addEventListener("input", function (event) {
    let value = this.value.replace(/\D/g, "");
    value = value.substring(0, 4);

    if (value.length >= 3) {
      value = value.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
    }

    this.value = value;
  });
});
