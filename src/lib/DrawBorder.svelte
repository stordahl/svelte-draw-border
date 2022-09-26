<script lang="ts">
	import { createGradient } from '../util/index'

	export let borderRadius:string = '0px'
	export let borderWidth:string = '2px'
	export let initialColor:string = 'white'
	export let endColor:string = 'green'
	export let startingDeg:number = 90
	export let direction:'clockwise'|'counter-clockwise' = 'clockwise'

	$: isClockwise = direction === 'clockwise'

	let tick:number = 0
	let gradientState:string = `${initialColor}, ${initialColor}`
	let interval:NodeJS.Timeout
	
	const animation = (dir:string) => {
			clearInterval(interval)
			interval = setInterval(() => {
				tick <= 360 ? 
					gradientState = createGradient(tick, startingDeg, initialColor, endColor):
			  	gradientState = `${endColor}, ${endColor}`;
					if(dir === 'fwd') tick = tick + 3
					if(dir === 'rev') tick = tick - 3
			}, 0.001)
	}
	
	$: if(tick >= 361) tick = 360
	$: if(tick < 0) tick = 0
</script>

<div on:mouseenter={() => animation('fwd')}
		 on:mouseleave={() => animation('rev')}
		 style:background-color={initialColor}
		 style:background={`conic-gradient(${gradientState})`}
		 style:border-radius={borderRadius}
		 style="max-width: max-content; {!isClockwise ? '' : 'transform: scale(1, -1);'}"
		 
>
	<div style="border-radius: calc({borderRadius} - {borderWidth}); border: {borderWidth} solid transparent; {!isClockwise ? '' : 'transform: scale(1, -1);'}">
		<slot/>		
	</div>
</div>
