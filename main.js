function sortList() {
  let list = document.getElementsByClassName("content")[0];
  let items = Array.from(list.getElementsByTagName("li"));
  items.sort((a, b) => a.textContent.localeCompare(b.textContent));
  list.innerHTML = "";
  items.forEach((item) => list.appendChild(item));
}
