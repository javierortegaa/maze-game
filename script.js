document.addEventListener("DOMContentLoaded", function () {
  // Get the info modal and the button to open it
  var infoModal = document.getElementById("info-modal");
  var infoButton = document.getElementById("more-info");

  // Get the close button inside the modal
  var closeButton = document.querySelector(".close");

  // Function to open the info modal
  function openInfoModal() {
    infoModal.style.display = "block";
  }

  // Function to close the info modal
  function closeInfoModal() {
    infoModal.style.display = "none";
  }

  // Event listener for clicking the info button
  infoButton.addEventListener("click", openInfoModal);

  // Event listener for clicking the close button inside the modal
  closeButton.addEventListener("click", closeInfoModal);

  // Event listener to close the modal if user clicks outside of it
  window.addEventListener("click", function (event) {
    if (event.target === infoModal) {
      closeInfoModal();
    }
  });
});

// start game function
document.addEventListener("DOMContentLoaded", function () {
  // Get the start game button
  var startGameButton = document.getElementById("start-game");

  // Event listener for clicking the start game button
  startGameButton.addEventListener("click", function () {
    // Redirect to the new HTML page
    window.location.href = "game.html";
  });
});
