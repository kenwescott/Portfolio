// script.js
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash-screen");
    splash.classList.add("fade-out");

    setTimeout(() => {
      splash.style.display = "none";
      document.getElementById("home-page").style.display = "block";
    }, 1000); // Wait for the fade-out transition to finish
  }, 9000); // Wait 3 seconds before fading out
});
const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})

document.addEventListener("DOMContentLoaded", function () {
    const myModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    myModal.show();
  });