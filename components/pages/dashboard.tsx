"use client"

import { TrendingUp, DollarSign, Target, Zap } from "lucide-react"
import SummaryCard from "@/components/summary-card"
import FileUpload from "@/components/file-upload"
import PredictionAlert from "@/components/prediction-alert"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { motion } from "framer-motion"
import AnimatedCounter from "@/components/animated-counter"

// Mock data
const dailySpendingData = [
  { date: "Mon", amount: 45 },
  { date: "Tue", amount: 52 },
  { date: "Wed", amount: 38 },
  { date: "Thu", amount: 61 },
  { date: "Fri", amount: 55 },
  { date: "Sat", amount: 72 },
  { date: "Sun", amount: 48 },
]

const monthlyComparison = [
  { month: "Jan", amount: 1200 },
  { month: "Feb", amount: 1450 },
  { month: "Mar", amount: 1300 },
  { month: "Apr", amount: 1600 },
  { month: "May", amount: 1400 },
  { month: "Jun", amount: 1550 },
]

const categoryDistribution = [
  { name: "Food", value: 35, color: "#10b981" },
  { name: "Transport", value: 20, color: "#0ea5e9" },
  { name: "Shopping", value: 25, color: "#a78bfa" },
  { name: "Bills", value: 20, color: "#f59e0b" },
]

export default function Dashboard() {
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
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            SmartExpense
          </span>
        </h2>
        <p className="text-slate-400">Track, predict, and optimize your spending with AI-powered insights</p>
      </motion.div>

      {/* File Upload */}
      <motion.div variants={itemVariants}>
        <FileUpload />
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <SummaryCard
            title="Total Spent"
            value={<AnimatedCounter end={8500} prefix="$" />}
            icon={<DollarSign size={24} />}
            color="blue"
            trend={{ value: 12, isPositive: false }}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <SummaryCard
            title="Monthly Budget"
            value={<AnimatedCounter end={10000} prefix="$" />}
            icon={<Target size={24} />}
            color="green"
            trend={{ value: 8, isPositive: true }}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <SummaryCard
            title="Remaining"
            value={<AnimatedCounter end={1500} prefix="$" />}
            icon={<TrendingUp size={24} />}
            color="purple"
            trend={{ value: 5, isPositive: true }}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <SummaryCard
            title="Daily Average"
            value={<AnimatedCounter end={318} prefix="$" />}
            icon={<Zap size={24} />}
            color="orange"
            trend={{ value: 3, isPositive: false }}
          />
        </motion.div>
      </motion.div>

      {/* Prediction Alert */}
      <motion.div variants={itemVariants}>
        <PredictionAlert
          status="warning"
          message="Your spending is trending 15% above budget. Consider reducing discretionary expenses."
          date="Projected: June 25, 2024"
        />
      </motion.div>

      {/* Charts Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Line Chart */}
        <motion.div variants={itemVariants} className="glass p-6">
          <h3 className="text-white font-semibold mb-4">Daily Spending Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailySpendingData}>
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
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: "#10b981", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Bar Chart */}
        <motion.div variants={itemVariants} className="glass p-6">
          <h3 className="text-white font-semibold mb-4">Monthly Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyComparison}>
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
              <Bar dataKey="amount" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>

      {/* Pie Chart */}
      <motion.div variants={itemVariants} className="glass p-6">
        <h3 className="text-white font-semibold mb-4">Category Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryDistribution}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, value }) => `${name} ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {categoryDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #475569",
                borderRadius: "8px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  )
}
