import unsplash from "./Unsplash";

const getImages = async (term) => {
    const response = await unsplash.get('/search/photos',{
        params:{
            query:term
        }
    });
    
    return response.data.results;
}

export default getImages;