// build your `Resource` model here
const db = require("../../data/dbConfig")

async function getAllResources() {
  const allResources = await db("resources")
    .select("*")
  return allResources
}

module.exports = {
  getAllResources,
}
