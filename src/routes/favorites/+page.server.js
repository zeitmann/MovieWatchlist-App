import db from '$lib/db';

export async function load() {
    const allMovies = await db.getMovies();

    // Filter nur die Filme mit watchlist = true
    const favoriteMovies = allMovies.filter(movie => movie.watchlist === true);

    console.log("Favorite Movies:", favoriteMovies);

    return {
        movies: favoriteMovies
    };
}

export const actions = {
    RemoveFromWatchlist: async({ request }) => {
        const data = await request.formData();
        const id = data.get("id");

        console.log("RemoveFromWatchlist Action aufgerufen mit ID:", id);

        const movie = await db.getMovie(id);
        movie.watchlist = false;
        await db.updateMovie(movie);

        console.log("Film von Watchlist entfernt:", id);
    },
};