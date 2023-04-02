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
  window.localStorage.setItem(
    document.getElementsByTagName("li").length,
    text.value
  );
  text.value = "";
  renderList();
});

function renderList() {
  ul.textContent = "";
  for (i = 0; i < window.localStorage.length; i++) {
    const li = document.createElement("li");
    li.id = window.localStorage.key(i);
    li.innerText = window.localStorage.getItem(window.localStorage.key(i));
    const del_btn = document.createElement("button");
    del_btn.innerText = "x";
    del_btn.className = "del_btn";
    li.appendChild(del_btn);
    ul.appendChild(li);
  }
  document.querySelectorAll(".del_btn").forEach((element) => {
    element.addEventListener("click", (e) => {
      window.localStorage.removeItem(e.target.parentNode.id);
      renderList();
    });
  });
}

renderList();
