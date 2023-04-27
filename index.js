var sidenav = document.getElementById("Sidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Ouvre le menus / width : 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Ferme le menus / width: 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

