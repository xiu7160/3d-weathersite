import { Canvas } from "@react-three/fiber";
import Lights from "../../components/First/Lights";
import LandmarkScene from "../../components/Landmark/LandMarkScene";
import { Loader, OrbitControls, Sparkles } from "@react-three/drei";
import LandmarkLights from "../../components/Landmark/LandmarkLights";


function SeoulLandmark(){
    const cityName = "Seoul"; // 도시 이름 설정

    return(
        <>
            <Canvas style={{ zIndex: 0 }}>
                <color attach="background" args={["rgb(67, 170, 210) 100%)"]}/>
                <LandmarkLights/>
                <LandmarkScene cityName={cityName} /> {/* 도시 이름을 props로 전달 */}
                <Sparkles position={[-8, 2, 8]} count={70} scale={5} size={4} speed={0.4} opacity={0.5}/>
                <OrbitControls
                    maxAzimuthAngle={Math.PI / 1}
                    minAzimuthAngle={Math.PI / 3}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI - Math.PI / 2}
                    minDistance={10}
                    maxDistance={40}
                    enableRotate={false}
                    enableZoom={false}
                    target={[-15, 2, 0]}/>
            </Canvas>
            <Loader/>
        </>
    )
}

export default SeoulLandmark;
