const fs = require('fs');
const path = require('path');

const uuidv1 = require('uuid/v1');

const appDir = path.dirname(require.main.filename);

const p = path.join(appDir, 'data', 'products.json');

class Product {
	constructor(name, description, image, price) {
		this.name = name;
		this.description = description;
		this.image = image;
		this.price = price;

	}

	save(callback) {
		this.id = uuidv1();
		fs.readFile(p, (err, fileContent) => {
			let products = [];
			if (!err) {
				products = JSON.parse(fileContent);
			}

			products.push(this);

			fs.writeFile(p, JSON.stringify(products), err => {
				if (err) console.log(err);
				callback();
			});
		});
		
	}

static findAll(callback) {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			callback([]);
		}
		else {
			callback(JSON.parse(fileContent));
		}
	});
}

static findById(id, callback) {
	fs.readFile(p, (err, fileContent) => {
		const product = JSON.parse(fileContent).find(prod => prod.id === id);
		callback(product);
	});
}

}



module.exports = Product;