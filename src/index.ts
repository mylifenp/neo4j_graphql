import { context } from "./context";
import { PORT } from "./config";
import { Server } from "./server";

async function main() {
  const server = await Server(context);
  server.listen(PORT).then(({ url }) => {
    console.log(`GraphQL server ready at ${url}`);
  });
}

main();
