import db from '$lib/db';
import { redirect } from '@sveltejs/kit';

export const actions = {
    create: async({ request }) => {
        const formData = await request.formData();

        const movie = {
            title: formData.get('title'),
            year: Number(formData.get('year')),
            length: formData.get('length'),
            poster: formData.get('poster')
        };

        await db.createMovie(movie);

        throw redirect(303, '/movies');
    }
};