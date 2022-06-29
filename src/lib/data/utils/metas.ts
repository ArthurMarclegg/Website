import literature from "../files/literature.json";
import non_literature from "../files/non_literature.json"

const metas = {
    literature,
    non_literature,
}

export function getMetas(section: string) {
    return metas[section];
}

export function getTags(section: string) {
    const tags = new Set();
    for (const index in metas[section]) {
        for (const tagIndex in metas[section][index].tags) {
            tags.add(metas[section][index].tags[tagIndex])
        }
    }
    const tagsSorted = Array.from(tags).sort();
    return tagsSorted;
}
