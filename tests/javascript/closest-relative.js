function closestRelative(parent, relativeName) {
  // Your code goes here
  const relatives = [...parent.children];
  const tagName = relativeName.toUpperCase();

  for (let i = 0; i < relatives.length; i++) {
    if (relatives[i].tagName === tagName) {
      return relatives[i];
    }
  }

  return null;
}

// Example case
document.body.innerHTML =
  "<James>" +
  "<Dave></Dave>" +
  "<Mike></Mike>" +
  "<Sarah></Sarah>" +
  "</James>";

let parent = document.getElementsByTagName("James")[0];
let relative = closestRelative(parent, "Mike");
console.log(relative && relative.tagName); // prints MIKE
