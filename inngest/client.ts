import { Inngest, EventSchemas } from "inngest";

type Events = {};

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "near-nest",
  schemas: new EventSchemas().fromRecord<Events>(),
});
