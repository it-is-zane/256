function isVisable(element) {
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
