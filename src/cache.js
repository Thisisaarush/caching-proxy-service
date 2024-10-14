const NodeCache = require("node-cache")

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 }) // TTL: 100 seconds, cleanup every 120 seconds

// Functions to interact with the cache (URL as key, response as value)
const getFromCache = (key) => cache.get(key)
const setInCache = (key, value) => cache.set(key, value)
const clearCache = () => {
  cache.flushAll()
  console.log("Cache cleared.")
}

module.exports = { getFromCache, setInCache, clearCache }
