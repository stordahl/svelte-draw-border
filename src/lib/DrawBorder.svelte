<script lang="ts">
	import { createGradient } from './util/index';

	export let borderRadius = '0px';
	export let borderWidth = '2px';
	export let initialColor = 'transparent';
	export let endColor = 'green';
	export let startingDeg = 90;
	export let direction: 'clockwise' | 'counter-clockwise' = 'clockwise';

	$: isClockwise = direction === 'clockwise';

	let tick = 0;
	let gradientState = `${initialColor}, ${initialColor}`;
	let interval: ReturnType<typeof setInterval>;

	const animation = (dir: string) => {
		clearInterval(interval);
		interval = setInterval(() => {
			tick <= 360
				? (gradientState = createGradient(tick, startingDeg, initialColor, endColor))
				: (gradientState = `${endColor}, ${endColor}`);
			if (dir === 'fwd') tick = tick + 3;
			if (dir === 'rev') tick = tick - 3;
		}, 0.001);
	};

	$: if (tick >= 361) tick = 360;
	$: if (tick < 0) tick = 0;
</script>

<div
	on:mouseenter={() => animation('fwd')}
	on:mouseleave={() => animation('rev')}
	style:background-color={initialColor}
	style:background={`conic-gradient(${gradientState})`}
	style:border-radius={borderRadius}
	style="max-width: max-content; {!isClockwise ? '' : 'transform: scale(1, -1);'}"
>
	<div
		style="border-radius: calc({borderRadius} - {borderWidth}); border: {borderWidth} solid transparent; {!isClockwise
			? ''
			: 'transform: scale(1, -1);'}"
	>
		<slot />
	</div>
</div>
