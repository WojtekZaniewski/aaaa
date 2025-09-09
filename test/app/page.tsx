"use client"

import { useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

export default function HomePage() {
  const [speed] = useState(1.0)

  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden">
      <MeshGradient
        className="w-full h-full absolute inset-0"
        colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
        speed={speed}
        backgroundColor="#000000"
      />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: `${3 / speed}s` }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/2 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-gray-900/3 rounded-full blur-xl animate-pulse"
          style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center font-mono text-xs text-white/40">
          <div className="text-lg mb-2">PM architekci – Rafał Mazur</div>
          <div className="text-sm">Bielsko-Biała</div>
        </div>
      </div>
    </div>
  )
}
