document.addEventListener("DOMContentLoaded", () => {
  // Step 1: Locate the heart elements
  const articleHearts = document.querySelectorAll(".like-glyph");

  // Step 2: Set up mock server communication
  function mimicServerCall(url = "", config = {}) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (Math.random() < 0.2) {
                  reject("Random server error. Try again later.");
              } else {
                  resolve("Pretend remote server notified of action!");
              }
          }, 300);
      });
  }

  // Step 3: Add event listeners to handle likes
  articleHearts.forEach(heart => {
      heart.addEventListener("click", (event) => {
          const heartIcon = event.target;
          mimicServerCall()
              .then(() => {
                  if (heartIcon.classList.contains("activated-heart")) {
                      heartIcon.classList.remove("activated-heart");
                  } else {
                      heartIcon.classList.add("activated-heart");
                  }
              })
              .catch((error) => {
                  alert(error);
              });
      });
  });
});
