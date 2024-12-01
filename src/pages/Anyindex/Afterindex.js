import { Canvas } from "@react-three/fiber";
import AfterScene from "../../components/After/AfterScene";
import AfterLights from "../../components/After/AfterLights";
import { Loader, OrbitControls } from "@react-three/drei";

function Afterindex(){
    return(
        <>
            <Canvas camera={{position: [2, 1, 350]}}>
                <color attach="background" args={["rgb(255, 255, 255)"]}/>
                <AfterLights/>
                <AfterScene/>
                <OrbitControls
                    minAzimuthAngle={-Math.PI / 2}
                    maxAzimuthAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI - Math.PI / 2}
                    minDistance={800}
                    maxDistance={1100}/>
            </Canvas>
            <Loader/>
        </>
    )
}

export default Afterindex;