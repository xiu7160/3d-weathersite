import { useLoader } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useBodyClass } from "../../utils/hook"

const After = () =>{
    //오후 건물 가져올 거 onestar없애고 파일 이름 넣으면 됨
    const glb = useLoader(GLTFLoader, '/models/onestar.glb')
    const ref = useRef(null)
    const [isHover, setHover] = useState(false);
    
    useEffect(() => {
        glb.scene.traverse((child) => {
            if (child.isMesh) {
                child.scale.set(3, 3, 3);
            }
        });
    }, [glb.scene]);

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

export default After;