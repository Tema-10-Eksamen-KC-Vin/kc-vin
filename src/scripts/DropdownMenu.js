// DropdownMenu.js - Optional additional functionality
// The main functionality is already handled in the Navbar.astro component

console.log("DropdownMenu.js loaded - Additional functionality can be added here");

// Example: Add keyboard navigation support
document.addEventListener("DOMContentLoaded", () => {
  // Add keyboard support for dropdown
  const dropdownTrigger = document.querySelector(".dropdown-trigger");

  if (dropdownTrigger) {
    dropdownTrigger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        // Handle keyboard activation if needed
      }
    });
  }
});
