import React from 'react'
import PulsingButton from './components/PulsingButton'
import FlippingCard from './components/FlippingCard'
import BouncingLoader from './components/BouncingLoader'
import GesturesAnimations from './components/GesturesAnimations'

export default function App() {
  return (
    <div className='flex justify-center items-center bg-black w-[100%] h-[100vh]'>
     {/* <PulsingButton /> */}
     {/* <FlippingCard /> */}
     {/* <BouncingLoader /> */}
     <GesturesAnimations />
    </div>
  )
}
