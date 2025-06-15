import {Dot} from "lucide-react";
import type {OtherData} from "../types";
import React from "react";

interface OtherProps {
  data: OtherData[]
}

export function Other({data}: OtherProps) {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="pl-4 border-l-2 border-black">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-bold">
                {item.title}
              </h3>
              <p>
                {[
                  item?.institution && (
                    <span key="institution" className="text-gray-600 font-bold">
                      {item.institution}
                    </span>
                  ),
                  item?.location && (
                    <span key="location" className="text-gray-600">
                      {item.location}
                    </span>
                  ),
                  item?.date && (
                    <span key="date" className="text-gray-600">
                      {item.date}
                    </span>
                  )
                ]
                  .filter(Boolean)
                  .map((element, i, array) => (
                    i === array.length - 1 ?
                      element
                      :
                      <React.Fragment key={`${i}-with-dot`}>
                        {element}
                        <Dot className="inline-block"/>
                      </React.Fragment>
                  ))
                }
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
