// import { motion } from "framer-motion";  // use framer-motion instead of motion/react
// import { useState } from "react";

// export default function FlippingCard() {
//   const [flipped, setFlipped] = useState(false);

//   const variants = {
//     front: { rotateY: 0 },
//     back: { rotateY: 180 }
//   };

//   return (
//     <div>
//       <motion.div
//         onClick={() => setFlipped(prevFlipped => !prevFlipped)}
//         classNameName="w-48 h-64 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
//         style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
//       >
//         <motion.div
//           variants={variants}
//           initial="front"
//           animate={flipped ? 'back' : 'front'}
//           transition={{ duration: 0.8 }}
//           classNameName="absolute inset-0 bg-white flex items-center justify-center text-xl font-bold"
//         >
//           Front Side
//         </motion.div>

//         <motion.div
//           classNameName="absolute inset-0 bg-blue-500 flex items-center justify-center text-xl font-bold"
//           variants={variants}
//           initial="back"
//           animate={flipped ? 'front' : 'back'}
//           transition={{ duration: 0.8 }}
//           style={{ rotateY: 180 }}
//         >
//           Back Side
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }



import { motion } from "framer-motion";
import { useState } from "react";

export default function FlippingCard() {
  const [flipped, setFlipped] = useState(false);

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md cursor-pointer" >
      <motion.div
        onClick={() => setFlipped(!flipped)}
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        animate={flipped ? 'back' : 'front'}
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full object-cover"
          alt="product image"
          initial="front"
          animate={flipped ? 'back' : 'front'}
        />
        <motion.div
          className="absolute  flex items-center justify-center bg-blue-500 text-xl font-bold text-white"
          initial="back"
          animate={flipped ? 'front' : 'back'}
          style={{ rotateY: 180 }}
        >
          <img 
            className="object-cover"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
          />
        </motion.div>
      </motion.div>

      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">$449</span>
            <span className="text-sm text-slate-900 line-through">$699</span>
          </p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
          </div>
        </div>
        <a className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-blue-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to cart
        </a>
      </div>
    </div>
  );
}

