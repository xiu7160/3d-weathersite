import React, { useEffect, useRef, useState } from 'react';
import FplusModal from './FplusModal'; // FplusModal를 import 합니다.

function FAdditionalModal({ isOpen, onClose, data, cityData, triggerBlink }) {
    const modalRef = useRef(null);
    const [isFplusModalOpen, setIsFplusModalOpen] = useState(false); // FplusModal의 상태 변수 추가

     // 모달의 열림/닫힘 상태에 따라 애니메이션 효과를 적용하는 useEffect
    useEffect(() => {
        if (modalRef.current) {
            if (isOpen) {
                requestAnimationFrame(() => {
                    modalRef.current.style.right = '-515px'; // 모달을 화면 안으로 슬라이드
                });
            } else {
                modalRef.current.style.right = '-900px'; // 모달을 화면 밖으로 슬라이드
            }
        }
    }, [isOpen]);

    // triggerBlink가 true일 때 깜빡임 애니메이션을 적용하는 useEffect
    useEffect(() => {
        if (triggerBlink && modalRef.current) {
            modalRef.current.classList.add('blink');
            setTimeout(() => {
                modalRef.current.classList.remove('blink');
            }, 600); // 애니메이션 시간 (0.3s * 2) 후 클래스를 제거
        }
    }, [triggerBlink]);

    // data가 유효하지 않으면 null을 반환하여 컴포넌트를 렌더링하지 않음
    if (!data || !data.main || !data.visibility) {
        return null;
    }

    // data와 cityData에서 필요한 값을 추출
    const { feels_like, humidity, pressure, sea_level, grnd_level } = data.main;
    const visibility = data.visibility;
    const rain = data.rain ? data.rain['3h'] : '0';
    const snow = data.snow ? data.snow['3h'] : '0';
    const clouds = data.clouds ? data.clouds.all : '0';
    const wind = data.wind || {};
    const { speed, deg, gust } = wind;
    const pop = data.pop ? (data.pop * 100).toFixed(2) : '0';
    const sunrise = cityData && cityData.sunrise ? new Date(cityData.sunrise * 1000).toLocaleTimeString() : '0';
    const sunset = cityData && cityData.sunset ? new Date(cityData.sunset * 1000).toLocaleTimeString() : '0';

    // 지도 아이콘 클릭 이벤트 핸들러
    const handleMapClick = () => {
        console.log('Map icon clicked'); // 클릭 이벤트가 발생하는지 확인하기 위해 로그 추가
        setIsFplusModalOpen(true); // FplusModal을 열도록 상태 변경
    };

    // FplusModal 닫기 핸들러
    const handleFplusModalClose = () => {
        setIsFplusModalOpen(false); // FplusModal을 닫도록 상태 변경
    };

    return (
        <div ref={modalRef} className="additional-modal">
            <button className='fadd-xbtn' onClick={onClose}> X </button><br/><br/>
            <div className='fadd'>
                <h2 style={{textAlign:'center', color:'black'}}>추가 날씨 정보</h2><br/>
                <p><span className="bold-text">체감 온도 🌡️:</span> {feels_like}˚</p>
                <p><span className="bold-text">습도 🌫️:</span> {humidity}%</p>
                <p><span className="bold-text">가시성:</span> {visibility} meters</p><br/>

                <p><span className="bold-text">강수 확률 ☔:</span> {pop}%</p>
                <p><span className="bold-text">지난 3시간 동안의 비량 💧:</span> {rain} mm</p>
                <p><span className="bold-text">지난 3시간 동안의 눈의 양 ❄️:</span> {snow} mm</p>

                <p><span className="bold-text">풍속💨:</span> {speed} m/s</p>
                <p><span className="bold-text">풍향:</span> {deg}°</p>
                <p><span className="bold-text">돌풍:</span> {gust} m/s</p><br/>
                
                <p><span className="bold-text">해수면의 대기압:</span> {sea_level} hPa</p>
                <p><span className="bold-text">지면의 대기압:</span> {grnd_level} hPa</p>
                <p><span className="bold-text">일출 시간 🌤️:</span> {sunrise}</p>
                <p><span className="bold-text">일몰 시간 ⛅:</span> {sunset}</p>
                
                <div 
                    className="tooltip"
                    style={{fontSize:'45px', position: 'absolute', left: '270px', bottom:'20px'}} 
                    onClick={handleMapClick}
                >
                    🗺️
                    <span className="tooltiptext">클릭 시 위성사진을 볼 수 있습니다.</span>
                </div>
            </div>

            {isFplusModalOpen && (
                <FplusModal 
                    onClose={handleFplusModalClose} 
                    lat={cityData.coord.lat} 
                    lon={cityData.coord.lon}
                    cityName={cityData.name}
                />
            )} 
        </div>
    );
}

export default FAdditionalModal;
