import { Client, Server } from "styletron-engine-atomic";

const getHydrateClass = () =>
  document.getElementsByClassName("_styletron_hydrate_");

export const styletron =
  typeof window === "undefined"
    ? new Server()
    : new Client({
        hydrate: getHydrateClass(),
      });

// export const debug =
//   process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();
// we opt-out the debugger because of on issue with latest nextjs and styletron debugger
export const debug = false;
