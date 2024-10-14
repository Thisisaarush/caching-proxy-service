# [Caching Proxy Service](https://roadmap.sh/projects/caching-server)

This is a simple caching proxy service that caches the responses from the server and serves the cached response for the same request in the future.

## Features

1. **Caching**: The service caches the responses from the origin server and serves the cached response for the same request in the future.
2. **Cache Expiry**: The service supports cache expiry. The cache is invalidated after a certain time period.
3. **Cache Clearing**: The service provides an option to clear the cache manually.

## Tech Stack

1. **Node.js**: The service is built using Node.js.
2. **Express.js**: The service uses Express.js as the web server framework.
3. **Axios**: The service uses Axios for making HTTP requests to the origin server.
4. **Commander.js**: The service uses Commander.js for building CLI commands.
5. **Node-cache**: The service uses node-cache for caching responses.

## How to run the service

1. Clone the repository
2. Run the following command to start the service

   ```bash
   node src/cli.js start --port <PORT> --origin <ORIGIN_URL>
   ```

   e.g.

   ```bash
    node src/cli.js start --port 3000 --origin http://dummyjson.com
   ```

3. The service will start on the specified port and will cache the responses from the origin server.
4. Test the service by making a request to the service

   ```bash
   curl -i http://localhost:3000/products
   ```

   or using postman

   - GET <http://localhost:3000/products>
   - Inspect the response headers. You should see X-Cache: MISS for the first request and X-Cache: HIT for subsequent requests.

5. To clear the cache, you can run the following command

   ```bash
     node src/cli.js clear-cache
   ```
