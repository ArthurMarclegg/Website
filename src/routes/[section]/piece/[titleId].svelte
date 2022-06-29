<script lang="ts">
	export let content = "";
	export let metadata;
</script>

<div id="metas">
	<h1>{metadata.title}</h1>
	<h4>Date: {metadata.date}</h4>
	<h4>By: {metadata.author}</h4>
</div>
<article>
	{@html content}
</article>

<style>
	#metas {
		margin: 3rem 0 1.5rem 0;

		text-align: center;
		font-family: "Courier New", Courier, monospace;
	}
	h1 {
		margin: 0 0 1.5rem 0;
		text-align: center;
		font-weight: 400;
	}

	h4 {
		margin: 0 0 0 0;

		font-size: 0.75rem;
		line-height: 1.5rem;
		font-weight: 400;
	}

	article {
		font-size: 0.75rem;
		line-height: 1.5rem;
		font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial,
			sans-serif;
	}
	@media only screen and (min-width: 60rem) {
		#metas {
			width: 40rem;
		}

		article {
			width: 30rem;
		}
	}
</style>
