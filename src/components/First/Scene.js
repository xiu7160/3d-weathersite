import { Bounds, Stars } from "@react-three/drei";
import { getCityWeather } from "../../utils/weatherApi";
import Earth from "./Earth";
import Weather from "./Weather";
import { useEffect, useState } from "react";
import { FocusWeather } from "./FocusWeather";
import Clouds from "./Clouds";
import SearchButton from "../Search/SearchButton";
import BookmarkButton from "../BookMark/Bookmarkbutton";

const Scene = () => {
    const [content, setContent] = useState([]);
    const [bookmarkedCitiesCount, setBookmarkedCitiesCount] = useState(0);

    const getBookmarkedCities = () => {
        const bookmarks = localStorage.getItem("bookmarkedCities");
        return bookmarks ? JSON.parse(bookmarks) : [];
    };

    const getCitiesWeather = async () => {
        const bookmarkedCities = getBookmarkedCities();
        setBookmarkedCitiesCount(bookmarkedCities.length);
        const promises = bookmarkedCities.map(city => getCityWeather(city));

        try {
            const weatherDataArray = await Promise.all(promises);
            setContent(weatherDataArray);
        } catch (error) {
            console.error("Error fetching weather data for bookmarked cities:", error);
        }
    };

    useEffect(() => {
        getCitiesWeather();
    }, []);

    useEffect(() => {
        console.log("도시들 데이터", content);
    }, [content]);

    return (
        <>
            <Earth />
            <Clouds />
            <SearchButton bookmarkedCitiesCount={bookmarkedCitiesCount} />
            <BookmarkButton />
            <Stars
                radius={30} depth={50}
                count={1000} factor={4} saturation={0}
                fade
                speed={1}
            />
            <Bounds clip observe margin={0.7}>
                {content && content.length > 0 && (
                    <FocusWeather disableFocus={content.length === 1}>
                        {content.map((el, i) => {
                            let angle, x, y;
                            if (content.length === 1) {
                                angle = i * Math.PI;
                                const radius = 2;
                                x = 0;
                                y = radius * Math.sin(angle) + 1.6;
                            } else {
                                angle = (i / (content.length - 1)) * Math.PI;
                                const radius = 2;
                                x = radius * Math.cos(angle);
                                y = radius * Math.sin(angle);
                            }

                            const weather = el.weatherData?.weather?.[0]?.main?.toLowerCase() || "Unknown";

                            return (
                                <Weather
                                    key={i + "Model key"}
                                    position={[x, y - 1.7, 0]}
                                    rotationY={i + 1}
                                    cityName={el.city}
                                    weather={weather}
                                />
                            );
                        })}
                    </FocusWeather>
                )}
            </Bounds>
        </>
    );
};

export default Scene;