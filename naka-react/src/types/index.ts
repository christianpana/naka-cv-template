import {z} from "zod";
import {
  AboutMeSchema,
  CertificationSchema,
  ContactInfoSchema,
  EducationSchema,
  ExperienceSchema,
  HeaderSchema,
  LanguageLevelSchema,
  LanguageSchema,
  OtherSchema,
  ResumeDataSchema,
  TrainingSchema
} from "../data/schema.ts";

export type ContactInfoData = z.infer<typeof ContactInfoSchema>;
export type HeaderData = z.infer<typeof HeaderSchema>;
export type AboutMeData = z.infer<typeof AboutMeSchema>;
export type ExperienceData = z.infer<typeof ExperienceSchema>;
export type TrainingData = z.infer<typeof TrainingSchema>;
export type EducationData = z.infer<typeof EducationSchema>;
export type LanguageLevel = z.infer<typeof LanguageLevelSchema>;
export type LanguageData = z.infer<typeof LanguageSchema>;
export type CertificationData = z.infer<typeof CertificationSchema>;
export type OtherData = z.infer<typeof OtherSchema>;
export type ResumeData = z.infer<typeof ResumeDataSchema>;
