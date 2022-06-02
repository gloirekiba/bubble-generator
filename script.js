let count = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  const bgColor = [];
  const randRGB = (() => {
    for (let i = 0; i <= 2; i++) {
      bgColor[i] = Math.floor(Math.random() * 255);
    }
  })();

  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  let bubbleSize = Math.ceil(Math.random() * 100 + 100) + "px";
  bubble.style.height = bubbleSize;
  bubble.style.width = bubbleSize;

  bubble.style.setProperty("--bubbleBg", `rgba(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, .7`);

  bubble.style.top = Math.ceil(Math.random() * 100 + 50) + "%";
  bubble.style.left = Math.ceil(Math.random() * 100) + "%";

  let plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--bubbleLeft", Math.floor(Math.random() * 100) * plusMinus + "%");

  bubble.addEventListener("click", (e) => {
    count++;
    counter.textContent = count;
    e.target.remove();
  });

  setInterval(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 800);
