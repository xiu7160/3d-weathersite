import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useBodyClass } from "../../utils/hook"
import { Sparkles } from "@react-three/drei"

const Earth = () =>{
    const glb = useLoader(GLTFLoader, '/models/planet_earth.glb')
    const ref = useRef(null)
    const [isHover, setHover] = useState(false);

    useFrame((_, delta)=>{
        ref.current.rotation.y += delta * 0.1
    })

    useBodyClass(isHover, "drag")

    return( //rotation-x={-Math.PI/2} 쓰면 지구가 북극이 내 쪽을 향해서 비추
        <group position={[0, -3.2, 0]}/*지구위치조절 초기값position={[0, -2.5, 0]}*/> 
            <Sparkles position={[0.2, 1.8, 0.3]} count={80} scale={2.8} size={5} speed={0.4} opacity={0.5}/>
            <mesh
                onPointerEnter={()=> setHover(true)}
                onPointerOut={()=> setHover(false)}
                scale={1.2} /* 지구 크기 초기값 {1.5} */ ref={ref}>
                <primitive object={glb.scene}/>
            </mesh>
        </group>
        
    )
}

export default Earth;

//rotation-icon 쓰는게 있는데 내가 보기엔 별로라서 뺌