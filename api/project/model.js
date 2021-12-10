const db = require("../../data/dbConfig")

async function getAllProjects() {
  const allProjectsRaw = await db("projects")
    .select("*")
  const allProjects = allProjectsRaw.map(project => {
    if (project.project_completed === 1) {
      return {
        ...project,
        project_completed: true,
      }
    } else if (project.project_completed === 0) {
      return {
        ...project,
        project_completed: false,
      }
    }
  })
  return allProjects
}

module.exports = {
  getAllProjects
}
