export function createGradient(deg:number, start:number, initialColor:string, endColor:string) {
				return `from ${start}deg, ${endColor} ${deg}deg, ${initialColor} ${deg}deg`;
}
