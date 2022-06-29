<script lang="ts">
	import "../app.css";
</script>

<svelte:head>
	<link rel="icon" href="/icon.png">
</svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/Literature">Literature</a>
	<a href="/Non_literature">Non-Literature</a>
</nav>

<main>
	<slot />
</main>

<footer>Copyrighted &copy; 2022 Arthur Marclegg. All Rights Reserved</footer>

<style>
	nav {
		font-family: "Courier New", Courier, monospace;
		padding: 0 0 0 3rem;
	}

	nav a {
		margin-right: 2rem;

		color: black;
		text-decoration: none;
	}

	main {
		margin: 0;
		padding: 0 3rem 0 3rem;

		display: flex;
		flex-direction: column;
		align-items: center;

		flex-grow: 1;
	}

	footer {
		height: 1.5rem;
		padding: 1.5rem 0 0.5rem 3rem;

		font-size: 0.6rem;
		line-height: 1.5rem;
		font-family: "Courier New", Courier, monospace;
	}
</style>
