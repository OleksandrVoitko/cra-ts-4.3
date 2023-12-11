import { BASE_URL, API_KEY, IMG_PER_PAGE } from "./apiConst";

export async function getPhotos(searchQuery, page) {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=${IMG_PER_PAGE}&image_type=photo&orientation=horizontal`
    );
    return response.json();
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
}
