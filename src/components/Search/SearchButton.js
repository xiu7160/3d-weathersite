import React, { useEffect, useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { motion } from 'framer-motion-3d';
import { useNavigate } from 'react-router-dom';
import { useBodyClass } from '../../utils/hook';
import { Searchword } from './Searchword';

const SearchButton = ({ bookmarkedCitiesCount, rotation }) => {
    const glb = useLoader(GLTFLoader, '/models/Satellite.glb');
    const buttonRef = useRef();
    const [isHover, setHover] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        glb.scene.traverse((child) => {
            if (child.isMesh) {
                child.scale.set(0.2, 0.2, 0.2);
            }
        });

        const interval = setInterval(() => {
            setHover((prevHover) => !prevHover);
        }, 2500);

        return () => clearInterval(interval);
    }, [glb.scene]);

    const onClick = () => {
        navigate('/searchpage');
    };
    useBodyClass(isHover, 'pointer');

    // 즐겨찾기된 도시의 개수에 따라 위치를 동적으로 조정
    const position = bookmarkedCitiesCount >= 3 ? [-2.3, 0.1, 0.75] : [-2.3, -0.75, 0.75];
    console.log('bookmarkedCitiesCount :', bookmarkedCitiesCount)

    return (
        <group position={position} rotation={rotation}>
            <motion.mesh
                ref={buttonRef}
                onPointerEnter={() => setHover(true)}
                onPointerOut={() => setHover(true)}
                onClick={onClick}
                whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                animate={{  y: isHover ? 0.04 : 0, transition: { duration: 1.2 } }}
            >
                <primitive object={glb.scene} />
            </motion.mesh>
            {/* {isHover && <Searchword />} */}
            <Searchword />
        </group>
    );
};

export default SearchButton;