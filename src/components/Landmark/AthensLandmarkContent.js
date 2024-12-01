import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { getCityWeather, getCityFutureWeather } from '../../utils/weatherApi'; // 날씨 API 함수 임포트
import { getWeatherMent, recommendVisit } from '../../utils/weatherRecommendation'; // 방문 추천 함수 임포트

Modal.setAppElement('#root');

export function AthensLandmarkContent() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [futureWeatherData, setFutureWeatherData] = useState(null);
    const navigate = useNavigate();
    const googleApiKey = process.env.GOOGLE_MAP_API_KEY;


    useEffect(() => {
        // 현재 날씨 데이터 가져오기
        getCityWeather('Athens').then(data => {
            setWeatherData(data.weatherData);
        });
        // 미래 날씨 데이터 가져오기
        getCityFutureWeather('Athens').then(data => {
            setFutureWeatherData(data.weatherData);
        });
    }, []);


    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const goBack = () => {
        navigate('/');
    };

    return (
        <Html position={[-15, 2, 0]}>
            <div className="Landmark-container">
                <div>
                    <h1 style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>그리스 | 파르테논 신전(Parthenon)</h1><br/>
                    {/* fontFamily: '글씨체' */}
                    <div className="Landmark-container-images">
                        <img 
                            src="/images/GreeceParthenon.jpg" 
                            alt="Deoksugung" 
                            style={{ width: "500px", height: "auto" }} 
                            onClick={openModal}
                        />
                        <div>
                        <LoadScript googleApiKey>
                            <GoogleMap
                                mapContainerStyle={{ height: "330px", width: "435px" }}
                                center={{ lat: 37.9715, lng: 23.7267 }}
                                zoom={15}
                            >
                                <Marker position={{ lat: 37.9715, lng: 23.7267 }} />
                            </GoogleMap>
                        </LoadScript>
                        </div>
                    </div><br/>
                    <p style={{ color: 'gray' }}>▲ 사진을 클릭하면 랜드마크에 대한 설명을 볼 수 있습니다.</p><br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ flex: 1 }}>
                            {weatherData && (
                                <>
                                    <div className="face-container02">
                                        <span className={recommendVisit(weatherData).className}/>
                                        <div className="h2">{recommendVisit(weatherData).message}</div>
                                    </div><br/>
                                    <div className="fcontent"><span className="bold-text">현재 기온🌡️:</span> {weatherData.main.temp}°C</div>
                                    <div className="fcontent"><span className="bold-text">날씨:</span> {weatherData.weather[0].main}</div>
                                    <div className="fcontent"><span className="bold-text">습도💦:</span> {weatherData.main.humidity}%</div><br/>
                                    <div className="fcontent">⚠️{getWeatherMent(weatherData)}</div>
                                </>
                            )}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div className="face-container03">
                                <span className="happy"/>
                                <div className="h2">추천 여행 시기 : 4~6월, 9~10월</div>
                            </div><br/>
                            <div className="fcontent">날씨가 쾌적하고 관광객이 적어 여행하기 좋습니다.</div>
                            <br/>평균 기온<span className="temp"/> : 15°C ~ 26°C
                            <br/><br/><br/>
                            <div className="face-container03">
                                <span className="sad"/>
                                <div className="h2">비추천 여행 시기 : 7~8월</div>
                            </div><br/>
                            <div className="fcontent">매우 더운 날씨와 많은 관광객으로 인해 불편할 수 있습니다.</div>
                            <br/>평균 기온<span className="temp"/> : 25°C ~ 35°C
                        </div>
                    </div>
                    <button onClick={goBack} className="back-button">
                        돌아가기
                    </button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Deoksugung Image Modal"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '3',
                        lineHeight: '1.6'
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        zIndex: '2'
                    }
                }}
            >
                <div>
                    <p>파르테논은 아테네의 아크로폴리스에 위치한 고대 그리스의 신전으로, 아테나 여신을 모시기 위해 지어졌습니다.<br/>
                    도리아식 건축의 대표작으로 꼽히며, 그리스 문화의 상징입니다.</p><br/>
                    <button className="close-button" onClick={closeModal}>닫기</button>
                </div>
            </Modal>
        </Html>
    );
}