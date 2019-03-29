const Product = require('../models/Product.js')

const getIndex = (req, res) => {
	res.render('admin.pug', {
		title: 'Admin',
		admin: true
	});
}

const postIndex = (req, res) => {
	const { name, description, image, price } = req.body;
	const newProduct = new Product(name, description, image, price);
	newProduct.save(() => {
		res.redirect('/');
	});
	}


module.exports = {
	getIndex: getIndex,
	postIndex: postIndex
}
