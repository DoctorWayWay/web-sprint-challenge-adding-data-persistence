const router = require("express").Router()
const Project = require("./model")

// [GET] - /api/projects (returns all projects)
router.get("/", async (req, res, next) => {
  try {
    const allProjects = await Project.getAllProjects()
    res.status(200).json(allProjects)
  } catch (err) {
    next(err)
  }
})

module.exports = router
