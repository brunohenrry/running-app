"use client"

import { useEffect, useRef } from "react"

export function WeeklyChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const data = [0.3, 0.5, 0.8, 0.6, 0.4, 0.7, 0.2]
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const width = canvas.offsetWidth
    const height = canvas.offsetHeight - 20
    const barWidth = width / 9
    const spacing = (width - barWidth * 7) / 8

    data.forEach((value, i) => {
      const x = spacing + (barWidth + spacing) * i
      const barHeight = value * height

      ctx.fillStyle = i === 3 ? '#8edf38' : '#2a2930'
      ctx.fillRect(
        x,
        height - barHeight,
        barWidth,
        barHeight
      )

      ctx.fillStyle = '#71717a'
      ctx.font = '10px system-ui'
      ctx.textAlign = 'center'
      ctx.fillText(days[i], x + barWidth / 2, canvas.offsetHeight - 5)
    })
  }, [])

  return <canvas ref={canvasRef} className="w-full h-32" />
}

