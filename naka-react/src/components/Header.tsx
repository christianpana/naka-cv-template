import {HeaderData} from "../types"
import {Dot, Github, Globe, Linkedin, Mail, MapPin, Phone} from 'lucide-react'
import {QRCode} from "react-qrcode-logo";
import React from "react";

interface HeaderProps {
  data: HeaderData
}

export function Header({data}: HeaderProps) {
  return (
    <header className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-5xl font-extrabold mb-2 font-serif">
          {data.name}
        </h1>
        {data?.expertise &&
          <p className="text-lg mb-4 text-gray-700">{data.expertise}</p>
        }

        <div className="space-y-1 text-sm">
          <div className="flex items-center">
            {
              [
                data?.contact?.phone && (
                  <React.Fragment key={`contact-phone`}>
                    <Phone size={16} className="text-gray-600 mr-2"/>
                    <span>{data?.contact?.phone}</span>
                  </React.Fragment>
                ),
                data?.contact?.email && (
                  <React.Fragment key={`contact-email`}>
                    <Mail size={16} className="text-gray-600 mr-2"/>
                    <span>{data.contact.email}</span>
                  </React.Fragment>
                ),
                data?.contact?.location && (
                  <React.Fragment key={`contact-location`}>
                    <MapPin size={16} className="text-gray-600 mr-2"/>
                    <span>{data.contact.location}</span>
                  </React.Fragment>
                )
              ]
                .filter(Boolean)
                .map((element, i, array) => (
                  i === array.length - 1 ?
                    element
                    :
                    <React.Fragment key={`${i}-with-dot`}>
                      {element}
                      <Dot className="inline-block mx-1"/>
                    </React.Fragment>
                ))
            }
          </div>

          <div className="flex items-center">
            {
              [
                data?.contact?.linkedin && (
                  <React.Fragment key={`contact-linkedin`}>
                    <Linkedin size={16} className="text-gray-600 mr-2"/>
                    <a href={`https://${data.contact.linkedin}`} className="hover:underline">
                      {data.contact.linkedin}
                    </a>
                  </React.Fragment>
                ),
                data?.contact?.github && (
                  <React.Fragment key={`contact-github`}>
                    <Github size={16} className="text-gray-600 mr-2"/>
                    <a href={`https://${data.contact.github}`} className="hover:underline">
                      {data.contact.github}
                    </a>
                  </React.Fragment>
                ),
                data?.contact?.website && (
                  <React.Fragment key={`contact-website`}>
                    <Globe size={16} className="text-gray-600 mr-2"/>
                    <a href={`https://${data.contact.website}`} className="hover:underline">
                      {data.contact.website}
                    </a>
                  </React.Fragment>
                )
              ]
                .filter(Boolean)
                .map((element, i, array) => (
                  i === array.length - 1 ?
                    element
                    :
                    <React.Fragment key={`${i}-with-dot`}>
                      {element}
                      <Dot className="inline-block mx-1"/>
                    </React.Fragment>
                ))
            }
          </div>
        </div>
      </div>

      <div className="w-36 h-36">
        {data.qrcode && data.qrcode?.length > 0 &&
          <QRCode
            value={data.qrcode}
            qrStyle="fluid"
            eyeRadius={[10, 10, 10]}
            size={144}
            quietZone={0}
          />
        }
      </div>
    </header>
  )
}

