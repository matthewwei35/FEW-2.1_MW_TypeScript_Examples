// Add some types here!
// Run the code here, no problems?
function getPriceWithTax(amount, rate) {
	const price = amount.toFixed(2)
	const tax = price * rate
	return (price + tax)
}

const answer = getPriceWithTax(23.99, 9.5)
console.log(answer)

// What happened? 
