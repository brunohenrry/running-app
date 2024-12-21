import { Home, Activity, User, Settings, Award, Calendar, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ProfileScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0e0d12]">
      <ScrollArea className="flex-1">
        <div className="p-6 space-y-6">
          <h1 className="text-xl font-semibold">Profile</h1>

          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 border-2 border-[#8edf38]">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">Runner</h2>
              <p className="text-zinc-400">Running since 2024</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-[#18171c] p-4 rounded-3xl border-0">
              <div className="text-2xl font-bold">248.5</div>
              <div className="text-sm text-zinc-400">Total Distance (km)</div>
            </Card>
            <Card className="bg-[#18171c] p-4 rounded-3xl border-0">
              <div className="text-2xl font-bold">48</div>
              <div className="text-sm text-zinc-400">Total Activities</div>
            </Card>
          </div>

          <div className="space-y-3">
            <Card className="bg-[#18171c] rounded-3xl border-0 overflow-hidden">
              <Button variant="ghost" className="w-full flex items-center justify-between p-4 hover:bg-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#8edf38]/20 rounded-full">
                    <Award className="w-5 h-5 text-[#8edf38]" />
                  </div>
                  <span>Achievements</span>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400" />
              </Button>
            </Card>
            
            <Card className="bg-[#18171c] rounded-3xl border-0 overflow-hidden">
              <Button variant="ghost" className="w-full flex items-center justify-between p-4 hover:bg-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#8edf38]/20 rounded-full">
                    <Calendar className="w-5 h-5 text-[#8edf38]" />
                  </div>
                  <span>History</span>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400" />
              </Button>
            </Card>

            <Card className="bg-[#18171c] rounded-3xl border-0 overflow-hidden">
              <Button variant="ghost" className="w-full flex items-center justify-between p-4 hover:bg-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#8edf38]/20 rounded-full">
                    <Settings className="w-5 h-5 text-[#8edf38]" />
                  </div>
                  <span>Settings</span>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400" />
              </Button>
            </Card>
          </div>
        </div>
      </ScrollArea>

      <div className="bg-[#18171c] border-t border-zinc-800/50">
        <nav className="flex justify-around items-center px-6 py-4">
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1.5"
            onClick={() => document.querySelector('[value="home"]')?.click()}
          >
            <Home className="w-6 h-6 text-zinc-500" />
            <span className="text-xs text-zinc-500">Home</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1.5"
            onClick={() => document.querySelector('[value="run"]')?.click()}
          >
            <Activity className="w-6 h-6 text-zinc-500" />
            <span className="text-xs text-zinc-500">Let's Run</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1.5">
            <User className="w-6 h-6 text-[#8edf38]" />
            <span className="text-xs text-[#8edf38]">Me</span>
          </Button>
        </nav>
      </div>
    </div>
  )
}

