'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

const HomeScreen = dynamic(() => import("./screens/home-screen"), { ssr: false })
const RunScreen = dynamic(() => import("./screens/run-screen"), { ssr: false })
const ProfileScreen = dynamic(() => import("./screens/profile-screen"), { ssr: false })
const OnboardingScreen = dynamic(() => import("./screens/onboarding-screen"), { ssr: false })

export default function RunningApp() {
  const [currentScreen, setCurrentScreen] = useState('onboarding')

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen onNavigate={setCurrentScreen} />
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />
      case 'run':
        return <RunScreen onNavigate={setCurrentScreen} />
      case 'profile':
        return <ProfileScreen onNavigate={setCurrentScreen} />
      default:
        return <OnboardingScreen onNavigate={setCurrentScreen} />
    }
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-[#0e0d12] text-white overflow-hidden">
      {renderScreen()}
    </div>
  )
}

