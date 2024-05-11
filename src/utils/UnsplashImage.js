import axios from "axios";

// get image from unsplash API and return the image url array
const getUnsplashImages = async (search) => {
    const apiEndpoint = `https://api.unsplash.com/search/photos?query=${search}&client_id=${
        import.meta.env.VITE_UNSPLASH_ACCESS_KEY
    }`;
    try {
        const response = await axios.get(apiEndpoint);
        return response.data.results;
    } catch (error) {
        console.error(error);
        return Error("An error occurred while fetching unsplash image");
    }
};

// get single image from unsplash API and return the image url
const getUnsplashImage = async (search) => {
    const apiEndpoint = `https://api.unsplash.com/search/photos?query=${search}&per_page=1&client_id=${
        import.meta.env.VITE_UNSPLASH_ACCESS_KEY
    }`;

    try {
        const response = await axios.get(apiEndpoint);
        return response.data.results[0];
    } catch (error) {
        console.error(error);
        return Error("An error occurred while fetching unsplash image");
    }
};

export { getUnsplashImages, getUnsplashImage };
