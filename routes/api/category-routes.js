const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const allCats = await Category.findAll({
    attributes: ["id", "category_name"],
    // be sure to include its associated Products
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"]
    }]
  });
  res.json(allCats);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const category_id = req.params.id;
  const foundCategory = await Category.findByPk(category_id, {
    attributes: ["id", "category_name"],
    // be sure to include its associated Products
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    }],
  });

  if (foundCategory) {
    res.json(foundCategory);
  } else res.send('Sorry, there are no categories with that ID.');
});

router.post('/', async (req, res) => {
  // create a new category
  const catData = req.body;

  const newCat = await Category.create(catData);

  res.send(newCat);
  await console.log('New category successfully created');
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.send('Category updated successfully');
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  await Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  await res.json('The category has been successfully removed.')
});

module.exports = router;
