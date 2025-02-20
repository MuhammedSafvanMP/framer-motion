import React from 'react'
import { motion } from 'motion/react'

// export default function GesturesAnimations() {
//   return (
//     <motion.div
//     className='w-[100px] h-[100px] bg-amber-300'
//      whileHover={{ scale: 1.2, rotate: 10 }}
//      transition={{ type: "spring", stiffness: 300 }}
//     >

//     </motion.div>
//   )
// }


// export default function GesturesAnimations() {
//   return (
//     <motion.div
//     className='w-[100px] h-[100px] bg-amber-300 cursor-pointer'
//     whileTap={{ scale: 0.8, backgroundColor: "crimson" }}
//     transition={{ type: "spring", stiffness: 300 }}
//     >

//     </motion.div>
//   )
// }

// export default function GesturesAnimations() {
//     return (
//       <motion.div
//       className='w-[100px] h-[100px] bg-amber-300 cursor-pointer'
//        drag
//       >
  
//       </motion.div>
//     )
//   }


export default function GesturesAnimations() {
    return (
      <motion.div
      className='w-[100px] h-[100px] bg-amber-300 cursor-pointer'
       drag dragConstraints = {{
         top: -50,
         left: -50,
         right: 50,
         bottom: 50
       }}
      >
  
      </motion.div>
    )
  }