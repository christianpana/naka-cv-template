import type {AboutMeData} from "../types";

interface AboutMeProps {
  data: AboutMeData
}

export function AboutMe({data}: AboutMeProps) {
  return (
    <p className="leading-relaxed">
      {data}
    </p>
  )
}

