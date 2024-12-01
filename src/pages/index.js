import { Canvas } from "@react-three/fiber";
import Scene from "../components/First/Scene";
import React, { Suspense } from "react";
import { Loader, OrbitControls } from "@react-three/drei";
import Lights from "../components/First/Lights"
//import { motion } from "framer-motion-3d"
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedOutlet from "../components/First/AnimatedOutlet";

// function FramerModel(props){
//   return(
//     <motion.mesh {...props}>
//       <cylinderGeometry args={[1,1,2,8]}/>
//       <meshNormalMaterial/>
//     </motion.mesh>
//   )
// }

//rotation={[Math.PI/2,0,1]}

function Home() {
  const location = useLocation()
  return (
    <>
      <Canvas camera={{position: [0, 0, 5], fov: 45}}>
          <color attach="background" args={["rgb(67, 170, 210) 100%)"]}/*web배경색*/ /> 
          <Suspense fallback={'loading'}>
            <Lights/>
            <Scene/>
            {/* <FramerModel/> */}
          </Suspense>
          <OrbitControls
            makeDefault
            enablePan={false}
            minAzimuthAngle={-Math.PI / 3}
            maxAzimuthAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 6}
            minDistance={3}
            maxDistance={9}
            dampingFactor={0.2}/>
      </Canvas>
      <Loader />
      <AnimatePresence>
        <AnimatedOutlet key={location.pathname}/>
        {/*<Outlet key={location.pathname}/>*/}
      </AnimatePresence>
    </>
  );
}

export default Home;