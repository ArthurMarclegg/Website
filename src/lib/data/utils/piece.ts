import fs from "fs";
import { unified } from "unified";
import parse from "remark-parse";
import gfm from "remark-gfm";
import remark2rehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import yaml from "yaml";

// Code here credit to zhuzilin
// Svelte Kit Demo: https://github.com/svelteland/svelte-kit-blog-demo
export function getPiece(pieceId: string) {
	const data = fs.readFileSync(`src/lib/data/files/pieces/${pieceId}.md`);

	const parser = unified().use(parse).use(gfm).use(remarkFrontmatter, ["yaml"]);

	const runner = unified().use(remark2rehype).use(rehypeStringify);

	// const tree = parser.parse(
	// 	vfile.readSync(`src/lib/data/files/pieces/${pieceId}.md`),
	// );

	const tree = parser.parse(data);

	let metadata = null;
	let content = null;

	if (tree.children.length > 0 && tree.children[0].type == "yaml") {
		metadata = yaml.parse(tree.children[0].value);
		tree.children = tree.children.slice(1, tree.children.length);
	}
	content = runner.stringify(runner.runSync(tree));
	if (!metadata) {
		metadata = {
			title: "N/A",
			date: "N/A",
		};
		content = "Missing Frontmatter! Expected at least a title and a date!";
	}
	return { metadata, content };

	// return runner.stringify(runner.runSync(tree));
}
