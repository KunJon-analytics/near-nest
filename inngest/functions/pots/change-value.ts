import { inngest } from "@/inngest/client";
import prisma from "@/lib/prisma";

export const changePotValue = inngest.createFunction(
  { id: "change-pot-value" },
  { event: "pots/value.change" },
  async ({ event }) => {
    // (event) change pot value
    const increment = event.data.increment;
    const decrement = event.data.decrement;
    const name = event.data.name;

    try {
      // update pot value to event..

      const pot = await prisma.pot.upsert({
        where: { name },
        update: { availableBounty: { increment, decrement } },
        select: { name: true, availableBounty: true },
        create: { name, availableBounty: increment, id: name },
      });

      return pot;
    } catch (error) {
      throw new Error("Database error", {
        cause: error,
      });
    }
  }
);
