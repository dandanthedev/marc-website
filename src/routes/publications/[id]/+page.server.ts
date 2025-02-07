import publications from '$lib/publications.json';

export function load({ params }) {
    const publication = publications.find((publication) => publication.id === params.id);
   
    return {
        publication: publication ?? null
    }
}