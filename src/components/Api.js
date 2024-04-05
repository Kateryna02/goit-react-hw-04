

import axios from 'axios';

const fetchImages = async(searchQuery, page) => {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: searchQuery,
                per_page: 10,
                page,
                client_id: 'Xa2Px7GMMfMChtyuDrEvFJfPCbKVhrL9dDsDhXBhfbA'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching images. Please try again later.');
    }
   
};

export default fetchImages;
