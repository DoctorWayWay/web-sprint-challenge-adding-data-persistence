const express = require("express")

const server = express()

server.use(express.json())

// Catch all EP
server.use("*", (req, res) => {
  res.status(200).json({ message: "server is working!" })
})

// Error Handler
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message, // bad for production
    stack: err.stack,
  })
})

module.exports = server
