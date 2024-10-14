const express = require("express")
const axios = require("axios")
const { getFromCache, setInCache } = require("./cache")

const startServer = (port, origin) => {
  const app = express()

  app.use(async (req, res) => {
    const cacheKey = req.originalUrl

    // Check if the response is cached
    const cachedResponse = getFromCache(cacheKey)
    if (cachedResponse) {
      res.set("X-Cache", "HIT")
      return res.send(cachedResponse)
    }

    try {
      // Make the request to the origin server
      const response = await axios.get(`${origin}${req.originalUrl}`)

      // Cache the response and forward it to the client
      setInCache(cacheKey, response.data)
      res.set("X-Cache", "MISS")
      res.send(response.data)
    } catch (error) {
      res.status(500).send("Error forwarding request to origin server")
    }
  })

  app.listen(port, () => {
    console.log(`Caching proxy server running on port ${port}`)
  })
}

module.exports = { startServer }
