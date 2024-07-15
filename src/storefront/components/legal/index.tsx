import React from "react"

export function Legal({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-16 md:pt-24 [&>h1]:text-2xl [&>h1]:font-semibold md:[&>h1]:text-3xl [&>h1]:mb-6 space-y-5 container max-w-4xl">
      {children}
    </div>
  )
}

export function LegalSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="[&>h2]:mb-5 [&>h2]:font-semibold [&>h2]:text-xl space-y-3">
      {children}
    </section>
  )
}
