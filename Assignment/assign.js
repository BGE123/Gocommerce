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
