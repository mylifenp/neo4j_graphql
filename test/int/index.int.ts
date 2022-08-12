import { Server } from "../../src/server";
import { context } from "../../src/context";
import test from "ava";
import {
  CREATE_PROGRAMMERS_PARAMS,
  CREATE_PROGRAMMERS_MUTATION,
  CREATE_PROGRAMMERS_OUTPUT,
} from "../data/createProgrammer";

test("createProgrammers", async (t: any) => {
  console.log("starting");
  const server = await Server(context);
  let result: any;
  try {
    result = await server.executeOperation({
      query: CREATE_PROGRAMMERS_MUTATION,
      variables: CREATE_PROGRAMMERS_PARAMS,
    });
  } catch (err) {
    console.log("error", err);
  }
  console.log("results", result.errors);
  t.true(!result.errors);
  t.deepEqual(
    // @ts-ignore
    result.data.createProgrammers,
    CREATE_PROGRAMMERS_OUTPUT
  );
});
