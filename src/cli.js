const { Command } = require("commander")
const { startServer } = require("./proxyServer")
const { clearCache } = require("./cache")

const program = new Command()

program
  .command("start")
  .description("Start the caching proxy server")
  .option("--port <number>", "Port to run the server on", 3000)
  .option(
    "--origin <url>",
    "Origin server URL",
    "https://dev-aarush.vercel.app/"
  )
  .action((options) => {
    const { port, origin } = options
    startServer(port, origin)
  })

program
  .command("clear-cache")
  .description("Clear the cache")
  .action(() => {
    clearCache()
  })

program.parse(process.argv)
