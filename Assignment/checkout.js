function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || "N/A";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("display-address").textContent =
    getQueryParam("address");
});
