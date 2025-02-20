import { motion } from 'framer-motion'

export default function PulsingButton() {
  return (
    <motion.button className='cursor-pointer px-4 py-2 text-white bg-blue-500 rounded outlin-none'
    animate = {{ 
        scale: [1,1.1,1],
        backgroundColor: ['#3b82f6', 'royalblue', 'Highlight']
    }}
     transition={{ duration: 0.8, ease: 'easeInOut', repeat: Infinity }}
    >
        Click Me
    </motion.button>
  )
}
