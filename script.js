//your code here!
// script.js

// Get reference to the ordered list
const list = document.getElementById("infi-list");

// Track how many items we have added
let itemCount = 0;

// Function to add a list item
function addListItem() {
  itemCount++;
  const li = document.createElement("li");
  li.textContent = `Item ${itemCount}`;
  list.appendChild(li);
}

// Add 10 items initially
for (let i = 0; i < 10; i++) {
  addListItem();
}

// Listen for scroll event on the window
window.addEventListener("scroll", () => {
  // Total scrollable height of the page
  const scrollHeight = document.documentElement.scrollHeight;
  // How far the user has scrolled from top
  const scrollTop = document.documentElement.scrollTop;
  // Height of the visible portion
  const clientHeight = document.documentElement.clientHeight;

  // If the user has reached the bottom (or very close)
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    // Add 2 more items
    addListItem();
    addListItem();
  }
});

