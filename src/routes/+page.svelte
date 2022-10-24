<script>
	import '@acab/reset.css'
	import { onMount } from 'svelte'
	import Code from './Code.svelte'
	import DrawBorder from '$lib/DrawBorder.svelte'

	let mode = 'dark'
	let color = 'lightblue'

	$: mode === 'dark' ? color = 'lightblue' : color = 'blue'

	onMount(() => {
		const colorScheme = window.matchMedia("(prefers-color-scheme: light)")
		colorScheme.matches ? mode = 'light' : mode = 'dark'
	})
</script>

<header>
	<h1>svelte-draw-border</h1>
	<a href="https://www.npmjs.com/package/svelte-draw-border">
  	<img src="https://img.shields.io/npm/dm/svelte-draw-border.svg" alt="Downloads">
	</a>
</header>

<main>
	<section><p>Draw smooth borders around any element, with Svelte</p></section>
	<section id="demo">
		<h2>Demo</h2>
		<div id="demo-grid">
			<div>
				<span>Default</span>
				<DrawBorder borderRadius="10px">
					<button>Hover me!</button>
				</DrawBorder>
			</div>
			<div>
				<span>Change endColor</span>
				<DrawBorder borderRadius="10px" endColor={color}>
					<button>Hover me!</button>
				</DrawBorder>
			</div>
			<div>
				<span>Change borderRadius</span>
				<DrawBorder borderRadius="100px" endColor={color}>
					<button class="rounded">Hover me!</button>
				</DrawBorder>
			</div>
			<div>
				<span>Change startingDeg</span>
				<DrawBorder borderRadius="10px" startingDeg={185} endColor={color}>
					<button>Hover me!</button>
				</DrawBorder>
			</div>
			<div>
				<span>Change direction</span>
				<DrawBorder borderRadius="10px" direction="counter-clockwise" endColor={color}>
					<button>Hover me!</button>
				</DrawBorder>
			</div>
		</div>
	</section>
	<section id="install">
		<h2>Installation</h2>
		<p>Install svelte-draw-border with the package manager of your choice</p>
		<Code language="sh" code="{`npm i svelte-draw-border
# yarn add svelte-draw-border
# pnpm add svelte-draw-border`}" />
	</section>
	<section id="usage">
		<h2>Usage</h2>
		<p>Wrap the <code>DrawBorder</code> component around any single DOM node to enable the drawn border animation on said node.</p>
		<Code language="html" code={`<script>
  import DrawBorder from 'svelte-draw-border';
</script>

<DrawBorder initialColor="green" endColor="white">
  <button>Submit</button>
</DrawBorder>`} />
	</section>
	<section id="props">
		<h2>Props</h2>
		<table>
			<tr>
				<th>Name</th>
				<th>Type</th>
				<th>Default</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>borderRadius</td>
				<td>string</td>
				<td>0px</td>
				<td>Works with any valid CSS border-radius value</td>
			</tr>
			<tr>
				<td>borderWidth</td>
				<td>string</td>
				<td>2px</td>
				<td>Use px, ems, or rems</td>
			</tr>
			<tr>
				<td>initialColor</td>
				<td>string</td>
				<td>transparent</td>
				<td>Works with any valid CSS color value.</td>
			</tr>
			<tr>
				<td>endColor</td>
				<td>string</td>
				<td>green</td>
				<td>Works with any valid CSS color value</td>
			</tr>
			<tr>
				<td>startingDeg</td>
				<td>number</td>
				<td>90</td>
				<td>The position of the animation start, 0 being the middle & top of the target element</td>
			</tr>
			<tr>
				<td>direction</td>
				<td>'clockwise', 'counter-clockwise'</td>
				<td>'clockwise'</td>
				<td>The direction of the animation</td>
			</tr>
		</table>
	</section>
</main>

<footer>
	<span>Made with love by <a href="https://github.com/stordahl">Jacob Stordahl</a> in MPLS | © {new Date().getFullYear()}</span>
</footer>

<style>
	h2 {
		margin-bottom: 20px;
	}

	p {
		margin-bottom: 15px;
		font-size: 1.2rem;
	}

	section {
		margin-bottom: 20px;
	}

	header, main, footer {
		max-width: 900px;
		padding: 5px 15px;
		margin: 0 auto;
	}

	header {
		padding: 1.5rem 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	footer {
		text-align: center;
		margin-bottom: 30px;
	}

	#demo-grid {
		padding: 20px;
		border-radius: 10px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1.2rem;
	}

	#demo-grid > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-self: center;
	}

	#demo-grid span { margin-bottom: 7px; }

	#demo-grid button {
	  background: #32314b;
		padding: 7px 12px;
		border-radius: 10px;
		border: none;
	}

	#demo-grid .rounded {
		border-radius: 100px;
	}

	table {
  	border-collapse: collapse;
	}
 	
	th {
  	background: #32314b;
	}

	th, td {
  	border: 1px solid #32314b;
  	padding: 8px;
	}

	tr:nth-child(even) {
  	background: #48476f;
	}
	tr:nth-child(odd) {
		background: #32314b;
	}
	@media (prefers-color-scheme: light) {
		#demo-grid button {
			color: #ffffff;
		}	
		table, table * { color: #ffffff; }
	}
</style>
