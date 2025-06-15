import {Dot} from "lucide-react";
import type {EducationData} from "../types";

interface EducationProps {
  data: EducationData[]
}

export function Education({data}: EducationProps) {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="pl-4 border-l-2 border-black">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">{item.degree}</h3>
              <p className="">
                <span className="text-gray-600 font-bold">
                    {item.institution}
                </span>
                {item?.location &&
                  <>
                    <Dot className="inline-block"/>
                    <span className="text-gray-500">
                        {item.location}
                    </span>
                  </>
                }
              </p>
            </div>
            <div className="text-gray-500">
              {item.startDate &&
                <div>{item.startDate}</div>
              }
              {item.endDate &&
                <div>{item.endDate}</div>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

