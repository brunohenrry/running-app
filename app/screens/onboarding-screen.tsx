"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dispatch, SetStateAction } from 'react'

interface OnboardingScreenProps {
  onNavigate: Dispatch<SetStateAction<string>>;
}

export default function OnboardingScreen({ onNavigate }: OnboardingScreenProps) {
  return (
    <div className="h-full relative bg-black">
      <Image
        src="/run.jpg"
        alt="Runners"
        fill
        className="object-cover opacity-90"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold text-white">
            Connect with a Community of Runners
          </h1>
          <p className="text-zinc-400 text-sm">
            Join a global network of runners and share your achievements. Challenge friends, participate in virtual races, and celebrate your progress together.
          </p>
        </div>

        <Button 
          className="w-full h-14 bg-[#8edf38] hover:bg-[#7bc72f] text-black font-medium rounded-full text-base"
          onClick={() => onNavigate('home')}
        >
          Get Started
        </Button>

        <div className="text-sm text-center text-zinc-400">
          Already have an account?{" "}
          <Button variant="link" className="text-[#8edf38] p-0">
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}
