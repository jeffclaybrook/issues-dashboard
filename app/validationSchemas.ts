import { z } from "zod"

export const issueSchema = z.object({
 title: z
  .string()
  .min(1, "Title required")
  .max(255),
 description: z
  .string()
  .min(1, "Description required")
  .max(6000)
})

export const patchIssueSchema = z.object({
 title: z
  .string()
  .min(1, "Title required")
  .max(255),
 description: z
  .string()
  .min(1, "Description required")
  .max(255)
  .optional(),
 assignedToUserId: z
  .string()
  .min(1, "Assigned to user ID required")
  .max(255)
  .optional()
  .nullable()
})