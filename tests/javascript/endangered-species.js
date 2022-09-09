function endangeredSpecies(continent, species) {
  const getUls = [...document.getElementsByTagName("ul")];
  let text = "";

  getUls.forEach((ul) => {
    if (ul.attributes[0].nodeValue === continent) {
      const getUlChildren = [...ul.children];

      getUlChildren.forEach((li) => {
        if (li.attributes[0].nodeValue === species) {
          text += li.textContent;
        }
      });
    }
  });

  return text;
}

// Example case

document.body.innerHTML = `<div>
  
    <ul data-continent="North America">
  
      <li data-species="California condor">Critically Endangered</li>
  
      <li data-species="American bison">Near Threatened</li>
  
    </ul>
  
    <ul data-continent="Europe">
  
      <li data-species="Cave bear">Extinct</li>
  
    </ul>
  
  </div>`;

console.log(endangeredSpecies("North America", "American bison")); // should print 'Near Threatened'
