import { referenceFunction } from "inngest";

// Create a reference to a function in another application
export const clearIncomplete = referenceFunction({
  appId: "aws-near-nest",
  functionId: "clear-incomplete",
});
