import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d"

export function Temperatureword (){

    return(
        <motion.group
            initial={{y:0.45}}
            animate={{y:0.23}}
        >
            <Html
                center
                position={ [0, -1.5, 0] }
            >
                <div className="avgName">
                    연간 평균 기온
                </div>
            </Html>
        </motion.group>
    )
}