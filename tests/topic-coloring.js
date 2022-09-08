function newMessage(topicName) {
  const getP = [...document.getElementsByTagName("p")];
  getP.forEach((p) => {
    if (p.attributes[0].nodeValue === topicName) {
      p.style.backgroundColor = "red";
    }
  });
}

// Example case

document.body.innerHTML = `<div>
  
    <p data-topic-name="discussion">General discussion</p>
  
    <p data-topic-name="bugs">Bugs</p>
  
    <p data-topic-name="animals">Animals</p>
  
  </div>`;

newMessage("discussion");

console.log(document.body.innerHTML);
