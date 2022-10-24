<script>
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	export let language
	export let code = ``

	let copied = false

	function copy() {
		try {
			navigator.clipboard.writeText(code)
			copied = true
			setTimeout(() => copied = false, 2000)
		} catch(e) {
			console.log(e)
			alert(e)
		}
	}

	onMount(() => {
	let script = document.createElement('script');
        script.src = "/prism.js"
        document.head.append(script);
    

    script.onload = function() {
     let langJS = false;
     let lang_script;
     let lang_module;

     switch (language) {
       case "json":
         lang_module = "https://prismjs.com/components/prism-json.js"
         langJS = true;
         break    

       case "javascript":
         lang_module = "https://prismjs.com/components/prism-javascript.js"
         langJS = true;
         break   

       case "html":
         lang_module = "https://prismjs.com/components/prism-markup.js"
         langJS = true;
         break

       case "css":
         lang_module = "https://prismjs.com/components/prism-css.js"
         langJS = true;
         break
     }

     if (langJS == true) {

        lang_script = document.createElement('script');
        lang_script.src = lang_module
        lang_script.async = true
        document.head.append(lang_script);

        lang_script.onload = () => {
          Prism.highlightAll();
         }

     }
     else {
       Prism.highlightAll();
     }
	}})
</script>

<div>
	<pre><code class='language-{language}'>{code}</code></pre>
	<button on:click={copy} aria-label="Copy to Clipboard">
		{#if copied}
			<svg transition:fade xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="lightgreen" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square">
				<polyline points="9 11 12 14 22 4"></polyline>
				<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
			</svg>
		{:else}
			<svg transition:fade xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy">
				<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
				<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
			</svg>
		{/if}
	</button>
</div>

<style>
	div {
		background-color: #32314b;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding: 10px 15px;
		border-radius: 10px;
		margin-bottom: 30px;
		overflow-x: scroll;
	}
	button {
		background: transparent;
		border: none;
		min-width: 24px;
		min-height: 24px;
		max-height: 24px;
		overflow: hidden;
	}
	code {
		font-size: 1.1rem;
	}
</style>
