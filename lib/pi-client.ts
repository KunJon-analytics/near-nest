import PiNetwork from "pi-backend";

import { env } from "@/env.mjs";

export const pi = new PiNetwork(env.PI_API_KEY, env.PI_SECRET_KEY);
