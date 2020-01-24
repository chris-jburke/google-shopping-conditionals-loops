// Require is a node-specific thing, so run
// your file in the terminal with the node command!
// e.g., node js/google-shopping.js
let data = require('../products.json')

// This is a print out of all the items in the data
//console.log(data.items)

// Next, it's recommended to just look at the first item
//console.log(data.items[0])

// YOUR CODE BELOW
let count = 0;
for (let i = 0; i < data.items.length; i++){
	if(data.items[i].kind === "shopping#product"){
		count++
	}

}

// 1.) Go through the `items` and find all results that have `kind` of
// `shopping#product`. Print the count of these results. Where else is
// this count information stored in the search results?

//This information is stored before data before the large item code block

console.log('\nProblem 1:\n')
console.log("Number of products with kind shopping#product : " + count);

// 2.) Print the `title` all items with a `backorder` availability
// in `inventories`.

console.log('\nProblem 2:\n')
for (const curr of data.items){
	//console.log(data.items[i].product);
	//console.log(curr.product.inventories)
	let currInventory = curr.product.inventories;
	let flag = false;
	for(inv of currInventory){
		if(inv.availability === "backorder"){
			flag = true;
		}
	}
	if(flag === true){
		console.log(curr.product.title)
	}
	//for(const inv in data.items[i].product){
	//	console.log(inv)
	//
}

// 3.) Print the `title` all items with more than one image link.

console.log('\nProblem 3:\n')
for (const curr of data.items){
	if(curr.product.images.length > 1){
		console.log(curr.product.title);
	}
}

// 4.) Print all "Canon" products in the items
// HINT: careful with case sensitivity!

console.log('\nProblem 4:\n')

for (const curr of data.items){
	let currBrand = curr.product.brand;
	if(currBrand === "Canon"){
		console.log(curr.product)
	}

}


// 5.) Print all `items` that have an author name of "eBay" and are
// brand "Canon".
// HINT: What is the type of author?

console.log('\nProblem 5:\n')
for (const curr of data.items){
	let currBrand = curr.product.brand;
	let currAuthor = curr.product.author.name;
	if(currBrand === "Canon" && currAuthor === "eBay"){
		console.log(curr)
	}
}
// 6.) Print all the products with their **brand**, **price**,
// and an **image link**
// HINT: You can just use the first (0th) element in the images
// and inventories arrays.

console.log('\nProblem 6:\n')
for (const curr of data.items){
	let currBrand = curr.product.brand;
	let currInv = curr.product.inventories;
	console.log(currBrand);
	console.log(currInv[0].price);
	let currImages = curr.product.images;
	console.log(currImages[0].link);

}





