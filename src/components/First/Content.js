import { Link } from "react-router-dom";

export function Content(props){
    const {data} = props;

    const citiesWithLandmarks = ["Seoul",
    "New York",
    "Agra",
    "Athens",
    "Berlin",
    "Dubai",
    "Florence",
    "Giza",
    "London",
    "Los Angeles",
    "Orlando",
    "Moscow",
    "Paris",
    "Pisa",
    "Rio de Janeiro",
    "Rome",
    "Washington",
    "Wiltshire",
    "Yangon",
    ];

    const generateLandmarkLink = (cityName) => {
        const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
        return `/landmark/${citySlug}`;
    };

    return(
        <div className="container">
            <Link to="/"><div className="x-btn"></div></Link>
            <h1>{data?.name}</h1>
            <h2>{data?.weather[0].main}</h2>
            <div className="texts-group">
                <div className="texts">
                    <p>기온 <span className="temp"/> : {data?.main.temp}˚</p>
                    <p>체감 온도 <span className="temp"/> : {data?.main.feels_like}˚</p>
                    <p>최고 기온 <span className="temp"/> : {data?.main.temp_max}˚</p>
                    <p>최저 기온 <span className="temp"/> : {data?.main.temp_min}˚</p>
                    
                </div>
                <div className="texts">
                    <p>습도 <span className="humidity"/> : {data?.main.humidity} %</p>
                {data?.rain && (
                    <p>강수량 <span className="rain"/> : {data.rain["1h"]} mm/h</p>
                )}
                {data?.snow && (
                    <p>적설량 <span className="snow"/> : {data.snow["1h"]} mm/h</p>
                )}
                </div>
                <div className="texts">
                    <p>풍향 <span className="wind"/> : {data?.wind.deg} 도</p>
                    <p>속도 <span className="wind"/> : {data?.wind.speed} m/s</p>
                </div>
            </div>
            <div className="texts">
                    <p/>
                    <p/>
                </div>
                {citiesWithLandmarks.includes(data?.name) && (
                    <>
                        <h2>{data?.name} 랜드마크</h2>
                        <Link to={generateLandmarkLink(data.name)}><div className="airplane-btn"/></Link>
                    </>
                )}
                {/* <h2>{data?.name} 축제</h2>
                <Link to={'/After'}><div className="airplane-btn"/></Link> */}
        </div>
    )
}