import {Dot} from "lucide-react";
import React from "react";
import type {TrainingData} from "../types";

interface TrainingProps {
  data: TrainingData[]
}

export function Training({data}: TrainingProps) {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="pl-4 border-l-2 border-black">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold">{item.institution}</h3>
              <p>
                {item.courses.map((course, index) => (
                  <React.Fragment key={index}>
                    <span className="text-gray-600">
                        {course}
                    </span>
                    {index !== item.courses.length - 1 && (
                      <Dot className="inline-block"/>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

