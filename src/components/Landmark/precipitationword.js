import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d"

export function Precipitationword (){

    return(
        <motion.group
            initial={{y:0.45}}
            animate={{y:0.23}}
        >
            <Html
                center
                position={ [0, -2.1, 0] }
            >
                <div className="avgName">
                    연간 강수량
                </div>
            </Html>
        </motion.group>
    )
}