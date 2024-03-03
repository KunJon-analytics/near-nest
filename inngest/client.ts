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

type FinishClaim = {
  data: {
    paymentId: string;
  };
};

type ChangePotValue = {
  data: {
    name: string;
    increment?: number;
    decrement?: number;
  };
  user: {
    uuid: string;
  };
};

type Events = {
  "users/point.change": ChangePoints;
  "reservations/clashes.cancel": CancelClashedReservations;
  "payments/tx.finish": FinishClaim;
  "payments/incomplete.clear": {};
  "pots/value.change": ChangePotValue;
};

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "near-nest",
  schemas: new EventSchemas().fromRecord<Events>(),
});
