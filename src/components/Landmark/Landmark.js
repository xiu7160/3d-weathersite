import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Landmark = ({ cityName }) => {
    const [glbFile, setGlbFile] = useState(null); // 도시에 따른 glb 파일을 저장할 state

    useEffect(() => {
        // cityName에 따라 적절한 glb 파일 경로를 설정합니다.
        let glbFilePath = "";
        if (cityName === "Seoul") {
            glbFilePath = "/models/cartoon_lowpoly_deoksugung_palace_landmark.glb";
        } else if (cityName === "New York") {
            glbFilePath = "/models/cartoon_low_poly_statue_of_liberty_landmarks_pack.glb";
        } else if (cityName === "Athens") {
            glbFilePath = "/models/cartoon_low_poly_greece_parthenon_landmark.glb";
        } else if (cityName === "Dubai") {
            glbFilePath = "/models/cartoon_lowpoly_burj_khalifa_dubai_landmark.glb";
        } else if (cityName === "Florence") {
            glbFilePath = "/models/cartoon_lowpoly_florence_cathedral_landmark.glb";
        } else if (cityName === "Rome") {
            glbFilePath = "/models/cartoon_low_poly_rome_coloseum_landmark.glb";
        } else if (cityName === "Wiltshire") {
            glbFilePath = "/models/cartoon_low_poly_stonehenge_landmark.glb";
        } else if (cityName === "Yangon") {
            glbFilePath = "/models/cartoon_lowpoly_shweadagon_pagoda.glb";
        }

        // 설정된 파일 경로로 glb 파일을 로드합니다.
        const loader = new GLTFLoader();
        loader.load(glbFilePath, (glb) => {
            setGlbFile(glb);
        });
    }, [cityName]);

    const ref = useRef(null);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.3;
        }
    });

    // 도시 이름에 따른 scale 값 설정
    const cityScales = {
        "Seoul": 0.002,
        "New York": 48,
        "Athens" : 10,
        "Dubai" : 12,
        "Florence" : 170,
        "Rome" : 10,
        "Wiltshire" : 10,
        "Yangon" : 60
    };

    const cityPosition={
        "Seoul" : [-35, -5, 18],
        "New York": [-33, -3, 18],
        "Athens" : [-36, -5, 18],
        "Dubai" : [-35, -11, 18],
        "Florence" : [-35, 20, 18],
        "Rome" : [-35, -5, 18],
        "Wiltshire" : [-35, -5, 18],
        "Yangon" : [-35, -1, 18]
    }
    // 해당 도시의 scale 값을 가져오고, 기본값은 0.002로 설정
    const scale = cityScales[cityName] || 10;
    const position = cityPosition[cityName];

    return (
        <group position={position}>
            <mesh
                scale={scale} ref={ref}>
                {glbFile && <primitive object={glbFile.scene} />} {/* 로드된 glb 파일을 렌더링합니다. */}
            </mesh>
        </group>
    );
};

export default Landmark;