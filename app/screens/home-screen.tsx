"use client"

import { Home, Activity, User } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WeeklyChart } from "@/components/ui/weekly-chart"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dispatch, SetStateAction } from 'react'

interface HomeScreenProps {
  onNavigate: Dispatch<SetStateAction<string>>;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="flex flex-col h-full bg-[#0e0d12]">
      <ScrollArea className="flex-1">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-zinc-400">Good work for today 🔥</h2>
              <h1 className="text-2xl font-bold">Run Your Way</h1>
            </div>
            <Avatar className="w-12 h-12 border-2 border-[#8edf38]">
              <AvatarImage src="/profile.jpg" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
          </div>

          <Card className="bg-gradient-to-br from-[#8edf38] to-[#7bc72f] p-6 rounded-3xl border-0 relative overflow-hidden group hover:shadow-lg hover:shadow-[#8edf38]/20 transition-all duration-500">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-white">Your Distance</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">10.24</span>
                <span className="text-xl text-white/80">km</span>
              </div>
              <div className="mt-2 text-white/80 text-sm">
                Increase 5.4% ↗
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-[#18171c] p-4 rounded-3xl border-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-[#8edf38]/20 rounded-full">
                  <Activity className="w-4 h-4 text-[#8edf38]" />
                </div>
                <span className="text-sm text-white">Daily Steps</span>
              </div>
              <div className="text-2xl font-bold text-white">8,451</div>
              <div className="text-sm text-zinc-400">steps</div>
            </Card>

            <Card className="bg-[#18171c] p-4 rounded-3xl border-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-[#8edf38]/20 rounded-full">
                  <svg className="w-4 h-4 text-[#8edf38]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <span className="text-sm text-white">Heart Rate</span>
              </div>
              <div className="text-2xl font-bold text-white">124</div>
              <div className="text-sm text-zinc-400">bpm</div>
            </Card>
          </div>

          <Card className="bg-[#18171c] p-4 rounded-3xl border-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-[#8edf38]/20 rounded-full">
                <Activity className="w-4 h-4 text-[#8edf38]" />
              </div>
              <span className="text-sm text-white">Calories Burnt</span>
              <span className="ml-auto text-sm text-[#8edf38]">580 kcal</span>
            </div>
            <WeeklyChart />
          </Card>

          <Card className="bg-[#18171c] p-4 rounded-3xl border-0">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activities</h3>
            <ul className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#8edf38]/20 rounded-full">
                      <Activity className="w-4 h-4 text-[#8edf38]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Morning Run</p>
                      <p className="text-sm text-zinc-400">5.2 km • 28:35</p>
                    </div>
                  </div>
                  <span className="text-sm text-zinc-400">2d ago</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </ScrollArea>

      <div className="bg-[#18171c] border-t border-zinc-800/50">
        <nav className="flex justify-around items-center px-6 py-4">
          <Button variant="ghost" className="flex flex-col items-center gap-1.5">
            <Home className="w-6 h-6 text-[#8edf38]" />
            <span className="text-xs text-[#8edf38]">Home</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1.5"
            onClick={() => onNavigate('run')}
          >
            <Activity className="w-6 h-6 text-zinc-500" />
            <span className="text-xs text-zinc-500">Let's Run</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1.5"
            onClick={() => onNavigate('profile')}
          >
            <User className="w-6 h-6 text-zinc-500" />
            <span className="text-xs text-zinc-500">Me</span>
          </Button>
        </nav>
      </div>
    </div>
  )
}
