const router = require("express").Router()
const Task = require("./model")

// [GET] - /api/tasks (returns all tasks)
router.get("/", async (req, res, next) => {
  try {
    const allTasks = await Task.getAllTasks()
    res.status(200).json(allTasks)
  } catch (err) {
    next(err)
  }
})

module.exports = router
