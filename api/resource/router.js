// build your `/api/resources` router here
const router = require("express").Router()
const Resource = require("./model")

// [GET] - /api/resources (returns all resources)
router.get("/", async (req, res, next) => {
  try {
    const allResources = await Resource.getAllResources()
    res.status(200).json(allResources)
  } catch (err) {
    next(err)
  }
})

module.exports = router
