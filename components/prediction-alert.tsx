import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react"

interface PredictionAlertProps {
  status: "safe" | "warning" | "danger"
  message: string
  date?: string
}

export default function PredictionAlert({ status, message, date }: PredictionAlertProps) {
  const statusConfig = {
    safe: {
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      icon: CheckCircle,
      color: "text-green-400",
      badge: "bg-green-500/20 text-green-300",
    },
    warning: {
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      icon: AlertCircle,
      color: "text-yellow-400",
      badge: "bg-yellow-500/20 text-yellow-300",
    },
    danger: {
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      icon: AlertTriangle,
      color: "text-red-400",
      badge: "bg-red-500/20 text-red-300",
    },
  }

  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <div className={`glass ${config.bg} border ${config.border} p-6`}>
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0`}>
          <Icon size={24} className={config.color} />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold mb-2">Budget Alert</h3>
          <p className="text-slate-300 mb-3">{message}</p>
          {date && <div className={`inline-block px-3 py-1 rounded-full text-sm ${config.badge}`}>{date}</div>}
        </div>
      </div>
    </div>
  )
}
