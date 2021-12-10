const Resource = require("./model")

async function verifyResource(req, res, next) {
  const { resource_name } = req.body
  const foundResource = await Resource.findResourceName(resource_name)
  if (!resource_name) {
    next({
      status: 400,
      message: "a resource must have a resource_name"
    })
  } else if (foundResource !== undefined) {
    next({
      status: 400,
      message: `${resource_name} already exists`
    })
  } else {
    next()
  }
}

module.exports = {
  verifyResource
}
