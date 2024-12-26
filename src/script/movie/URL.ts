import axios from "axios";

const fetchFeaturedMovie = async (apiKey: string) => {
    const apiKey = import.meta.env.TMDB_API_KEY; // 환경 변수에서 TMDB API 키 가져오기
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`);
        console.log(response.data.results[0]);
        return response.data.results[0];
    } catch (error) {
        console.error('Error fetching featured movie:', error);
    }
}

const getURL4PopularMovies = (apiKey: string, page: number=1) => {
    const apiKey = import.meta.env.TMDB_API_KEY;
    return `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${page}`;
}

const getURL4ReleaseMovies = (apiKey: string, page: number=2) => {
    const apiKey = import.meta.env.TMDB_API_KEY;
    return `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=${page}`;
}

const getURL4GenreMovies = (apiKey: string, genre: string, page: number = 1) => {
    const apiKey = import.meta.env.TMDB_API_KEY;
    return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&language=ko-KR&page=${page}`;
}


export { fetchFeaturedMovie, getURL4PopularMovies, getURL4ReleaseMovies, getURL4GenreMovies };
