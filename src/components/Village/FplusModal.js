import React, { useEffect, useState } from 'react';

function FplusModal({ onClose, lat, lon, cityName }) {
    // Windy API 객체를 저장할 상태와 현재 오버레이 인덱스를 저장할 상태 선언
    const [windyAPI, setWindyAPI] = useState(null);
    const [currentOverlay, setCurrentOverlay] = useState(0);

    // 사용할 오버레이 목록
    const overlays = ['wind', 'temp', 'pressure'];

    useEffect(() => {
        // Windy API 및 Leaflet 라이브러리를 비동기적으로 로드하는 함수
        const loadScripts = async () => {
            try {
                // Leaflet 라이브러리가 로드되지 않은 경우 로드
                if (!document.querySelector(`script[src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"]`)) {
                    await loadScript('https://unpkg.com/leaflet@1.4.0/dist/leaflet.js');
                }

                // Windy API 라이브러리가 로드되지 않은 경우 로드
                if (!document.querySelector(`script[src="https://api.windy.com/assets/map-forecast/libBoot.js"]`)) {
                    await loadScript('https://api.windy.com/assets/map-forecast/libBoot.js');
                }

                // Windy API 초기화 옵션 설정
                const options = {
                    key: 'IJV0esFlkU7AhYpInmJt4l8apICqWoD6', 
                    lat: lat, // 위도
                    lon: lon, // 경도
                    zoom: 5, // 초기 줌 레벨
                    verbose: true, // 추가 콘솔 출력
                    overlay: overlays[currentOverlay], // 초기 오버레이
                };

                // Windy API 초기화
                window.windyInit(options, windyAPI => {
                    setWindyAPI(windyAPI);
                    const { map } = windyAPI;
                    // Leaflet 팝업 예제 (초기 위치에 팝업 표시)
                    if (window.L) {
                        window.L.popup()
                            .setLatLng([lat, lon])
                            .setContent(cityName)
                            .openOn(map);
                    }
                });
            } catch (error) {
                console.error('Error loading scripts:', error);
            }
        };

        loadScripts();

        // 컴포넌트 언마운트 시 스크립트 제거
        return () => {
            removeScript('https://unpkg.com/leaflet@1.4.0/dist/leaflet.js');
            removeScript('https://api.windy.com/assets/map-forecast/libBoot.js');
        };
    }, [currentOverlay, lat, lon, cityName]);

    // 스크립트를 동적으로 로드하는 함수
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = () => reject(new Error(`Failed to load script ${src}`));
            document.head.appendChild(script);
        });
    };

    // 스크립트를 제거하는 함수
    const removeScript = (src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
            document.head.removeChild(script);
        }
    };

    // 이전 오버레이로 이동하는 함수
    const handlePrevious = () => {
        if (currentOverlay > 0) {
            setCurrentOverlay((prev) => (prev - 1 + overlays.length) % overlays.length);
        }
    };

    // 다음 오버레이로 이동하는 함수
    const handleNext = () => {
        setCurrentOverlay((prev) => (prev + 1) % overlays.length);
    };

    // 오버레이가 변경될 때 Windy API의 오버레이를 업데이트
    useEffect(() => {
        if (windyAPI) {
            windyAPI.store.set('overlay', overlays[currentOverlay]);
        }
    }, [windyAPI, currentOverlay]);

    // 페이지 인디케이터를 렌더링하는 함수
    const renderPageIndicators = () => {
        return (
            <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                {overlays.map((overlay, index) => (
                    <span
                        key={index}
                        style={{
                            height: '10px',
                            width: '10px',
                            backgroundColor: currentOverlay === index ? 'gray' : 'white',
                            borderRadius: '50%',
                            display: 'inline-block',
                            margin: '0 5px',
                            border: '1px solid black',
                        }}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className='plus-modal'>
            {/* Windy API가 렌더링될 div 요소 */}
            <div id="windy" style={{ width: '100%', height: '90%' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <button className='pbeforebtn' onClick={handlePrevious} disabled={currentOverlay === 0}>이전</button>
                {renderPageIndicators()}
                <button className='pnextbtn' onClick={handleNext} disabled={currentOverlay === overlays.length - 1}>다음</button>
                <button className='pxbtn' onClick={onClose}>닫기</button>
            </div>
        </div>
    );
}

export default FplusModal;




// import React, { useEffect, useState } from 'react';

// function FplusModal({ onClose, lat, lon, cityName }) {
//     const [windyAPI, setWindyAPI] = useState(null);
//     const [currentOverlay, setCurrentOverlay] = useState(0);

//     const overlays = ['wind', 'temp', 'pressure']; // 사용할 레이어 목록

//     useEffect(() => {
//         const loadScripts = async () => {
//             try {
//                 // Leaflet 및 Windy API 라이브러리 로드
//                 if (!document.querySelector(`script[src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"]`)) {
//                     await loadScript('https://unpkg.com/leaflet@1.4.0/dist/leaflet.js');
//                 }

//                 if (!document.querySelector(`script[src="https://api.windy.com/assets/map-forecast/libBoot.js"]`)) {
//                     await loadScript('https://api.windy.com/assets/map-forecast/libBoot.js');
//                 }

//                 const options = {
//                     key: 'IJV0esFlkU7AhYpInmJt4l8apICqWoD6', 
//                     lat: lat, // 위도
//                     lon: lon, // 경도
//                     zoom: 5, // 초기 줌 레벨
//                     verbose: true, // 추가 콘솔 출력
//                     overlay: overlays[currentOverlay], // 초기 오버레이
//                 };

//                 window.windyInit(options, windyAPI => {
//                     setWindyAPI(windyAPI);
//                     const { map } = windyAPI;
//                     // Leaflet 팝업 예제 (초기 위치에 팝업 표시)
//                     if (window.L) {
//                         window.L.popup()
//                             .setLatLng([lat, lon])
//                             .setContent(cityName)
//                             .openOn(map);
//                     }
//                 });
//             } catch (error) {
//                 console.error('Error loading scripts:', error);
//             }
//         };

//         loadScripts();

//         // Cleanup
//         return () => {
//             removeScript('https://unpkg.com/leaflet@1.4.0/dist/leaflet.js');
//             removeScript('https://api.windy.com/assets/map-forecast/libBoot.js');
//         };
//     }, [currentOverlay, lat, lon, cityName]);

//     const loadScript = (src) => {
//         return new Promise((resolve, reject) => {
//             const script = document.createElement('script');
//             script.src = src;
//             script.onload = resolve;
//             script.onerror = () => reject(new Error(`Failed to load script ${src}`));
//             document.head.appendChild(script);
//         });
//     };

//     const removeScript = (src) => {
//         const script = document.querySelector(`script[src="${src}"]`);
//         if (script) {
//             document.head.removeChild(script);
//         }
//     };

//     const handlePrevious = () => {
//         if (currentOverlay > 0) {
//             setCurrentOverlay((prev) => (prev - 1 + overlays.length) % overlays.length);
//         }
//     };

//     const handleNext = () => {
//         setCurrentOverlay((prev) => (prev + 1) % overlays.length);
//     };

//     useEffect(() => {
//         if (windyAPI) {
//             windyAPI.store.set('overlay', overlays[currentOverlay]);
//         }
//     }, [windyAPI, currentOverlay]);

//     const renderPageIndicators = () => {
//         return (
//             <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
//                 {overlays.map((overlay, index) => (
//                     <span
//                         key={index}
//                         style={{
//                             height: '10px',
//                             width: '10px',
//                             backgroundColor: currentOverlay === index ? 'gray' : 'white',
//                             borderRadius: '50%',
//                             display: 'inline-block',
//                             margin: '0 5px',
//                             border: '1px solid black',
//                         }}
//                     />
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <div className='plus-modal'>
//             <div id="windy" style={{ width: '100%', height: '90%' }}></div>
//             <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
//                 <button className='pbeforebtn' onClick={handlePrevious} disabled={currentOverlay === 0}>이전</button>
//                 {renderPageIndicators()}
//                 <button className='pnextbtn' onClick={handleNext} disabled={currentOverlay === overlays.length - 1}>다음</button>
//                 <button className='pxbtn' onClick={onClose}>닫기</button>
//             </div>
//         </div>
//     );
// }

// export default FplusModal;
