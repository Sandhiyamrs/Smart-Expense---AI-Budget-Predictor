import type { ReactNode } from "react"

interface SummaryCardProps {
  title: string
  value: string | number
  icon: ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  color?: "coral" | "orange" | "amber" | "warm"
}

export default function SummaryCard({ title, value, icon, trend, color = "coral" }: SummaryCardProps) {
  /* Updated color classes to use hot pink and electric lime */
  const colorClasses = {
    coral: "glow-coral border-pink-400/50",
    orange: "glow-lime border-lime-400/40",
    amber: "glow-lime border-lime-400/30",
    warm: "border-pink-400/30",
  }

  const trendColors = {
    coral: "text-pink-400",
    orange: "text-lime-400",
    amber: "text-lime-400",
    warm: "text-pink-400",
  }

  const iconBgColors = {
    coral: "bg-pink-500/20",
    orange: "bg-lime-500/20",
    amber: "bg-lime-500/15",
    warm: "bg-pink-500/20",
  }

  return (
    <div className={`glass ${colorClasses[color]} p-6 hover:shadow-xl smooth-transition`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-slate-300 text-sm font-medium">{title}</h3>
        <div
          className={`w-10 h-10 rounded-lg ${iconBgColors[color]} flex items-center justify-center ${trendColors[color]}`}
        >
          {icon}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-3xl font-bold text-white">{value}</p>
        {trend && (
          <p className={`text-sm ${trend.isPositive ? "text-lime-400" : "text-red-400"}`}>
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}% from last month
          </p>
        )}
      </div>
    </div>
  )
}
