const router = require("express").Router()
const Task = require("./model")
const {
  verifyTask
} = require("./task-middleware")

// [GET] - /api/tasks (returns all tasks)
router.get("/", async (req, res, next) => {
  try {
    const allTasks = await Task.getAllTasks()
    res.status(200).json(allTasks)
  } catch (err) {
    next(err)
  }
})

// [POST] - /api/tasks (returns new task)
router.post("/", verifyTask, async (req, res, next) => {
  try {
    const { task_description, project_id } = req.body
    const newTask = await Task.postTask({
      task_description: task_description,
      project_id: project_id
    })
    res.status(201).json(newTask)
  } catch (err) {
    next(err)
  }
})

module.exports = router
