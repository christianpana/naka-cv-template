interface SectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({title, children, className = ""}: SectionProps) {
  return (
    <section className={`${className}`}>
      <div className="mb-4 border-b-2 border-black">
        <h2 className="inline-block bg-black text-lg text-white font-bold px-3 py-1 min-w-[40%]">
          {title}
        </h2>
      </div>
      <div className="">{children}</div>
    </section>
  )
}

