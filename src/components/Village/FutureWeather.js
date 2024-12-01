import { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion-3d";
import { VillageCityName } from "./VillageCityName";
import * as THREE from 'three';
import FModal from './FModal';


export function FutureWeather(props) {
    const { futureWeatherDataArray, glb } = props;
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const iconsRef = useRef([]);
    const particlesRef = useRef([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCityData, setSelectedCityData] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        glb.scene.traverse((child) => {
            if (child.isMesh) {
                child.scale.set(10, 10, 10);
                // 중심을 원점으로 이동
                child.geometry.center();
            }
        });
    }, [glb.scene]);

    const handleIconHover = (index) => {
        setHoveredIcon(index);
    };

    const handleIconClick = (cityData) => {
        // console.log(cityData.weatherData.list[0].main.temp);
        setIsModalOpen(true);
        setSelectedCityData(cityData);
        setCurrentPage(0);
    };

    // 모달 페이지 네비게이션을 위한 함수
    const changePage = (delta) => {
        setCurrentPage((prev) => prev + delta);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const getIconY = (length, index) => {
        if (length === 2) {
            return (index === 0 ) ? 15 : 14.2;
        } else if (length === 3) {
            return (index === 0 || index === 1) ? 10 : 14;
        } else if (length === 4) {
            return (index === 0 || index === 1) ? 11 : 20;
        } else if (length === 5) {
            return index === 1 ? 7.5 : (index === 0 || index === 2) ? 12 : 17;
        } else {
            return 13; // 기본값
        }
    };

    //length에 따라 index별 크기 설정
    const getIconScale = (length, index) => {
        if(length == 1){
            return index == 0 ? [1.2,1.2,1.2]:[1,1,1]; 
        }
        else if(length == 2){
            return (index === 0 || index === 1) ? [1.2, 1.2, 1.2] : [1.3, 1.3, 1.3]; 
        }
        else if (length === 3) {
            return (index === 0 || index === 1) ? [1.1, 1.1, 1.1] : [1.3, 1.3, 1.3]; 
        } else if (length === 4) {
            return (index === 0 || index === 1) ? [1, 1, 1] : [1.4, 1.4, 1.4]; 
        } else if (length === 5) {
            return index === 1 ? [0.8, 0.8, 0.8] : (index === 0 || index === 2) ? [1.2, 1.2, 1.2] : [1, 1, 1]; // 맨 앞 아이콘은 가장 크게, 가운데 두 아이콘은 중간 크기, 나머지는 작게
        } else {
            return [1, 1, 1]; // 기본 크기
        }
    };

    const getHoverScale = (length, index) => {
        if(length == 1){
            return 1.4;
        }
        else if (length === 2 && (index === 0 || index === 1)) {
            return 1.5;
        } else if (length === 3 && (index === 0 || index === 1)) {
            return 1.3;
        } else if (length === 4 && (index === 0 || index === 1)) {
            return 1.2;
        } else if (length === 5 && index === 1) {
            return 1;
        } else {
            return 1.6;
        }
    };


    
    return (
        <>
            {futureWeatherDataArray.map((cityObj, index) => {
                const { city, futureData } = cityObj; // 각 도시의 미래 데이터를 포함한다고 가정

                let additionalRotationAngle;
                if (futureWeatherDataArray.length === 2) {
                    additionalRotationAngle = (Math.PI / 180) * -8; // -8도를 라디안으로 변환
                }
                else if (futureWeatherDataArray.length === 3) {
                    additionalRotationAngle = (Math.PI / 180) * 28; // 28도를 라디안으로 변환
                } else if (futureWeatherDataArray.length === 4) {
                    additionalRotationAngle = (Math.PI / 180) * 40; 
                }else if (futureWeatherDataArray.length === 5) {
                    additionalRotationAngle = (Math.PI / 180) * 15;
                }
                else {
                    additionalRotationAngle = 0; // 다른 경우에는 회전하지 않음
                }
                const angle = ((index / futureWeatherDataArray.length) * Math.PI * 2) + additionalRotationAngle;


                const radius = 18; // 원의 반지름
                const iconX = Math.cos(angle) * radius; // 원의 x 좌표
                const iconZ = Math.sin(angle) * radius; // 원의 z 좌표
                const iconY = getIconY(futureWeatherDataArray.length, index); // y 좌표

                // 아이콘의 위치를 저장
                iconsRef.current[index] = { x: iconX, y: iconY, z: iconZ };

                // 각 아이콘의 위치에서 파티클 묶음 생성
                const particles = [];
                const particleCount = 30; // 파티클 수
                for (let i = 0; i < particleCount; i++) {
                    const particleAngle = (i / particleCount) * Math.PI * 2; // 각 파티클의 각도 계산
                    const particleX = iconX + (Math.random() - 0.5) * 4; // 아이콘의 x 좌표
                    const particleZ = iconZ + (Math.random() - 0.5) * 5; // 아이콘의 z 좌표
                    const particleY = iconY + (Math.random() - 0.5) * 3; // 파티클의 y 좌표를 랜덤하게 생성
                    particles.push(new THREE.Vector3(particleX, particleY, particleZ));
                }
                particlesRef.current[index] = particles;

                return (
                    <group key={`city-group-${index}`} position={[0, 0, 0]} onClick={() => handleIconClick(cityObj)}>
                        <motion.mesh
                            key={`city-mesh-${index}`}
                            position={[iconX, iconY, iconZ]}
                            scale={getIconScale(futureWeatherDataArray.length, index)} 
                            onPointerEnter={() => handleIconHover(index)}
                            onPointerOut={() => handleIconHover(null)}
                            whileHover={{
                                scale: getHoverScale(futureWeatherDataArray.length, index),
                                transition: 0.5
                            }}>
                            <primitive object={glb.scene.clone()} />
                        </motion.mesh>
                        {particles.map((particle, particleIndex) => (
                            <mesh key={particleIndex} position={particle.toArray()}>
                                <sphereGeometry args={[0.1, 8, 8]} />
                                <meshBasicMaterial color={hoveredIcon === index ? 0xffff00 : 0xffffff} />
                            </mesh>
                        ))}
                        {hoveredIcon === index && <VillageCityName name={city} position={[iconX, iconY + 4, iconZ]} />}
                    </group>
                );
            })}
            {/* 모달 컴포넌트가 조건부로 렌더링됨 */}
            {isModalOpen && (
                <FModal
                    isOpen={isModalOpen}
                    data={selectedCityData}
                    currentIndex={currentPage}
                    onClose={closeModal}
                    onPageChange={changePage}
                />
            )}
            
        </>
    );
}






//원본
// import { useEffect, useState } from 'react';
// import { motion } from "framer-motion-3d";
// import { VillageCityName } from "./VillageCityName";
// import { useLoader } from "@react-three/fiber";

// export function FutureWeather(props) {
//     const { futureWeatherDataArray, glb } = props;
//     const [hoveredIcon, setHoveredIcon] = useState(null);

//     useEffect(() => {
//         glb.scene.traverse((child) => {
//             if (child.isMesh) {
//                 child.scale.set(10, 10, 10);
//             }
//         });
//     }, [glb.scene]);
    
//     const handleIconHover = (index) => {
//         setHoveredIcon(index);
//     };

//     return (
//         <>
//             {futureWeatherDataArray.map((cityObj, index) => {
//                 const { city, futureWeatherData } = cityObj;
//                 const angle = (index / futureWeatherDataArray.length) * Math.PI * 2;
//                 const radius = 18; // 도시 간의 간격
//                 const x = Math.cos(angle) * radius;
//                 const z = Math.sin(angle) * radius;

//                 return (
//                     <group key={index} position={[x, 13, z]}>
//                         <motion.mesh
//                             key={index}
//                             onPointerEnter={() => handleIconHover(index)}
//                             onPointerOut={() => handleIconHover(null)}
//                             whileHover={{ scale: 1.3, transition: 0.5 }}>
//                             <primitive object={glb.scene.clone()} />
//                         </motion.mesh>
//                         {hoveredIcon === index && <VillageCityName name={city} />}
//                     </group>
//                 );
//             })}
//         </>
//     );
// }




//아이콘 컬러 변환
// import { useEffect, useState } from 'react';
// import { motion } from "framer-motion-3d";
// import { VillageCityName } from "./VillageCityName";
// import * as THREE from 'three';

// export function FutureWeather(props) {
//     const { futureWeatherDataArray, glb } = props;
//     const [hoveredIcon, setHoveredIcon] = useState(null);

//     const handleIconHover = (index, mesh) => {
//         setHoveredIcon(index);
//         if (mesh) {
//             mesh.material.emissive = new THREE.Color(0xffffff); // 발광 색상 설정
//             mesh.material.emissiveIntensity = 1; // 발광 강도 설정
//         }
//     };

//     const handleIconOut = (mesh) => {
//         setHoveredIcon(null);
//         if (mesh) {
//             mesh.material.emissiveIntensity = 0; // 발광 강도 리셋
//         }
//     };

//     return (
//         <>
//             {futureWeatherDataArray.map((cityObj, index) => {
//                 const { city } = cityObj;
//                 const angle = (index / futureWeatherDataArray.length) * Math.PI * 2;
//                 const radius = 18; // 도시 간의 간격
//                 const x = Math.cos(angle) * radius;
//                 const z = Math.sin(angle) * radius;

//                 // Clone the GLB scene for each icon
//                 const clonedScene = glb.scene.clone();
//                 clonedScene.traverse((child) => {
//                     if (child.isMesh) {
//                         child.scale.set(10, 10, 10);
//                         child.material = child.material.clone(); // Clone the material to avoid shared state
//                         child.material.emissive = new THREE.Color(0x000000); // 기본 발광 색상 설정
//                         child.material.emissiveIntensity = 0; // 기본 발광 강도 설정
//                     }
//                 });

//                 return (
//                     <group key={index} position={[x, 13, z]}>
//                         <motion.mesh
//                             onPointerEnter={(e) => handleIconHover(index, e.object)}
//                             onPointerOut={(e) => handleIconOut(e.object)}
//                             whileHover={{ scale: 1.3, transition: 0.5 }}>
//                             <primitive object={clonedScene} />
//                         </motion.mesh>
//                         {hoveredIcon === index && <VillageCityName name={city} />}
//                     </group>
//                 );
//             })}
//         </>
//     );
// }

