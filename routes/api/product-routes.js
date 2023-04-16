const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  const allProds = await Product.findAll({
    attributes: ["id", "product_name", "price", "stock", "category_id"],
  // be sure to include its associated Category and Tag data
  include: [{
    model: Category,
    attributes: ["id", "category_name"]
  }]
});
res.json(allProds);
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  const product_id = req.params.id;
  const foundProduct = await Product.findByPk(product_id, {
    attributes: ["id", "product_name", "price", "stock", "category_id"],
    // be sure to include its associated Category and Tag data
    include: [{
      model: Category,
      attributes: ["id", "category_name" ],
    }],
  });

  if (foundProduct) {
    res.json(foundProduct);
  } else res.send('Sorry, there are no categories with that ID.');
});

// create new product
router.post('/', async (req, res) => {
  try {
  const { tagIds } = req.body;
  await Product.create(req.body);

  const product =  await Product.findOne({
    where: { product_name: req.body.product_name },
        });
              // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (tagIds.length) {
        const productTagIdArr = tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        await ProductTag.bulkCreate(productTagIdArr);
      }

    const postBulkCreate = await Product.findOne({
      where: { product_name: req.body.product_name },
    });

    res.json(postBulkCreate);
  } catch (err) {
      console.log(err);
      res.status(400).json(err);
  }
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  await Product.destroy({
    where: {
      id: req.params.id,
    },
  })
  await res.json("The product has been successfully removed.")
});

module.exports = router;
