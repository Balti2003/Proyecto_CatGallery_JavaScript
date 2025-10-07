const STORAGE_KEY = "favorites";

export const getFavorites = () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export const saveFavorite = (cat) => {
    const favs = getFavorites();
    if(!favs.find(fav => fav.url === cat.url)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...favs, cat]));
    }
}

export const removeFavorite = (catUrl) => {
    const favs = getFavorites().filter(fav => fav.url !== catUrl);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}