function setup() {
  // Write your code here
  const getOl = [...document.getElementsByTagName("ol")][0];
  const getOlChildren = [...getOl.children];

  getOlChildren.forEach((li, index) => {
    const liChildren = [...li.childNodes];

    liChildren.forEach((child) => {
      if (child.textContent === "Up!") {
        child.addEventListener("click", () => {});
      }
      if (child.textContent === "Down!") {
        child.addEventListener("click", () => {});
      }
    });
  });
}

// Example case

document.body.innerHTML = `<ol>
  
    <li><button>Up!</button>Taco<button>Down!</button></li>
  
    <li><button>Up!</button>Pizza<button>Down!</button></li>
  
    <li><button>Up!</button>Eggs<button>Down!</button></li>
  
  </ol>`;

setup();

document.getElementsByTagName("button")[2].click();

console.log(document.body.innerHTML);
