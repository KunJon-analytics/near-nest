import { serve } from "inngest/next";

import { inngest } from "@/inngest/client";
import { changePoints } from "@/inngest/functions/users/change-points";
import { cancelClashingReservations } from "@/inngest/functions/reservations/cancel-clashing-reservations";
import { finishClaim } from "@/inngest/functions/payments/finish-claim";
import { clearIncompleteRoutine } from "@/inngest/functions/payments/clear-incomplete-routine";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    changePoints,
    cancelClashingReservations,
    finishClaim,
    clearIncompleteRoutine,
  ],
});
