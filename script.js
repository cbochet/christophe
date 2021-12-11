let counterContainer = document.getElementById("website-counter");
let visitCount = localStorage.getItem("page_view");

visitCount = Number(visitCount) + 1;

localStorage.setItem("page_view", visitCount);

document.getElementById("website-counter").innerText = "Visiteurs: " + visitCount;