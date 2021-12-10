function verifyTask(req, res, next) {
  const { task_description, project_id } = req.body
  if (!task_description) {
    next({
      status: 400,
      message: "tasks must have a task_description"
    })
  } else if (!project_id) {
    next({
      status: 400,
      message: "task must have a project_id"
    })
  } else {
    next()
  }
}

module.exports = {
  verifyTask
}
