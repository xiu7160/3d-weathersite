//searchword.js
import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d"

export function Searchword (){

    return(
        <motion.group
            initial={{y:0.35}}
            animate={{y:0.23}}
        >
            <Html
                center
                position={ [0.15, 0.2, 0] }
            >
                <div className="searchName">Search</div>
            </Html>
        </motion.group>
    )
}

/* 위성에 커서 올릴시 search문구를 뜨게하기 위한 페이지 */

// import { Html } from "@react-three/drei";
// import { motion } from "framer-motion-3d"

// export function Searchword (){

//     return(
//         <motion.group
//             initial={{y:0.35}}
//             animate={{y:0.23}}
//         >
//             <Html
//                 center
//                 position={ [0.15, 0.2, 0] }
//             >
//                 <div className="searchName">Search</div>
//             </Html>
//         </motion.group>
//     )
// }

/* 위성에 커서 올릴시 search문구를 뜨게하기 위한 페이지 */