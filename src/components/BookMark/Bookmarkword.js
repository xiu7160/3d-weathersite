import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d"

export function Bookmarkword (){

    return(
        <motion.group
            initial={{y:0.35}}
            animate={{y:0.23}}
        >
            <Html
                center
                position={ [-0.07, -0.07, 0] }
            >
                <div className="BookmarkName">
                    5일 동안 날씨
                </div>
            </Html>
        </motion.group>
    )
}