interface RiskLevelIndicatorProps {
  level: "low" | "medium" | "high"
  score: number
}

export default function RiskLevelIndicator({ level, score }: RiskLevelIndicatorProps) {
  const levelConfig = {
    low: {
      color: "from-green-500 to-emerald-500",
      bg: "bg-green-500/10",
      text: "text-green-400",
      label: "Low Risk",
    },
    medium: {
      color: "from-yellow-500 to-orange-500",
      bg: "bg-yellow-500/10",
      text: "text-yellow-400",
      label: "Medium Risk",
    },
    high: {
      color: "from-red-500 to-pink-500",
      bg: "bg-red-500/10",
      text: "text-red-400",
      label: "High Risk",
    },
  }

  const config = levelConfig[level]

  return (
    <div className={`glass ${config.bg} p-6`}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white font-semibold">Financial Health</h4>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.text}`}>{config.label}</span>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-300 text-sm">Risk Score</span>
            <span className={`text-2xl font-bold ${config.text}`}>{score}</span>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r ${config.color} rounded-full`} style={{ width: `${score}%` }} />
          </div>
        </div>

        <p className="text-sm text-slate-400">
          {level === "low" && "Your spending is well within budget. Great job!"}
          {level === "medium" && "Keep an eye on your expenses. Consider reducing discretionary spending."}
          {level === "high" && "Your spending is at risk of exceeding budget. Take action now!"}
        </p>
      </div>
    </div>
  )
}
