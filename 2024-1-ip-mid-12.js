window.onload = () => {
  const keys = document.querySelectorAll(".keypad td");
  for (const key of keys) {
    key.addEventListener("click", (e) => {
      const key = e.target;
      const keyValue = key.textContent;
      if (keyValue == "←") {
        const text = document.getElementById("text_box").textContent;
        if (text.length > 0)
          document.getElementById("text_box").textContent = text.substring(
            0,
            text.length - 1
          );
      } else if (keyValue == "enter") {
        alert(document.getElementById("text_box").textContent);
      } else document.getElementById("text_box").textContent += keyValue;
    });
  }
};
