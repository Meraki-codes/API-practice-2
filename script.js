const container = document.querySelector(".container");

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const name = document.createElement("h3");
      const email = document.createElement("p");
      const city = document.createElement("p");
      const company = document.createElement("p");

      name.textContent = `Name: ${item.name}`;
      email.textContent = `Email: ${item.email}`;
      city.textContent = `City: ${item.address.city}`;
      company.textContent = `Company: ${item.company.name}`;

      card.append(name, email, city, company);
      container.append(card);
    });
  } catch (error) {
    console.log(error);
  }
}

getData();
