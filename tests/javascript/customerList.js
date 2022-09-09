document.body.innerHTML = `
        <div>
          <ul id="customers">
          </ul>
        </div>
        `;

function showCustomers(customers, targetList) {
  customers.forEach((customer) => {
    targetList.innerHTML += `
            <li>
              <p>${customer.name}</p>
              <p style="display: none;">${customer.email}</p>
            </li>
        `;
  });
}

let customers = [
  { name: "John", email: "john@example.com" },
  { name: "Mary", email: "mary@example.com" },
];

showCustomers(customers, document.getElementById("customers"));

let customerParagraph = [...document.querySelectorAll("li")];

customerParagraph.forEach((el) => {
  el.children[0].addEventListener("click", (e) => {
    const mail = e.target.nextElementSibling;

    if (mail.style.cssText === "display: none;") {
      mail.style.display = "block";
    } else {
      mail.style.display = "none";
    }
  });
});

console.log(document.body.innerHTML);
