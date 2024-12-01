import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d"

export function CityName (props){
    const { name } = props;

    return(
        <motion.group
            initial={{y:0.35}}
            animate={{y:0.23}}
        >
            <Html
                center
                position={ [0.15, 0.35, 0] }
            >
                <div className="cityName">
                    { name }
                </div>
            </Html>
        </motion.group>
    )
}