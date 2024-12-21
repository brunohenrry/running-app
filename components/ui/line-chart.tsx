"use client"

import { useEffect, useRef } from "react"

export function LineChart({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Sample data points
    const data = [20, 40, 45, 50, 35, 55, 45, 60, 40]

    // Chart settings
    const padding = 20
    const width = canvas.offsetWidth - padding * 2
    const height = canvas.offsetHeight - padding * 2
    const pointSpacing = width / (data.length - 1)

    // Draw line
    ctx.beginPath()
    ctx.strokeStyle = "#4CD964"
    ctx.lineWidth = 2

    data.forEach((point, i) => {
      const x = padding + i * pointSpacing
      const y = padding + height - (point / 60) * height

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()
  }, [])

  return <canvas ref={canvasRef} className={className} />
}

