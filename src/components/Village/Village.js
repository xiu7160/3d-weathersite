import { useLoader } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useBodyClass } from "../../utils/hook"

const Village = () =>{
    const glb = useLoader(GLTFLoader, '/models/lighthouse__village_-_lowpoly_scene.glb')
    const ref = useRef(null)
    const [isHover, setHover] = useState(false);
    
    useBodyClass(isHover, "drag")

    return(
        <group position={[4.5, -6, 4]} rotation-y={-Math.PI/4.5}> 
            <mesh
                onPointerEnter={()=> setHover(true)}
                onPointerOut={()=> setHover(false)}
                scale={1.2}ref={ref}>
                <primitive object={glb.scene}/>
            </mesh>
        </group>
    )
}

export default Village;