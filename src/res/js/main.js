function isVisible(element) {
  const rect = element.getBoundingClientRect();
  const visableV = (
    rect.top < window.innerHeight
    && rect.bottom >= 0
  );
  const visableH = (
    rect.left < window.innerWidth
    && rect.right >= 0
  );
  
  return visableV && visableH;
}

function replaceOuter(element, url) {
  fetch(url).then(
    (res) => res.text().then(
      (text) => {element.outerHTML = text}
    )
  );
}

function replaceInner(element, url) {
  fetch(url).then(
    (res) => res.text().then(
      (text) => {element.innerHTML = text}
    )
  );
}

function forEachElement(classname, f) {
  let elements = document.getElementsByClassName(classname);  
}

addEventListener("scroll", (event) => {
  let elements = document.getElementsByClassName("checkvis");
  let length = elements.length;
  for (let i = 0; i < length; i++) {
    if (isVisible(elements[i])) {
      elements[i].classList.add("visible")
    }
    else {
      elements[i].classList.remove("visible")
    }
  }
})
