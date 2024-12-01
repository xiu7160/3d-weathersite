import { useEffect, useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { motion } from 'framer-motion-3d';
import { useBodyClass } from '../../utils/hook';
import LandmarkModal from './LandmarkModal';
import { Temperatureword } from './Temperatureword';

const TemperatureButton = ({ cityName }) => {
    const glb = useLoader(GLTFLoader, '/models/thermometer.glb');
    const buttonRef = useRef();
    const [isHover, setHover] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        glb.scene.traverse((child) => {
            if (child.isMesh) {
                child.scale.set(5, 5, 5);
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
                return '/yeargraph/Seoul.png';
            case 'New York':
                return '/yeargraph/NewYork.png';
            case 'Dubai':
                return '/yeargraph/Dubai.png';
            case 'Athens':
                return '/yeargraph/Athens.png';
            case 'Florence':
                return '/yeargraph/Florence.png';
            case 'Rome':
                return '/yeargraph/Rome.png';
            case 'Wiltshire':
                return '/yeargraph/Wiltshire.png';
            case 'Yangon':
                return '/yeargraph/Yangon.png';
            default:
                return '';
        }
    };

    const imageUrl = getImageSource();

    return (
        <>
            <group position={[-14, 8, 15]}>
                <motion.mesh
                    ref={buttonRef}
                    onPointerEnter={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                    onClick={openModal}
                    whileHover={{ scale: 1.1, transition: { duration: 0.5 }}}
                >
                    <primitive object={glb.scene} />
                </motion.mesh>
                {isHover && <Temperatureword />}
            </group>
            <LandmarkModal isOpen={modalIsOpen} imageUrl={imageUrl} onClose={closeModal} />
        </>
    );
};

export default TemperatureButton;
