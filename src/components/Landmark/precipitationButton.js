import { useEffect, useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { motion } from 'framer-motion-3d';
import { useBodyClass } from '../../utils/hook';
import LandmarkModal from './LandmarkModal';
import { Precipitationword } from './precipitationword';

const PrecipitationButton = ({ cityName }) => {
    const glb = useLoader(GLTFLoader, '/models/umbrella.glb');
    const buttonRef = useRef();
    const [isHover, setHover] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        glb.scene.traverse((child) => {
            if (child.isMesh) {
                child.scale.set(4, 4, 4);
            }
        });
    }, [glb.scene]);

    const openModal = () => {
        console.log("Opening modal");
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useBodyClass(isHover, 'pointer');

    const getImageSource = () => {
        switch (cityName) {
            case 'Seoul':
                return '/yeargraph/Seoulrain.png';
            case 'New York':
                return '/yeargraph/NewYorkrain.png';
            case 'Dubai':
                return '/yeargraph/Dubairain.png';
            case 'Athens':
                return '/yeargraph/Athensrain.png';
            case 'Florence':
                return '/yeargraph/Florencerain.png';
            case 'Rome':
                return '/yeargraph/Romerain.png';
            case 'Wiltshire':
                return '/yeargraph/Wiltshirerain.png';
            case 'Yangon':
                return '/yeargraph/Yangonrain.png';
            default:
                return '';
        }
    };

    const imageUrl = getImageSource();

    return (
        <>
            <group position={[-17, 10, 15]}>
                <motion.mesh
                    ref={buttonRef}
                    onPointerEnter={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                    onClick={openModal}
                    whileHover={{ scale: 1.1, transition: { duration: 0.5 }}}
                >
                    <primitive object={glb.scene} />
                </motion.mesh>
                {isHover && <Precipitationword/>}
            </group>
            <LandmarkModal isOpen={modalIsOpen} imageUrl={imageUrl} onClose={closeModal} />
        </>
    );
};

export default PrecipitationButton;
