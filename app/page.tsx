"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Dashboard from "@/components/pages/dashboard"
import Prediction from "@/components/pages/prediction"
import Upload from "@/components/pages/upload"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"dashboard" | "prediction" | "upload">("dashboard")

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-lime-900/20 pointer-events-none" />

      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />

      <div className="pt-20 px-4 md:px-8 pb-8 relative z-10">
        {currentPage === "dashboard" && <Dashboard />}
        {currentPage === "prediction" && <Prediction />}
        {currentPage === "upload" && <Upload />}
      </div>
    </main>
  )
}
