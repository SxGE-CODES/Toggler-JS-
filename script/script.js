// This is the Script

// Fetching our HTML Elements to our Script
let toggleContainer = document.querySelector(".js-toggle-container");
let toggler = document.querySelector(".js-toggler");

toggleContainer.addEventListener("click", () => {
  if (toggleContainer.classList.contains("toggle-container-light-mode") && toggler.classList.contains("toggler-light-mode")) {
    // Removing the Light-mode class
    toggleContainer.classList.remove("toggle-container-light-mode");
    toggler.classList.remove("toggler-light-mode");
    
    // Adding the Dark-mode class
    toggleContainer.classList.add("toggle-container-dark-mode");
    toggler.classList.add("toggler-dark-mode");
    document.body.style.backgroundColor = "black";
  }

  else if (
    toggleContainer.classList.contains("toggle-container-dark-mode") &&
    toggler.classList.contains("toggler-dark-mode")
  ) {
    // Removing the Dark-mode class
    toggleContainer.classList.remove("toggle-container-dark-mode");
    toggler.classList.remove("toggler-dark-mode");

    // Adding the Light-mode class
    toggleContainer.classList.add("toggle-container-light-mode");
    toggler.classList.add("toggler-light-mode");
    document.body.style.backgroundColor = "white";
  }  
})
