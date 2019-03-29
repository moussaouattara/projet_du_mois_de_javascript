const fs = require('fs');
const path = require('path');

const appDir = path.dirname(require.main.filename);

const p = path.join(appDir, 'data', 'cart.json');

class Cart {

static add(id, productPrice, callback) {

	fs.readFile(p, (err, fileContent) => {
		let cart = { products: [], totalPrice: 0 };
		if (!err) {
			cart = JSON.parse(fileContent);
		}

		const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
		const existingProduct = cart.products[existingProductIndex];

		if (existingProduct) {
			cart.products[existingProductIndex].qty = cart.products[existingProductIndex].qty +1;
		}
		else {
			cart.products.push({ id: id, qty: 1 });
		}

		cart.totalPrice = cart.totalPrice + +productPrice;


		fs.writeFile(p, JSON.stringify(cart), err => {
		if (err) console.log(err);
		callback();

	});

	
	});
}

static getCart(callback) {
	fs.readFile(p, (err, fileContent) => {
		let cart = {products: [], totalPrice: 0};
		if (!err) {
			cart = JSON.parse(fileContent);
		}
		callback(cart);

	});
}


}

module.exports = Cart;
