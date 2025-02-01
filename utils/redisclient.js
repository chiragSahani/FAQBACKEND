import { createClient } from "redis";

const client = createClient();

(async () => {
  await client
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
})();

export { client };

export { client };