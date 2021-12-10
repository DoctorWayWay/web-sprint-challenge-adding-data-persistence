const db = require("../../data/dbConfig")

async function getAllResources() {
  const allResources = await db("resources")
    .select("*")
  return allResources
}

async function getResourceById(resource_id) {
  const resource = await db("resources")
    .select("*")
    .where("resource_id", resource_id)
  return resource
}

async function findResourceName(resource_name) {
  const [foundResourceName] = await db("resources")
    .select("resource_name")
    .where("resource_name", resource_name)
  return foundResourceName
}

async function postResource(resource) {
  const [newResourceId] = await db("resources")
    .insert(resource)
  const [newResource] = await getResourceById(newResourceId)
  return newResource
}

module.exports = {
  getAllResources,
  findResourceName,
  getResourceById,
  postResource,
}
