const express = require("express");
const { program } = require("commander");

program
  .requiredOption("-h, --host <host>")
  .requiredOption("-p, --port <port>")
  .requiredOption("-c, --cache <cache>")
  .parse();

const options = program.opts();

if (!options.host || !options.port || !options.cache) {
  console.error(
    "Error: all parameters (--host, --port, --cache) must be provided."
  );
  process.exit(1);
}

const app = express();


app.listen(options.port, options.host, () => {
  console.log(`Server started on ${options.host}:${options.port}`);
});
