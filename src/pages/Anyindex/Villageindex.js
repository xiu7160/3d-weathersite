import { Canvas } from "@react-three/fiber";
import VillageScene from "../../components/Village/VillageScene";
import VillageLights from "../../components/Village/VillageLights";
import { Loader, OrbitControls } from "@react-three/drei";

function Villageindex(){
    return(
        <>
            <Canvas camera={{position: [2, 1, 35]}}>
                <color attach="background" args={["rgba(4, 0, 36, 0.897)"]}></color>
                <VillageLights/>
                <VillageScene/>
                <OrbitControls
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI - Math.PI / 2}
                    minDistance={25}
                    maxDistance={50}/>
            </Canvas>
            <Loader/>
        </>
    )
}

export default Villageindex;