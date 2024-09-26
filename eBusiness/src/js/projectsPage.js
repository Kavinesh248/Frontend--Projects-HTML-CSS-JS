const btnSidebarMenu = document.querySelector(".btn-toggle");
const sidebar = document.querySelector("#sidebar");
const activeLinks = document.querySelectorAll(".link");

const showSidebar = function () {
  if (btnSidebarMenu && sidebar) {
    btnSidebarMenu.addEventListener("click", function (e) {
      sidebar.classList.toggle("show-sidebar");
    });
  }
};

showSidebar();

const activateSidebarLink = function () {
  activeLinks.forEach((li) => li.classList.remove("active-link"));
  this.classList.add("active-link");
};

activeLinks.forEach((li) => li.addEventListener("click", activateSidebarLink));

// Dark theme
const toggleTheme = document.querySelector(".toggle-theme");
const themeButton = document.querySelector("#theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-fill";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "ri-moon-clear-fill"
    : "ri-sun-fill";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[
    selectedIcon === "ri-moon-clear-fill" ? "add" : "remove"
  ](iconTheme);
}

// Activate / deactivate the theme manually with the button
toggleTheme.addEventListener("click", () => {
  console.log("hi");
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
