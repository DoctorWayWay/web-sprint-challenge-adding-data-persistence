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

async function getProjectById(project_id) {
  const [project] = await db("projects")
    .where("project_id", project_id)
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
  } else if (project.project_completed !== 1 || project.project_completed !== 0) {
    return {
      ...project,
      project_completed: false,
    }
  }
}

async function postProject(project) {
  const [newProjectId] = await db("projects")
    .insert(project)
  const newProject = await getProjectById(newProjectId)
  return newProject
}

module.exports = {
  getAllProjects,
  getProjectById,
  postProject,
}
