// Get the elements
const sideNav = document.getElementById("sideNav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const mainContent = document.getElementById("mainContent");

// Open the side navigation
openBtn.onclick = function() {
  sideNav.classList.add("active");
  mainContent.classList.add("shifted");
  openBtn.classList.add("hidden"); // Add this line
}

// Close the side navigation
closeBtn.onclick = function() {
  sideNav.classList.remove("active");
  mainContent.classList.remove("shifted");
  openBtn.classList.remove("hidden"); // Add this line
}