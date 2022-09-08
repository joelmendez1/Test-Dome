function toggleEvenColor() {
  let spanElements = [...document.querySelectorAll("#numbers span")];
  spanElements.forEach(function (item) {
    if (Number(item.textContent) % 2 === 0) {
      item.style.backgroundColor !== "yellow"
        ? (item.style.backgroundColor = "yellow")
        : (item.style.backgroundColor = "");
    }
  });
}

//At line number 2, use let spanElements = document.querySelectorAll('#numbers span:nth:bild(2n');
//At line number 3, define item as a parameter for the anonymous function passed in forEach.
//At line number 4, use item.style.backgroundColor = item.style.backgroundColor !== 'yellow ? 'yellow' : 'transparent';
