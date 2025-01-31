import { createUseQueryParams } from "svelte-query-params";
import { z } from "zod";

const validators = {
  q: z.string().default(""),
  sort: z.enum(["date", "title"]).default("date"),
  order: z.enum(["asc", "desc"]).default("desc")
};

// Create the hook
export const useQueryParams = createUseQueryParams(validators);