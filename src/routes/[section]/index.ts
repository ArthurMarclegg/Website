import { getMetas, getTags } from "$lib/data/utils/metas";

export async function get({ params }) {
    
    const section = params.section.toLowerCase();

    const metas = getMetas(section);
    const tags = getTags(section);

    return {
        body: { metas, tags }
    }
}
