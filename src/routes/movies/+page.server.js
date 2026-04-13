import db from '$lib/db';

export async function load() {
    const movies = await db.getMovies();

    console.log("Filme aus MongoDB:", movies);

    return {
        movies
    };
}

export const actions = {
    AddToWatchlist: async({ request }) => {
        const data = await request.formData();
        const id = data.get("id");

        console.log("AddToWatchlist Action aufgerufen mit ID:", id);

        const movie = await db.getMovie(id);
        movie.watchlist = true;
        await db.updateMovie(movie);

        console.log("Film zur Watchlist hinzugefügt:", id);
    },

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