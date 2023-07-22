const tabItems = document.querySelectorAll(".tab-item ");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

// Remove border from all tabs
function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

// Remove show class
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

// Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
