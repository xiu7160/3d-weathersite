import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d"

export function VillageBackBtnword (){

    return(
        <motion.group
            initial={{y:0.35}}
            animate={{y:0.23}}
        >
            <Html
                center
                position={ [3, 1.5, 0] }
            >
                <div className="vbackbtn">
                    뒤로 가기
                </div>
            </Html>
        </motion.group>
    )
}