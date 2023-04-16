// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, { through: 'product_category' });

// Categories have many Products
Category.belongsToMany(Product, { through: 'category_product' });

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
