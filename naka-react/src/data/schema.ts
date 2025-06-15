import { z } from 'zod';

export const ContactInfoSchema = z.object({
  phone: z.string().optional(),
  email: z.string().email(),
  location: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  website: z.string().optional(),
});

export const HeaderSchema = z.object({
  name: z.string(),
  expertise: z.string().optional(),
  contact: ContactInfoSchema,
  qrcode: z.string().optional(),
});

export const AboutMeSchema = z.string().optional();

export const ExperienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  description: z.string().optional(),
  responsibilities: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
});

export const TrainingSchema = z.object({
  institution: z.string(),
  courses: z.array(z.string()),
});

export const EducationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

export const LanguageLevelSchema = z.string();

export const LanguageSchema = z.object({
  language: z.string(),
  listening: LanguageLevelSchema,
  reading: LanguageLevelSchema,
  interaction: LanguageLevelSchema,
  production: LanguageLevelSchema,
  writing: LanguageLevelSchema,
});

export const CertificationSchema = z.object({
  name: z.string(),
  year: z.string().optional(),
  link: z.string().url().optional(),
  badge: z.string().url().optional(),
});

export const OtherSchema = z.object({
  title: z.string(),
  institution: z.string(),
  location: z.string(),
  date: z.string(),
  type: z.string(),
});

export const ResumeDataSchema = z.object({
  header: HeaderSchema,
  aboutMe: AboutMeSchema,
  professionalExperience: z.array(ExperienceSchema).optional(),
  training: z.array(TrainingSchema).optional(),
  education: z.array(EducationSchema).optional(),
  languages: z.array(LanguageSchema).optional(),
  certifications: z.array(CertificationSchema).optional(),
  other: z.array(OtherSchema).optional(),
});
