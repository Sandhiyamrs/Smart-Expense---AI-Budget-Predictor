"use client"

import { motion } from "framer-motion"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import PredictionAlert from "@/components/prediction-alert"
import RiskLevelIndicator from "@/components/risk-level-indicator"
import RecommendationCard from "@/components/recommendation-card"

// Mock data
const forecastData = [
  { day: "Today", amount: 45 },
  { day: "Day 2", amount: 52 },
  { day: "Day 3", amount: 48 },
  { day: "Day 4", amount: 61 },
  { day: "Day 5", amount: 55 },
  { day: "Day 6", amount: 72 },
  { day: "Day 7", amount: 68 },
]

const categoryForecast = [
  { category: "Food", current: 35, forecast: 42 },
  { category: "Transport", current: 20, forecast: 18 },
  { category: "Shopping", current: 25, forecast: 30 },
  { category: "Bills", current: 20, forecast: 20 },
]

export default function Prediction() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.div className="max-w-7xl mx-auto space-y-8" variants={containerVariants} initial="hidden" animate="visible">
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Budget{" "}
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Prediction</span>
        </h2>
        <p className="text-slate-400">AI-powered forecasts for your next 30 days</p>
      </motion.div>

      {/* Alert */}
      <motion.div variants={itemVariants}>
        <PredictionAlert
          status="danger"
          message="Based on your spending patterns, you will exceed your budget by $200 if you continue at the current rate."
          date="Projected: June 28, 2024"
        />
      </motion.div>

      {/* Main Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Risk Level */}
        <motion.div variants={itemVariants}>
          <RiskLevelIndicator level="high" score={72} />
        </motion.div>

        {/* Forecast Chart */}
        <motion.div variants={itemVariants} className="lg:col-span-2 glass p-6">
          <h3 className="text-white font-semibold mb-4">7-Day Spending Forecast</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                }}
              />
              <Area type="monotone" dataKey="amount" fill="#0ea5e9" stroke="#10b981" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>

      {/* Category Forecast */}
      <motion.div variants={itemVariants} className="glass p-6">
        <h3 className="text-white font-semibold mb-6">Category-wise Forecast</h3>
        <div className="space-y-4">
          {categoryForecast.map((item) => (
            <div key={item.category} className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300 font-medium">{item.category}</span>
                <span className="text-white font-bold">
                  ${item.current} → ${item.forecast}
                </span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${(item.current / 50) * 100}%` }} />
                </div>
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500" style={{ width: `${(item.forecast / 50) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recommendations */}
      <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
        <h3 className="text-white font-semibold text-lg">Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={itemVariants}>
            <RecommendationCard
              title="Reduce Food Expenses"
              description="Your food spending has increased 20% this month. Try meal planning to save up to $200."
              impact="high"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <RecommendationCard
              title="Track Daily Spending"
              description="Setting daily limits will help you stay within budget. Aim for $285 per day max."
              impact="high"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <RecommendationCard
              title="Lower Shopping Costs"
              description="Shopping expenses are 25% above average. Consider using coupons and comparing prices."
              impact="medium"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <RecommendationCard
              title="Automate Bill Payments"
              description="Set up automatic payments for bills to ensure consistency and avoid late fees."
              impact="low"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
