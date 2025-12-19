"use client"

import type React from "react"

import { Upload, File } from "lucide-react"
import { useState, useRef } from "react"

interface FileUploadProps {
  onUpload?: (file: File) => void
}

export default function FileUpload({ onUpload }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      processFile(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      processFile(files[0])
    }
  }

  const processFile = async (file: File) => {
    const validTypes = ["text/plain", "text/csv", "application/json"]
    if (!validTypes.includes(file.type)) {
      alert("Please upload a .txt, .csv, or .json file")
      return
    }

    setIsUploading(true)
    setUploadedFile(file)

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      setUploadProgress(i)
    }

    setIsUploading(false)
    setUploadProgress(0)
    onUpload?.(file)
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`glass border-2 border-dashed p-8 md:p-12 text-center smooth-transition cursor-pointer ${
        isDragging ? "border-blue-400 bg-blue-500/10 glow-blue" : "border-slate-500 hover:border-blue-400"
      }`}
    >
      <input ref={inputRef} type="file" accept=".txt,.csv,.json" onChange={handleFileSelect} className="hidden" />

      {!isUploading && !uploadedFile && (
        <>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Upload size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Drag and drop your file</h3>
          <p className="text-slate-400 mb-4">or click to browse</p>
          <button
            onClick={() => inputRef.current?.click()}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 smooth-transition font-medium"
          >
            Browse Files
          </button>
          <p className="text-sm text-slate-500 mt-4">Supported: .txt, .csv, .json</p>
        </>
      )}

      {isUploading && (
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-full border-4 border-slate-600 border-t-blue-400 animate-spin mx-auto" />
          <p className="text-white font-medium">Uploading... {uploadProgress}%</p>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full smooth-transition"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {uploadedFile && !isUploading && (
        <div className="space-y-3">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <File className="text-green-400" size={24} />
          </div>
          <p className="text-white font-medium">{uploadedFile.name}</p>
          <p className="text-sm text-slate-400">{(uploadedFile.size / 1024).toFixed(2)} KB</p>
          <button
            onClick={() => {
              setUploadedFile(null)
              if (inputRef.current) inputRef.current.value = ""
            }}
            className="text-sm text-blue-400 hover:text-blue-300 mt-2"
          >
            Upload another file
          </button>
        </div>
      )}
    </div>
  )
}
