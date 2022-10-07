let elem = document.querySelector(".searchinput___19uW0");

elem.addEventListener("mouseover", () => {
  elem.style.backgroundColor = "Red";

  // Remove color after some delay
  setTimeout(() => {
    elem.style.backgroundColor = "";
  }, 2000);
});

// Read More about mouseover and mouseEnter Event :-

// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
