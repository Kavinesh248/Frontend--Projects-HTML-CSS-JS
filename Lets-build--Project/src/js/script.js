const projectContainer = document.querySelector(".section-projects");

// fetch("https://neon-crumble-ae55e3.netlify.app/.netlify/functions/videos")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

const loadProject = async function () {
  const res = await fetch(
    "https://66d85b0a8e2116b49ed4354e--lets-build-api.netlify.app/api/videos"
  );

  const data = await res.json();

  if (!res.ok) console.error("nOt working");
  console.log(data);
};

loadProject();

fetch("https://66d85b0a8e2116b49ed4354e--lets-build-api.netlify.app/api/videos")
  .then((res) => res.json())
  .then(console.log)
  .catch(console.error);

// document
//   .querySelector(".project-card")
//   .addEventListener("mouseenter", function () {
//     console.log("entered");
//     document.querySelector(".play-icon").style.display = "block";
//   });

// document
//   .querySelector(".project-card")
//   .addEventListener("mouseout", function () {
//     console.log("exit");
//     document.querySelector(".play-icon").style.display = "none";
//   });

const buttonEl = document.querySelector(".btn--mobile-nav");
const headerEl = document.querySelector(".header");

buttonEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
