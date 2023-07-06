const searchInput = document.querySelector(".chat-search");
const persons = Array.from(
  document.querySelectorAll(".chat-list .person-main")
);

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase().trim();

  persons.forEach((person) => {
    const personName = person
      .querySelector("div > div > div:nth-child(1)")
      .textContent.toLowerCase();
    const personTime = person
      .querySelector("div > div > div:nth-child(2)")
      .textContent.toLowerCase();
    const personContent = person
      .querySelector("div > div:nth-child(2)")
      .textContent.toLowerCase();
    const doesMatch =
      personName.includes(searchTerm) ||
      personTime.includes(searchTerm) ||
      personContent.includes(searchTerm);

    person.style.display = doesMatch ? "block" : "none";
  });
});
