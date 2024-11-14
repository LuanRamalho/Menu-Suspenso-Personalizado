function toggleDropdown() {
  //toggle the display of the dropdown menu
  const dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
}

function selectOption(optionText) {
  //Update the dropdown button text
  document.getElementById("dropdown-toggle").textContent = optionText;

  //Close the dropdown menu after selecting an option
  document.getElementById("dropdown-menu").style.display = "none";
}
//Close the dropdown if clicked outside
document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown.contains(event.target)) {
    document.getElementById("dropdown-menu").style.display = "none";
  }
});
