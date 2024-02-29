import { Inngest, EventSchemas } from "inngest";

type ChangePoints = {
  data: {
    increment?: number;
    decrement?: number;
  };
  user: {
    uuid: string;
  };
};

type CancelClashedReservations = {
  data: {
    reservationId: string;
  };
};

type Events = {
  "users/point.change": ChangePoints;
  "reservations/clashes.cancel": CancelClashedReservations;
};

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "near-nest",
  schemas: new EventSchemas().fromRecord<Events>(),
});
