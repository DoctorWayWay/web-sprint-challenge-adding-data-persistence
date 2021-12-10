const db = require("../../data/dbConfig")

async function getAllTasks() {
  const allTasksRaw = await db("projects")
    .select(
      "tasks.task_id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description")
    .join("tasks", "projects.project_id", "=", "tasks.project_id")
  const allTasks = allTasksRaw.map(task => {
    if (task.task_completed === 1) {
      return {
        ...task,
        task_completed: true,
      }
    } else if (task.task_completed === 0) {
      return {
        ...task,
        task_completed: false,
      }
    }
  })
  return allTasks
}

module.exports = {
  getAllTasks,
}
