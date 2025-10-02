const API_URL = "https://api.thecatapi.com/v1";

/**
 * @param {number} limit - cantidad de gatos a traer
 * @param {string} breedId - id de raza (opcional)
 */

export const getCats = async (limit = 9, breedId = "") => {
  try {
    const url = breedId
      ? `${API_URL}/images/search?limit=${limit}&breed_ids=${breedId}`
      : `${API_URL}/images/search?limit=${limit}`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al obtener gatos");
    return await response.json();
  } catch (err) {
    throw err;
  }
}

//obtener lista de razas
export const getBreeds = async () => {
    try {
        const response = await fetch(`${API_URL}/breeds`);
        if (!response.ok) throw new Error("Error al obtener razas");
        return await response.json();
    } catch (err) {
        throw err;
    }
}