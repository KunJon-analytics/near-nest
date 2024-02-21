import axios from "axios";

import { env } from "@/env.mjs";

const platformAPIClient = axios.create({
  baseURL: "https://api.minepi.com",
  timeout: 20000,
  headers: { Authorization: `Key ${env.PI_API_KEY}` },
});

export default platformAPIClient;
