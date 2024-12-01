import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { getCityWeather, getCityFutureWeather } from '../../utils/weatherApi'; // 날씨 API 함수 임포트
import { getWeatherMent, recommendVisit } from '../../utils/weatherRecommendation'; // 방문 추천 함수 임포트

Modal.setAppElement('#root');

export function SeoulLandmarkContent() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [futureWeatherData, setFutureWeatherData] = useState(null);
    const navigate = useNavigate();
    const googleApiKey = process.env.GOOGLE_MAP_API_KEY;

    useEffect(() => {
        // 현재 날씨 데이터 가져오기
        getCityWeather('Seoul').then(data => {
            setWeatherData(data.weatherData);
        });
        // 미래 날씨 데이터 가져오기
        getCityFutureWeather('Seoul').then(data => {
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
                    <h1 style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>대한민국 | 덕수궁(Deoksugung)</h1><br/>
                    {/* fontFamily: '글씨체' */}
                    <div className="Landmark-container-images">
                        <img 
                            src="/images/Deoksugung.jpg" 
                            alt="Deoksugung" 
                            style={{ width: "500px", height: "auto" }} 
                            onClick={openModal}
                        />
                        <div>
                        <LoadScript googleApiKey>
                            <GoogleMap
                                mapContainerStyle={{ height: "330px", width: "435px" }}
                                center={{ lat: 37.5658, lng: 126.9750 }}
                                zoom={15}
                            >
                                <Marker position={{ lat: 37.5658, lng: 126.9750 }} />
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
                            <div className="h2">추천 여행 시기 : 3~5월, 9~10월</div>
                    </div><br/>
                    <div className="fcontent">봄과 가을의 날씨가 가장 좋고,<br/>화려한 단풍이나 벚꽃을 즐길 수 있습니다.</div>
                    <br/>평균 기온<span className="temp"/> : 10°C ~ 22°C
                    <br/><br/><br/>
                    <div className="face-container03">
                        <span className="sad"/>
                            <div className="h2">비추천 여행 시기 : 7~8월</div>
                    </div><br/>
                    <div className="fcontent">매우 덥고 습한 여름철과 장마로 인해 관광이 어려울 수 있습니다.</div>
                    <br/>평균 기온<span className="temp"/> : 23°C ~ 30°C
                    </div></div>
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
                    <p>덕수궁은 조선시대를 두 차례 궁궐로 사용한 곳입니다. 처음으로 궁궐로 사용된 것은 임진왜란 때 선조가 피난 온 곳을 임시 궁궐로 삼은 것부터 입니다.<br/>
                    그 후 광해군이 이곳을 정릉동 행궁으로 삼아 경운궁이라 불렸습니다. 이후 고종이 이곳을 궁궐로 사용하며 대한제국을 선포했지만, 일제의 강압으로 고종이 왕위에서 물러난 후 덕수궁으로 이름이 바뀌었습니다.<br/>
                    서양 문물을 받아들이며 서구식 건축물이 세워진 곳으로, 현재에도 그 유적이 남아있습니다. 덕수궁은 서울의 중심에 위치하며, 관광객들과 시민들에게 즐겨 찾는 산책로입니다.</p><br/>
                    <button className="close-button" onClick={closeModal}>닫기</button>
                </div>
            </Modal>
        </Html>
    );
}