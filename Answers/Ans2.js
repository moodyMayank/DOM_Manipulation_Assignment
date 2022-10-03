// Fetching the Elements
let values = document.querySelectorAll(".as-imagegrid-item-title");
console.log(values);

// Looping over Values Array Extracting the Inner text
// Splitting the Value and storing in Array
let itemNames = [];
for (item of values) {
  itemNames.push(item.innerText.split("\n")[0]);
}
console.log(itemNames);
