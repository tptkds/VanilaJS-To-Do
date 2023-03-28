const time = document.querySelector(".time");
const ul = document.querySelector("ul");
const add_btn = document.querySelector(".add");
const text = document.querySelector("input");

setInterval(setTime, 1000);

function setTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  if (hours >= 12) time.innerText = "PM " + (hours % 12) + ":" + minutes;
  else time.innerText = "AM " + hours + ":" + minutes;
}

add_btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = text.value;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  li.appendChild(checkbox);
  text.value = "";
  ul.appendChild(li);
});
