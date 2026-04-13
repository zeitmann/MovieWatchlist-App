import db from '$lib/db';
import { error, redirect } from '@sveltejs/kit';

export async function load({ params }) {
    const movie = await db.getMovie(params.id);

    if (!movie) {
        throw error(404, 'Film nicht gefunden');
    }

    return {
        movie
    };
}

export const actions = {
    delete: async({ params }) => {
        await db.deleteMovie(params.id);
        throw redirect(303, '/movies');
    }
};