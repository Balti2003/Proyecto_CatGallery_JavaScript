import { saveFavorite, removeFavorite, getFavorites } from "./storage.js";

//renderizar gatos en galeria
export const renderGallery = (cats, container) => {
    container.InnerHTML = ``;
    const favs = getFavorites();

    cats.forEach(cat => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = cat.url;
        img.alt = "Gato";

        const btn = document.createElement("button");
        // Cambiar el texto si ya está en favoritos
        if (favs.find(f => f.id === cat.id)) {
        btn.textContent = "❌ Quitar";
        btn.onclick = () => {
            removeFavorite(cat.id);
            renderFavorites(document.getElementById("favorites"));
            renderGallery(cats, container); // actualizar el botón
        };
        } else {
        btn.textContent = "❤️ Favorito";
        btn.onclick = () => {
            saveFavorite(cat);
            renderFavorites(document.getElementById("favorites"));
            renderGallery(cats, container); // actualizar el botón
        };
        }

        card.appendChild(img);
        card.appendChild(btn);
        container.appendChild(card);
    });
}

//renderizar favoritos
export const renderFavorites = (container) => {
    const favs = getFavorites();
    container.InnerHTML = ``;

    if(favs.length === 0) {
        container.InnerHTML = `<p>No tienes favoritos</p>`;
        return;1
    }

    favs.forEach(cat => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = cat.url;
        img.alt = "Gato favorito";

        const btn = document.createElement("button");
        btn.textContent = "❌ Quitar";
        btn.onclick = () => {
            removeFavorite(cat.id);
            renderFavorites(container);
            
            const galleryContainer = document.getElementById("cat-gallery");
            if (galleryContainer.cats) {
                renderGallery(galleryContainer.cats, galleryContainer);
            }
        };

        card.appendChild(img);
        card.appendChild(btn);
        container.appendChild(card);
    });
}

//mostrar estado
export const setStatus = (msg) => {
    const status = document.getElementById("status");
    status.textContent = msg;
}