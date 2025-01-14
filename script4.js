function filterRecipes() {
    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    const categoryFilter = document.getElementById("categoryFilter").value;
    const recipeCards = document.querySelectorAll(".recipe-card");

    recipeCards.forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      const category = card.getAttribute("data-category");

      const matchesSearch = title.includes(searchInput);
      const matchesCategory = categoryFilter === "all" || category === categoryFilter;

      if (matchesSearch && matchesCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }