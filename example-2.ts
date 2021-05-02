
// Run the code and see what happens...
function getPriceWithTax(amount: number, rate: number): string {
	const price: number = amount.toFixed(2)
	const tax: number = price * rate
	return price + tax
}


const answer = getPriceWithTax(23.99, 9.5)
console.log(answer)
