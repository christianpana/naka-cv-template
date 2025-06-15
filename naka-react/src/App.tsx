import {Header} from "./components/Header"
import {Section} from "./components/ui/Section"
import {Experience} from "./components/Experience"
import {Languages} from "./components/Languages"
import {Certifications} from "./components/Certifications"
import {AboutMe} from "./components/AboutMe.tsx";
import {Education} from "./components/Education.tsx";
import {Other} from "./components/Other.tsx";
import {Training} from "./components/Training.tsx";
import rawData from "./data/data.json"
import {ResumeDataSchema} from "./data/schema.ts";
import {ValidationError} from "./components/ValidationError.tsx";

export default function Resume() {
  const result = ResumeDataSchema.safeParse(rawData);

  if (!result.success) {
    return <ValidationError error={result.error} />;
  }

  const data = result.data;

  return (
    <div className="max-w-screen-lg mx-auto py-16 px-16 space-y-8">
      <Header
        data={data.header}
      />
      {data.aboutMe && data.aboutMe.length > 0 &&
        <Section title="About Me">
          <AboutMe data={data.aboutMe}/>
        </Section>
      }
      {data.professionalExperience && data.professionalExperience.length > 0 &&
        <Section title="Professional Experience">
          <Experience data={data.professionalExperience}/>
        </Section>
      }
      {data.training && data.training.length > 0 &&
        <Section title="Training">
          <Training data={data.training}/>
        </Section>
      }
      {data.education && data.education.length > 0 &&
        <Section title="Education">
          <Education data={data.education}/>
        </Section>
      }
      {data.languages && data.languages.length > 0 &&
        <Section title="Known Languages">
          <Languages data={data.languages}/>
        </Section>
      }
      {data.certifications && data.certifications.length > 0 &&
        <Section title="Certifications">
          <Certifications data={data.certifications}/>
        </Section>
      }
      {data.other && data.other.length > 0 &&
        <Section title="Other">
          <Other data={data.other}/>
        </Section>
      }
    </div>
  )
}

