//village 페이지에서 뒤로가기 버튼
import React, { useEffect, useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { motion } from 'framer-motion-3d';
import { useNavigate } from 'react-router-dom';
import { useBodyClass } from '../../utils/hook';
import { VillageBackBtnword } from './VillageBackBtnword';

const VillageBackBtn = ({rotation = [0, 0, 0]}) => {
    const glb = useLoader(GLTFLoader, '/models/back.glb');
    const buttonRef = useRef();
    const [isHover, setHover] = useState(false); // 초기 상태를 false로 변경
    const navigate = useNavigate();

    useEffect(() => {
        glb.scene.traverse((child) => {
            if (child.isMesh) {
                child.scale.set(4, 1.7, 1.9);
            }
        });

        // setInterval 부분 제거
    }, [glb.scene]);

    const onClick = () => {
        navigate('/');
    };
    useBodyClass(isHover, 'pointer');
    
    return (
        <group position={[-27, 13, 15]} rotation={rotation}>
            <motion.mesh
                ref={buttonRef}
                onPointerEnter={() => setHover(true)} // 마우스를 가져다 대면 isHover를 true로 설정
                onPointerOut={() => setHover(false)} // 마우스를 떼면 isHover를 false로 설정
                onClick={onClick}
                whileHover={{ scale: 1.4, transition: { duration: 0.5 }}}
                // animate={{  y: isHover ? 0.02 : 0, transition: { duration: 1.2 }}} /* 둥둥뜬 모션 추가 */
            >
                <primitive object={glb.scene} />
            </motion.mesh>
            {isHover && <VillageBackBtnword/>} // isHover가 true일 때만 VillageBackBtnword를 렌더링
        </group>
    );
};

export default VillageBackBtn;
