window.addEventListener("DOMContentLoaded", () => {
  // Footer nav click handlers (optional enhancement)
  const footerLinks = document.querySelectorAll("links");

  footerLinks.forEach(link => {
    link.style.cursor = "pointer";

    link.addEventListener("click", () => {
      const destination = link.textContent.toLowerCase();

      switch (destination) {
        case "home":
          window.location.href = "index.html";
          break;
        case "about":
          alert("About page coming soon!");
          break;
        case "quiz":
          window.location.href = "Html/Maths.html"; // Default quiz
          break;
        case "contact":
          alert("Contact form coming soon!");
          break;
      }
    });
  });

//   // Practice More click area — simulate link
//   const practiceSection = document.querySelector(".practice-more");
//   if (practiceSection) {
//     practiceSection.addEventListener("click", () => {
//       window.location.href = "Html/Maths.html";
//     });
//     practiceSection.style.cursor = "pointer";
//   }

//   // Hover feedback for interactive sections
//   document.querySelectorAll("section").forEach(section => {
//     section.addEventListener("mouseenter", () => {
//       section.style.transition = "all 0.3s ease";
//       section.style.transform = "scale(1.01)";
//     });
//     section.addEventListener("mouseleave", () => {
//       section.style.transform = "scale(1)";
//     });
//   });
 });
