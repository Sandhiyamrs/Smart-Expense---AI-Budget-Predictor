"use client"

import { User, Menu, X } from "lucide-react"
import { useState } from "react"

interface NavbarProps {
  onNavigate: (page: "dashboard" | "prediction" | "upload") => void
  currentPage: string
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: "Dashboard", value: "dashboard" },
    { label: "Prediction", value: "prediction" },
    { label: "Upload", value: "upload" },
  ] as const

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-pink-500/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-lime-400 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">S</span>
          </div>
          <h1 className="text-white font-bold text-xl hidden sm:block">SmartExpense</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`smooth-transition font-medium ${
                currentPage === item.value
                  ? "text-lime-400 border-b-2 border-lime-400 pb-1"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Profile Icon + Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 glass glass-sm flex items-center justify-center hover:glow-coral smooth-transition">
            <User size={20} className="text-pink-400" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 glass glass-sm flex items-center justify-center"
          >
            {mobileOpen ? <X size={20} className="text-lime-400" /> : <Menu size={20} className="text-slate-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass glass-sm border-t border-pink-500/40 p-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onNavigate(item.value)
                setMobileOpen(false)
              }}
              className={`py-2 px-4 rounded-lg smooth-transition ${
                currentPage === item.value ? "bg-lime-400/20 text-lime-300" : "text-slate-300 hover:bg-pink-500/20"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
