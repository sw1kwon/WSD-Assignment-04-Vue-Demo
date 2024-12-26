// src/types/movie.d.ts
declare module "@/script/movie/wishlist" {
    export function useWishlist(): void;
}

declare module "@/script/movie/URL" {
    export function getURL4PopularMovies(page?: number): string;
    export function getURL4ReleaseMovies(page?: number): string;
    export function getURL4GenreMovies(genre: string, page?: number): string;
    export function fetchFeaturedMovie(): Promise<any>;
}
