const router = require("express").Router()
const Project = require("./model")
const {
  verifyProject
} = require("./project-middleware")

// [GET] - /api/projects (returns all projects)
router.get("/", async (req, res, next) => {
  try {
    const allProjects = await Project.getAllProjects()
    res.status(200).json(allProjects)
  } catch (err) {
    next(err)
  }
})

// [POST] - /api/projects (returns the created project)
router.post("/", verifyProject, async (req, res, next) => {
  try {
    const {
      project_name,
      project_description,
      project_completed,
    } = req.body
    const newProject = await Project.postProject({
      project_name: project_name,
      project_description: project_description,
      project_completed: project_completed
    })
    res.status(201).json(newProject)
  } catch (err) {
    next(err)
  }
})

module.exports = router
