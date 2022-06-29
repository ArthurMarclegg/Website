<script lang="ts">
	import { page } from "$app/stores";
	import MultiSelect, { type Option, type Primitive } from "svelte-multiselect";

	export let metas: any[] = [];
	export let tags: Option[] = [];

  let selectedTags: any[] = [];
  let filteredMetas: any[] = [...metas];

  // FIXME In case of everything breaking, 
  // uncomment me and comment out the reactive part below
  // function refilter() {
  //   console.log("triggered");
  //   if (selectedTags.length == 0) {
  //     filteredMetas = [...metas];
  //   }
  //   filteredMetas = metas.filter((meta) => {
  //     return selectedTags.every(
  //       (tag) => { return meta.tags.includes(tag.label); }
  //     );
  //   });
  // }

  $: {
    filteredMetas = metas.filter((meta) => {
      if (selectedTags.length == 0) {
        return true;
      }
      return selectedTags.every( (tag) => 
        { return meta.tags.includes(tag); }
      );
    });
  }

</script>

<svelte:head>
	<title>{$page.params.section}</title>
</svelte:head>

<div id="wrapper">  
  {#if metas.length === 0}
    <h2>One day... I will write something here...</h2>
  {:else}
    <MultiSelect
    bind:selectedLabels={selectedTags}
    options={tags}
    placeholder="Search for tags" />
  
    <ul>
    {#each filteredMetas as meta (meta.id)}
      <li>
        <a href={`/${$page.params.section}/piece/${meta.id}`}>
          <h2>{meta.title}</h2>
          <p>{meta.firstSentence}...</p>
        </a>
      </li>
    {/each}
    </ul>
  {/if}
</div>




<style>

  #wrapper {
    width: 100%;
  }

  :global(div.multiselect) {
    /* height: 2rem; */
    /* width: 100%; */
    margin: 1.25rem 0 1.25rem 0;
    padding: 0;

    border-style: none none dotted none;
    border-radius: 0;
  }

  :global(.multiselect svg) {
    width: 1rem;
    padding: 0;
  }

  :global(.multiselect ul.selected > li) {
    height: 1.5rem;

    background-color: lightgray;

    font-family: "Courier New", Courier, monospace;
    font-size: 0.75rem;
    font-weight: 600;
  }

  :global(.multiselect ul.selected > li button),
  :global(.multiselect button.remove-all) {
    height: 2rem;
    margin: 0;
  }

  :global(.multiselect > input) {
    margin: 0;
    padding: 0;
    height: 2rem;

    font-family: "Courier New", Courier, monospace;
  }

  :global(.multiselect ul.options) {
    margin: 0;

    border: 1px dotted lightgray;
    font-family: "Courier New", Courier, monospace;
    font-size: 0.66rem;
  }

  :global(.multiselect ul.options li) {
    height: 1rem;
    padding: 0.25rem 1rem;
  }

  :global(.multiselect ul.options li.selected) {
    border-left: 3pt solid lightgray;
  }

  #wrapper > h2 {
    margin: 4.5rem 0 0 0;

    text-align: center;
    font-family: "Courier New", Courier, monospace;
  }

  ul {
    margin: 0;
    padding: 0;

    list-style-type: none;
    font-family: "Courier New", Courier, monospace;
  }

  a {
    color: black;
    text-decoration: none;
  }

  li {
    margin-bottom: 2rem;
  }

  h2 {
    margin: 0;

    font-size: 1.5rem;
    font-family: "Courier New", Courier, monospace;
    font-weight: 400;
  }

  p {
    margin: 0.5rem 0 0 0;
    font-size: 0.75rem;
    font-style: italic;
  }

  @media only screen and (min-width: 70rem) {
    /* ul {
      width: 40rem;
    }

    :global(div.multiselect) {
      width: 40rem;
    } */

    #wrapper {
      width: 40rem;
    }
  }

</style>
