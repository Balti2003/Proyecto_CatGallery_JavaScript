import { getCats, getBreeds } from "../api/catApi.js";
import { renderGallery, renderFavorites, setStatus } from "./ui.js";

const galleryContainer = document.getElementById("cat-gallery");
const favsContainer = document.getElementById("favorites");
const btnMore = document.getElementById("load-more");
const breedSelect = document.getElementById("breed-select");

let cats = [];
let selectedBreed = "";

const loadCats = async (reset = false) => {
  try {
    setStatus("Cargando...");
    const newCats = await getCats(6, selectedBreed || "");
    cats = reset ? newCats : [...cats, ...newCats];
    renderGallery(cats, galleryContainer);
    setStatus("");
  } catch (err) {
    console.error(err);
    setStatus("⚠️ Error al cargar gatos");
  }
};

const loadBreeds = async () => {
  try {
    const breeds = await getBreeds();
    breeds.forEach(breed => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  } catch (err) {
    console.error("Error cargando razas", err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadCats();
  loadBreeds();
  renderFavorites(favsContainer);
});

btnMore.addEventListener("click", () => loadCats());
breedSelect.addEventListener("change", () => {
  selectedBreed = breedSelect.value;
  cats = [];
  loadCats(true);
});
