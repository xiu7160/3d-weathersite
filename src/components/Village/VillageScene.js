import { useEffect, useState } from "react";
import { FutureWeather } from "./FutureWeather";
import Village from "./Village";
import { Bounds, Stars } from "@react-three/drei";
import { getCityFutureWeather } from "../../utils/weatherApi";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import VillageBackBtn from "./VillageBackBtn";

const VillageScene = () => {
    const [bookmarkedCities, setBookmarkedCities] = useState([]);
    const [futureWeatherDataArray, setFutureWeatherDataArray] = useState([]);

    useEffect(() => {
        const savedBookmarks = localStorage.getItem("bookmarkedCities");
        if (savedBookmarks) {
            setBookmarkedCities(JSON.parse(savedBookmarks));
        }
    }, []);

    const glb = useLoader(GLTFLoader, '/models/onestar.glb');

    useEffect(() => {
        const fetchData = async () => {
            const data = await Promise.all(
                bookmarkedCities.map(city => getCityFutureWeather(city))
            );
            setFutureWeatherDataArray(data);
            console.log('미래날씨', data);
        };

        fetchData();
    }, [bookmarkedCities]);

    return (
        <>
            <Village />
            <VillageBackBtn/>
            <Stars
                radius={30} depth={50}
                count={1000} factor={4} saturation={0}
                fade
                speed={1}
            />
            <Bounds>
                <FutureWeather futureWeatherDataArray={futureWeatherDataArray} glb={glb} />
            </Bounds>
        </>
    );
}

export default VillageScene;
