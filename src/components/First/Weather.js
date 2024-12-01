import { useFrame, useLoader } from "@react-three/fiber"
import { useMemo, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { motion } from "framer-motion-3d";
import { CityName } from "./CityName";
import { useNavigate } from "react-router-dom";
import { useBodyClass } from "../../utils/hook";


//날씨 3D 아이콘 불러오기
const Weather= (props) => {
    const { position, cityName, weather, rotation } = props;
    const glb = useLoader(GLTFLoader, '/models/weather.glb')
    const ref = useRef(null)
    const [isHover, setHover] = useState(false)
    const navigate = useNavigate()

    const weatherModel = useMemo(()=>{
        const cloneModel = glb.nodes[weather] || glb.nodes.cloud
        return cloneModel.clone();
    },[weather])

    const formatCityName = (name) => {
        return name.replace(/\s/g, '').toLowerCase();
    }

    const onClick = () => {
        navigate(`/${formatCityName(cityName)}`)
    }

    useFrame((_,delta)=>{
        ref.current.rotation.y += delta;
    })

    useBodyClass(isHover, "pointer")

    return(
        <group
            rotation={rotation}
            position={position}
            >
            <motion.mesh
                ref={ref}
                onPointerEnter={()=> setHover(true)}
                onPointerOut={()=> setHover(false)}
                onClick={onClick}
                whileHover={{scale: 1.5, transition:0.5}}
                >
                <primitive object={weatherModel}/>
            </motion.mesh>
            {isHover && <CityName name={cityName}/>}
        </group>
    )
}

export default Weather;