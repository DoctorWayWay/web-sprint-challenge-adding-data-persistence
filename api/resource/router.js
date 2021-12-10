const router = require("express").Router()
const Resource = require("./model")
const {
  verifyResource
} = require("./resource-middleware")

// [GET] - /api/resources (returns all resources)
router.get("/", async (req, res, next) => {
  try {
    const allResources = await Resource.getAllResources()
    res.status(200).json(allResources)
  } catch (err) {
    next(err)
  }
})

// [POST] - /api/resources (returns newly posted resource)
router.post("/", verifyResource, async (req, res, next) => {
  try {
    const {
      resource_name,
      resource_description,
    } = req.body
    const newResource = await Resource
      .postResource({ resource_name, resource_description })
    res.status(201).json(newResource)
  } catch (err) {
    next(err)
  }
})

module.exports = router
