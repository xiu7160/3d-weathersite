import { Html } from "@react-three/drei";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { getCityWeather, getCityFutureWeather } from '../../utils/weatherApi'; // 날씨 API 함수 임포트
import { recommendVisit, getWeatherMent } from '../../utils/weatherRecommendation'; // 방문 추천 함수 및 멘트 함수 임포트

Modal.setAppElement('#root');

export function DubaiLandmarkContent() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [futureWeatherData, setFutureWeatherData] = useState(null);
    const navigate = useNavigate();
    const googleApiKey = process.env.GOOGLE_MAP_API_KEY;

    useEffect(() => {
        // 현재 날씨 데이터 가져오기
        getCityWeather('Dubai').then(data => {
            setWeatherData(data.weatherData);
        });
        // 미래 날씨 데이터 가져오기
        getCityFutureWeather('Dubai').then(data => {
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
                    <h1 style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>아랍에미리트 연합 | 버즈칼리파(Burj Khalifa)</h1><br/>
                    <div className="Landmark-container-images">
                        <img 
                            src="/images/burjkhalifa.jpg" 
                            alt="Burj Khalifa" 
                            style={{ width: "500px", height: "auto" }} 
                            onClick={openModal}
                        />
                        <div>
                            <LoadScript googleApiKey>
                                <GoogleMap
                                    mapContainerStyle={{ height: "330px", width: "435px" }}
                                    center={{ lat: 25.1972, lng: 55.2744 }}
                                    zoom={15}
                                >
                                    <Marker position={{ lat: 25.1972, lng: 55.2744 }} />
                                </GoogleMap>
                            </LoadScript>
                        </div>
                    </div><br/>
                    <p style={{ color: 'gray' }}>▲ 사진을 클릭하면 랜드마크에 대한 설명을 볼 수 있습니다.</p><br/><br/>
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
                                <div className="h2">추천 여행 시기 : 11~3월</div>
                            </div><br/>
                            <div className="fcontent" >기온이 비교적 낮아 쾌적하게 관광할 수 있습니다.</div>
                            <br/>평균 기온<span className="temp"/> : 18°C ~ 25°C
                            <br/><br/><br/>
                            <div className="face-container03">
                                <span className="sad"/>
                                <div className="h2">비추천 여행 시기 : 6~9월</div>
                            </div><br/>
                            <div className="fcontent"> 매우 높은 기온으로 인해 야외 활동이 어려울 수 있습니다.</div>
                            <br/>평균 기온<span className="temp"/> : 30°C ~ 41°C
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
                contentLabel="Burj Khalifa Image Modal"
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
                    <p>버즈 할리파는 두바이에 위치한 세계에서 가장 높은 빌딩으로, 높이가 828미터에 달합니다.<br/>
                    현대 건축과 엔지니어링의 상징으로, 두바이의 번영을 나타냅니다.</p><br/>
                    <button className="close-button" onClick={closeModal}>닫기</button>
                </div>
            </Modal>
        </Html>
    );
}

// import { Html } from "@react-three/drei";
// import { useState, useEffect } from "react";
// import Modal from "react-modal";
// import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";
// import { getCityWeather, getCityFutureWeather } from '../../utils/weatherApi'; // 날씨 API 함수 임포트
// import { recommendVisit, getWeatherMent } from '../../utils/weatherRecommendation'; // 방문 추천 함수 및 멘트 함수 임포트

// Modal.setAppElement('#root');

// export function DubaiLandmarkContent() {
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [weatherData, setWeatherData] = useState(null);
//     const [futureWeatherData, setFutureWeatherData] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // 현재 날씨 데이터 가져오기
//         getCityWeather('Dubai').then(data => {
//             setWeatherData(data.weatherData);
//         });
//         // 미래 날씨 데이터 가져오기
//         getCityFutureWeather('Dubai').then(data => {
//             setFutureWeatherData(data.weatherData);
//         });
//     }, []);

//     const openModal = () => {
//         setModalIsOpen(true);
//     };

//     const closeModal = () => {
//         setModalIsOpen(false);
//     };

//     const goBack = () => {
//         navigate('/');
//     };

//     return (
//         <Html position={[-15, 2, 0]}>
//             <div className="Landmark-container">
//                 <div>
//                     <h1 style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>아랍에미리트 연합 | 부르즈 할리파(Burj Khalifa)</h1><br/>
//                     <div className="Landmark-container-images">
//                         <img 
//                             src="/images/burjkhalifa.jpg" 
//                             alt="Burj Khalifa" 
//                             style={{ width: "500px", height: "auto" }} 
//                             onClick={openModal}
//                         />
//                         <div>
//                             <LoadScript googleMapsApiKey="AIzaSyD1Zm-70m2ImC-yT2Rw_MOx2PdV-NSrU_c">
//                                 <GoogleMap
//                                     mapContainerStyle={{ height: "330px", width: "435px" }}
//                                     center={{ lat: 25.1972, lng: 55.2744 }}
//                                     zoom={15}
//                                 >
//                                     <Marker position={{ lat: 25.1972, lng: 55.2744 }} />
//                                 </GoogleMap>
//                             </LoadScript>
//                         </div>
//                     </div><br/>
//                     <p style={{ color: 'gray' }}>▲ 사진을 클릭하면 랜드마크에 대한 설명을 볼 수 있습니다.</p><br/><br/>
//                     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                         <div style={{ flex: 1 }}> 
//                             {weatherData && (
//                                 <>
//                                     <div className="face-container02">
//                                         <span className={recommendVisit(weatherData).className}/>
//                                         <div className="h2">{recommendVisit(weatherData).message}</div>
//                                     </div><br/>
//                                     <div className="fcontent"><span className="bold-text">현재 기온🌡️:</span> {weatherData.main.temp}°C</div>
//                                     <div className="fcontent"><span className="bold-text">날씨:</span> {weatherData.weather[0].main}</div>
//                                     <div className="fcontent"><span className="bold-text">습도💦:</span> {weatherData.main.humidity}%</div><br/>
//                                     <div className="fcontent">⚠️{getWeatherMent(weatherData)}</div>
//                                 </>
//                             )}
//                         </div>
//                         <div style={{ flex: 1 }}>
//                             <div className="face-container03">
//                                 <span className="happy"/>
//                                 <div className="h2">추천 여행 시기 : 11~3월</div>
//                             </div><br/>
//                             <div className="fcontent" >기온이 비교적 낮아 쾌적하게 관광할 수 있습니다.</div>
//                             <br/>평균 기온<span className="temp"/> : 18°C ~ 25°C
//                             <br/><br/><br/>
//                             <div className="face-container03">
//                                 <span className="sad"/>
//                                 <div className="h2">비추천 여행 시기 : 6~9월</div>
//                             </div><br/>
//                             <div className="fcontent"> 매우 높은 기온으로 인해 야외 활동이 어려울 수 있습니다.</div>
//                             <br/>평균 기온<span className="temp"/> : 30°C ~ 41°C
//                         </div>
//                     </div>
                    
//                     <button onClick={goBack} className="back-button">
//                         돌아가기
//                     </button>
//                 </div>
//             </div>
            
//             <Modal
//                 isOpen={modalIsOpen}
//                 onRequestClose={closeModal}
//                 contentLabel="Burj Khalifa Image Modal"
//                 style={{
//                     content: {
//                         top: '50%',
//                         left: '50%',
//                         right: 'auto',
//                         bottom: 'auto',
//                         marginRight: '-50%',
//                         transform: 'translate(-50%, -50%)',
//                         zIndex: '3',
//                         lineHeight: '1.6'
//                     },
//                     overlay: {
//                         backgroundColor: 'rgba(0, 0, 0, 0.75)',
//                         zIndex: '2'
//                     }
//                 }}
//             >
//                 <div>
//                     <p>버즈 할리파는 두바이에 위치한 세계에서 가장 높은 빌딩으로, 높이가 828미터에 달합니다.<br/>
//                     현대 건축과 엔지니어링의 상징으로, 두바이의 번영을 나타냅니다.</p><br/>
//                     <button className="close-button" onClick={closeModal}>닫기</button>
//                 </div>
//             </Modal>
//         </Html>
//     );
// }
