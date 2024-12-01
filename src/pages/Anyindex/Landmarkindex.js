import { Canvas } from "@react-three/fiber";
import Lights from "../../components/First/Lights";
import { Loader, OrbitControls } from "@react-three/drei";
import LandmarkScene from "../../components/Landmark/LandMarkScene";

function Landmarkindex(){
    return(
        <>
            <Canvas>
                <color attach="background" args={["rgb(67, 170, 210) 100%)"]}/>
                <Lights/>
                <LandmarkScene/>
                <OrbitControls
                    maxAzimuthAngle={Math.PI / 1}
                    minAzimuthAngle={Math.PI / 3}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI - Math.PI / 2}
                    minDistance={10}
                    maxDistance={40}
                    target={[-15, 2, 0]}/>
            </Canvas>
            <Loader/>
        </>
    )
}

export default Landmarkindex;