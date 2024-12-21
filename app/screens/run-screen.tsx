"use client"

import { ChevronLeft, Activity, Play, Pause, RotateCcw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { Dispatch, SetStateAction } from 'react'

const MapComponent = dynamic(() => import('@/components/map-component'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#18171c] flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8edf38]"></div>
    </div>
  ),
})

interface RunScreenProps {
  onNavigate: Dispatch<SetStateAction<string>>;
}

export default function RunScreen({ onNavigate }: RunScreenProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(0)
  const [steps, setSteps] = useState(0)
  const [calories, setCalories] = useState(0)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const startRun = () => {
    setIsRunning(true)
  }

  const pauseRun = () => {
    setIsRunning(false)
  }

  const restartRun = () => {
    setIsRunning(false)
    setTime(0)
    setSteps(0)
    setCalories(0)
  }

  const updateStats = useCallback(() => {
    setTime(prevTime => prevTime + 1)
    setSteps(prevSteps => prevSteps + Math.floor(Math.random() * 3) + 1)
    setCalories(prevCalories => prevCalories + Math.floor(Math.random() * 2) + 1)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(updateStats, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, updateStats])

  return (
    <div className="flex flex-col h-full bg-[#0e0d12] relative">
      {/* Map as background */}
      <div className="absolute inset-0 z-0">
        <MapComponent isRunning={isRunning} />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top section */}
        <div className="p-6 flex justify-between items-start">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm"
            onClick={() => onNavigate('home')}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm p-2 pr-4 rounded-full">
            <div className="bg-[#8edf38] p-2 rounded-full">
              <Activity className="w-4 h-4 text-black" />
            </div>
            <div className="space-y-0.5">
              <div className="text-sm text-white">6 Run Streak</div>
              <div className="text-xs text-zinc-400">4 more runs to 10 run streak</div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-auto p-6">
          <Card className="bg-black/60 backdrop-blur-sm rounded-3xl border-0">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-[#8edf38] rounded-full"></div>
                  <span className="text-white">Run/Walk</span>
                  <span className="text-xs text-[#8edf38] bg-[#8edf38]/20 px-2 py-1 rounded-full">
                    {isRunning ? 'In Progress' : 'Ready'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-2xl font-bold text-white">{steps}</div>
                  <div className="text-zinc-400 text-sm">Steps</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{formatTime(time)}</div>
                  <div className="text-zinc-400 text-sm">Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{calories}</div>
                  <div className="text-zinc-400 text-sm">Calories</div>
                </div>
              </div>

              <div className="flex justify-center gap-6">
                <Button 
                  onClick={isRunning ? pauseRun : startRun}
                  className="w-16 h-16 rounded-full bg-[#8edf38] hover:bg-[#7bc72f] text-black"
                >
                  {isRunning ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-1" />
                  )}
                </Button>
                <Button 
                  variant="outline"
                  className="w-16 h-16 rounded-full border-zinc-700 hover:border-[#8edf38] hover:text-[#8edf38]"
                  onClick={restartRun}
                >
                  <RotateCcw className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
