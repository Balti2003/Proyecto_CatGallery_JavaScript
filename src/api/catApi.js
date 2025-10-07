const API_URL = "https://api.thecatapi.com/v1";

export const getCats = async (limit = 9, breedId = "") => {
  try {
    const url = breedId
      ? `${API_URL}/images/search?limit=${limit}&breed_ids=${breedId}&size=small`
      : `${API_URL}/images/search?limit=${limit}&size=small`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al obtener gatos");
    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getBreeds = async () => {
  try {
    const response = await fetch(`${API_URL}/breeds`);
    if (!response.ok) throw new Error("Error al obtener razas");
    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
