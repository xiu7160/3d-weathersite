//BookmarkButton.js
import { useLoader } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { motion } from 'framer-motion-3d';
import { useNavigate } from 'react-router-dom';
import { useBodyClass } from '../../utils/hook';
import { Bookmarkword } from './Bookmarkword';

const BookmarkButton = (props) => {
    const glb = useLoader(GLTFLoader, '/models/mystar.glb');
    const buttonRef = useRef();
    const [isHover, setHover] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        glb.scene.traverse((child) => {
            if (child.isMesh) {
                child.scale.set(0.47, 0.47, 0.5);
            }
        });

        // const interval = setInterval(() => {
        //     setHover((prevHover) => !prevHover); // 매 초마다 hover 상태를 토글, 해제시 문구가 매초마다뜸 (+ clearInterval(interval);이것도 return부분수정)
        // }, 1000);

        return () => clearInterval(); // 컴포넌트 언마운트 시 clearInterval 호출
    }, [glb.scene]);

    const onClick = () => {
        navigate('/Village');
    };
    useBodyClass(isHover, 'pointer');

    return (
        <group position={[2.4, -0.45, 0.1]} rotation={props.rotation}>
            <motion.mesh
                ref={buttonRef}
                onPointerEnter={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                onClick={onClick}
                whileHover={{ scale: 1.4, transition: { duration: 0.5 }}}
                animate={{  y: isHover ? 0.02 : 0, transition: { duration: 1.2 }}} /* 둥둥뜬 모션 추가 */
            >
                <primitive object={glb.scene} />
            </motion.mesh>
            {isHover && <Bookmarkword />}
        </group>
    );
};

export default BookmarkButton;