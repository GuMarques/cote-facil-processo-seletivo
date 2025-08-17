export const Unsplash = (() => {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const getPhotos = async (
    page: number,
    query?: string
  ): Promise<UnsplashPhoto[]> => {
    const params = new URLSearchParams({
      client_id: accessKey,
      page: String(page),
      per_page: "24",
    });
    if (query) {
      params.append("query", query);
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?${params.toString()}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      const { results } = await response.json();
      return results as UnsplashPhoto[];
    } else {
      const response = await fetch(
        `https://api.unsplash.com/photos/?${params.toString()}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      return response.json();
    }
  };

  const getPhoto = async (id: string): Promise<UnsplashPhotoDetails> => {
    const params = new URLSearchParams({
      client_id: accessKey,
    });
    const response = await fetch(
      "https://api.unsplash.com/photos/" + id + "?" + params.toString()
    );
    if (!response.ok) {
      throw new Error("Failed to fetch photo");
    }
    return response.json();
  };

  return {
    getPhoto,
    getPhotos,
  };
})();
