const STORAGE_KEY = "favorites";

export const getFavorites = () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export const saveFavorite = (cat) => {
    const favs = getFavorites();
    if(!favs.find(fav => fav.id === cat.id)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...favs, { id: cat.id, url: cat.url }]));
    }
}

export const removeFavorite = (id) => {
    const favs = getFavorites().filter(fav => fav.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}