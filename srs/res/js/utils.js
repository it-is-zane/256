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

function replaceElement(element, url) {
  fetch(url).then((res) => {
    if (res.status = 200) {
      element.outerHTML = res.text();
    } else {
      console.error("status", res.status, "on", url)
    }
  });
}
