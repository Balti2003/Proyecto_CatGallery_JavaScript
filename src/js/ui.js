import { saveFavorite, removeFavorite, getFavorites } from "./storage.js";

// Renderizar gatos en galería
export const renderGallery = (cats, container) => {
  container.innerHTML = "";
  const favs = getFavorites();

  cats.forEach(cat => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = cat.url;
    img.alt = "Gato";
    img.loading = "lazy";
    
    const btn = document.createElement("button");
    const isFav = favs.some(f => f.url === cat.url);

    btn.textContent = isFav ? "❌ Quitar" : "❤️ Favorito";

    btn.addEventListener("click", () => {
      if (isFav) {
        removeFavorite(cat.url);
      } else {
        saveFavorite(cat);
      }

      renderFavorites(document.getElementById("favorites"));
      renderGallery(cats, container);
    });

    card.appendChild(img);
    card.appendChild(btn);
    container.appendChild(card);
  });
};

// Renderizar favoritos
export const renderFavorites = (container) => {
  const favs = getFavorites();
  container.innerHTML = "";

  if (favs.length === 0) {
    container.innerHTML = "<p>No tienes favoritos</p>";
    return;
  }

  favs.forEach(cat => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = cat.url;
    img.alt = "Gato favorito";

    const btn = document.createElement("button");
    btn.textContent = "❌ Quitar";
    btn.addEventListener("click", () => {
      removeFavorite(cat.url);
      renderFavorites(container);
    });

    card.appendChild(img);
    card.appendChild(btn);
    container.appendChild(card);
  });
};

// Mostrar estado
export const setStatus = (msg) => {
  const status = document.getElementById("status");
  status.textContent = msg;
};
