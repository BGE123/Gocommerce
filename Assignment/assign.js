function myFunction(x) {
  x.classList.toggle("change");
  const body = document.body;

  if (body.classList.contains("nav-open")) {
    body.classList.remove("nav-open");
  } else {
    body.classList.add("nav-open");
  }
}

function closeSideNav() {
  document.body.classList.remove("nav-open");
}

function toggleheart(y) {
  y.classList.toggle("red");
}
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

document
  .getElementById("billing-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let address = encodeURIComponent(document.getElementById("addresss").value);
    window.location.href = "checkout.html?address=" + address;
  });

function getQueryParam(param) {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || "Not provided";
}

document.getElementById("displayAddress").innerText = getQueryParam("addresss");

window.onload = function () {
  let addressElement = document.getElementById("displayAddress");

  if (addressElement) {
    let address = getQueryParam("address");
    console.log("Address from URL:", address);
    addressElement.innerText = address;
  } else {
    console.error("Element #displayAddress not found.");
  }
};
document.addEventListener("DOMContentLoaded", function () {
  function updateTotal() {
    let items = document.querySelectorAll(".row1"); 
    let subtotal = 0;

    items.forEach((item) => {
      let price = parseFloat(
        item.querySelector(".price").innerText.replace("$", "")
      );
      let quantity = parseInt(item.querySelector(".quantity").value);
      let itemTotal = price * quantity;
      subtotal += itemTotal;
    });

    document.querySelector(".subtotal-value").innerText = `$${subtotal.toFixed(
      2
    )}`;
    document.querySelector(".total-value").innerText = `$${subtotal.toFixed(
      2
    )}`;
  }

  document.querySelectorAll(".quantity").forEach((input) => {
    input.addEventListener("change", updateTotal);
  });

  updateTotal(); 
});
