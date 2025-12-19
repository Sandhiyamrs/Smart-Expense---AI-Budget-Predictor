"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import FileUpload from "@/components/file-upload"
import { Check } from "lucide-react"

// Mock parsed expense data
const mockExpenseData = [
  { date: "2024-06-20", category: "Food", amount: 45.5, description: "Grocery shopping" },
  { date: "2024-06-20", category: "Transport", amount: 15.0, description: "Uber ride" },
  { date: "2024-06-21", category: "Food", amount: 32.25, description: "Restaurant" },
  { date: "2024-06-21", category: "Shopping", amount: 89.99, description: "Clothing" },
  { date: "2024-06-22", category: "Bills", amount: 125.0, description: "Electric bill" },
  { date: "2024-06-22", category: "Food", amount: 28.75, description: "Coffee shop" },
]

const categories = ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Other"]
const categoryColors = {
  Food: "bg-green-500/20 text-green-300 border-green-500/30",
  Transport: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Shopping: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Bills: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Entertainment: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Other: "bg-slate-500/20 text-slate-300 border-slate-500/30",
}

export default function Upload() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [filterCategory, setFilterCategory] = useState<string | null>(null)
  const [filterDate, setFilterDate] = useState<string>("")
  const [filterAmount, setFilterAmount] = useState<string>("")

  const handleUpload = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const filteredData = mockExpenseData.filter((item) => {
    if (filterCategory && item.category !== filterCategory) return false
    if (filterDate && item.date !== filterDate) return false
    if (filterAmount && item.amount !== Number.parseFloat(filterAmount)) return false
    return true
  })

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
          Upload{" "}
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Expenses</span>
        </h2>
        <p className="text-slate-400">Import your bank statements or expense logs for analysis</p>
      </motion.div>

      {/* Upload Box */}
      <motion.div variants={itemVariants}>
        <FileUpload onUpload={handleUpload} />
      </motion.div>

      {/* Success Toast */}
      {showSuccess && (
        <motion.div
          className="fixed bottom-4 right-4 glass border border-green-500/30 p-4 flex items-center gap-3 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
            <Check size={16} className="text-green-400" />
          </div>
          <p className="text-green-300">File uploaded successfully!</p>
        </motion.div>
      )}

      {/* Filters */}
      <motion.div variants={itemVariants} className="glass p-6 space-y-4">
        <h3 className="text-white font-semibold mb-4">Filter Expenses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Category</label>
            <select
              value={filterCategory || ""}
              onChange={(e) => setFilterCategory(e.target.value || null)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg text-white p-2"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Date</label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg text-white p-2"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">Amount</label>
            <input
              type="number"
              value={filterAmount}
              onChange={(e) => setFilterAmount(e.target.value)}
              placeholder="Search amount"
              className="w-full bg-slate-800 border border-slate-600 rounded-lg text-white p-2"
            />
          </div>
        </div>
      </motion.div>

      {/* Expense Table */}
      <motion.div variants={itemVariants} className="glass p-6 overflow-x-auto">
        <h3 className="text-white font-semibold mb-4">Parsed Expenses ({filteredData.length})</h3>
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-slate-300 font-medium">Date</th>
              <th className="text-left py-3 px-4 text-slate-300 font-medium">Category</th>
              <th className="text-left py-3 px-4 text-slate-300 font-medium">Description</th>
              <th className="text-right py-3 px-4 text-slate-300 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <motion.tr
                key={index}
                className="border-b border-slate-800 hover:bg-slate-800/30 smooth-transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <td className="py-3 px-4 text-white">{item.date}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${
                      categoryColors[item.category as keyof typeof categoryColors]
                    }`}
                  >
                    {item.category}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-300">{item.description}</td>
                <td className="py-3 px-4 text-right text-white font-semibold">${item.amount.toFixed(2)}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="glass p-4">
          <p className="text-slate-400 text-sm mb-2">Total Expenses</p>
          <p className="text-3xl font-bold text-white">
            ${filteredData.reduce((sum, item) => sum + item.amount, 0).toFixed(2)}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass p-4">
          <p className="text-slate-400 text-sm mb-2">Average Expense</p>
          <p className="text-3xl font-bold text-white">
            ${(filteredData.reduce((sum, item) => sum + item.amount, 0) / filteredData.length).toFixed(2)}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass p-4">
          <p className="text-slate-400 text-sm mb-2">Total Transactions</p>
          <p className="text-3xl font-bold text-white">{filteredData.length}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
