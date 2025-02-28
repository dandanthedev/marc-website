import { createUseQueryParams } from "svelte-query-params";
import { z } from "zod";

const validators = {
  q: z.string().default(""),
  sort: z.enum(["date", "title"]).default("date"),
  order: z.enum(["asc", "desc"]).default("desc"),
  concert: z.string().uuid().optional(),
  pic: z.string().uuid().optional(),
  modalI: z.string().nullable().default(null),
  buy: z.enum(["true"]).optional()
};

// Create the hook
export const useQueryParams = createUseQueryParams(validators);