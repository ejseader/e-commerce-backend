const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const parsedTags = await Tag.findAll({
    attributes: ["id", "tag_name"],
    // be sure to include its associated Product data
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
      through: "ProductTag",
    },],
  })
  await res.json(parsedTags);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const foundTag = await Tag.findByPk(req.params.id, {
    // be sure to include its associated Product data
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
      through: "ProductTag",
    }],
  })
  await res.json(foundTag);
});

router.post('/', async (req, res) => {
  // create a new tag
  const newTag = await Tag.create({
    tag_name: req.body.tag_name,
  })
  await res.json(newTag);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = await Tag.update({
    tag_name: req.body.tag_name,
  }, {
    where: {
      id: req.params.id,
    },
  })
  await res.json(updateTag);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  await Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  await res.json('Tag successfully removed from database.')
});

module.exports = router;
