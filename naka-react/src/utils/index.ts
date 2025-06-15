import {ResumeDataSchema} from "../data/schema.ts";

export function validateResumeData(data: unknown) {
  const result = ResumeDataSchema.safeParse(data);

  if (!result.success) {
    return result.error;
  } else {
    return result.data;
  }
}
