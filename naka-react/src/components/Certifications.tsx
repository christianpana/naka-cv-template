import type {CertificationData} from "../types"

interface CertificationsProps {
  data: CertificationData[]
}

export function Certifications({data}: CertificationsProps) {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="pl-4 border-l-2 border-black">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {item?.badge &&
                <div className="w-12 h-12 mr-4">
                  <img
                    src={item.badge}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
              }
              <div>
                <h3 className="text-lg font-bold">
                  {item.name}
                </h3>
                {item?.link &&
                  <p className="text-gray-600">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:underline text-sm"
                    >
                      {item.link}
                    </a>
                  </p>
                }
              </div>
            </div>
            {item?.year &&
              <div className="text-gray-500">
                <div>{item.year}</div>
              </div>
            }
          </div>
        </div>
      ))}
    </div>
  )
}

