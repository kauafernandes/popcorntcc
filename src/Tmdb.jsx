const API_KEY  = '7d3f51149d5de366981e065d4f1e64ee';
const API_BASE = 'https://api.themoviedb.org/3'; 
const API_IMAGE = 'https://image.tmdb.org/t/p/w500/';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
            slug: 'trendingfilmes',
            items: await basicFetch(`/trending/movie/week?language=pt-BR&api_key=${API_KEY}`)
        },

        {
            slug: 'trendingseries',
            items: await basicFetch(`/trending/tv/week?language=pt-BR&api_key=${API_KEY}`)
        },
            
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}