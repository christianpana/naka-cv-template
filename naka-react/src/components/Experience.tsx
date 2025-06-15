import {ExperienceData} from "../types"
import {Dot} from "lucide-react";

interface ExperienceProps {
  data: ExperienceData[]
}

export function Experience({data}: ExperienceProps) {
  return (
    <div className="">
      {data.map((exp, index) => (
        <div key={index} className="mb-8 relative pl-4 border-l-2 border-black">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p>
                <span className="text-lg font-bold">
                    {exp.company}
                </span>
                {exp?.location &&
                  <>
                    <Dot className="inline-block"/>
                    <span className="text-gray-600">
                        {exp.location}
                    </span>
                  </>
                }
              </p>
            </div>
            {(exp?.startDate || exp?.endDate) &&
              <div className="text-right text-gray-600">
                {exp?.startDate &&
                  <>
                    {exp.startDate}
                  </>
                }
                {exp?.endDate &&
                  <>
                    <br/>
                    {exp.endDate}
                  </>
                }
              </div>
            }
          </div>

          {exp?.description &&
            <div className="mb-4">
              <h4 className="font-bold mb-2">Description</h4>
              <p>{exp.description}</p>
            </div>
          }

          {exp?.responsibilities &&
            <div className="mb-4">
              <h4 className="font-bold mb-2">Responsibilities & Contribution</h4>
              <ul className="list-disc list-inside space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          }

          {exp?.technologies &&
            <div>
              <h4 className="font-bold mb-2">Technologies</h4>
              <div className="grid grid-cols-4 gap-2">
                {exp.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 px-3 py-1 rounded text-sm text-center"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      ))}
    </div>
  )
}

