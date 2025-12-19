import { Lightbulb } from "lucide-react"

interface RecommendationCardProps {
  title: string
  description: string
  impact: "high" | "medium" | "low"
}

export default function RecommendationCard({ title, description, impact }: RecommendationCardProps) {
  const impactColor = {
    high: "bg-red-500/20 border-red-500/30 text-red-400",
    medium: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
    low: "bg-blue-500/20 border-blue-500/30 text-blue-400",
  }

  return (
    <div className="glass border border-slate-700 hover:border-blue-500/50 p-4 smooth-transition">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0 mt-1">
          <Lightbulb size={16} className="text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold mb-1">{title}</h4>
          <p className="text-slate-400 text-sm mb-3">{description}</p>
          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${impactColor[impact]}`}>
            {impact === "high" && "High Impact"} {impact === "medium" && "Medium Impact"}{" "}
            {impact === "low" && "Low Impact"}
          </span>
        </div>
      </div>
    </div>
  )
}
