import type {LanguageData} from "../types"

interface LanguagesProps {
  data: LanguageData[]
}

export function Languages({data}: LanguagesProps) {
  return (
    <div className="w-full">
      <table className="w-full border-collapse">
        <thead>
        <tr>
          <th rowSpan={2} className="border border-gray-300 px-4 py-2">
            Language
          </th>
          <th colSpan={2} className="border border-gray-300 px-4 py-2">
            Understanding
          </th>
          <th colSpan={2} className="border border-gray-300 px-4 py-2">
            Speaking
          </th>
          <th rowSpan={2} className="border border-gray-300 px-4 py-2">
            Writing
          </th>
        </tr>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Listening</th>
          <th className="border border-gray-300 px-4 py-2">Reading</th>
          <th className="border border-gray-300 px-4 py-2">Interaction</th>
          <th className="border border-gray-300 px-4 py-2">Production</th>
        </tr>
        </thead>
        <tbody>
        {data.map((lang, index) => (
          <tr key={index}>
            <td className="border border-gray-300 font-bold px-4 py-2">
              {lang?.language || "-"}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              {lang?.listening || "-"}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              {lang?.reading || "-"}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              {lang?.interaction || "-"}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              {lang?.production || "-"}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              {lang?.writing || "-"}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

