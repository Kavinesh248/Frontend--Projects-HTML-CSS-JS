fetch("https://neon-crumble-ae55e3.netlify.app/.netlify/functions/videos")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
