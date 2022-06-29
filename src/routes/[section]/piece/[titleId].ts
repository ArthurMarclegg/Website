import { getPiece } from "$lib/data/utils/piece";

export async function get({ params }) {
	const { metadata, content } = getPiece(params.titleId);

	return {
		body: { metadata, content },
	};
}
