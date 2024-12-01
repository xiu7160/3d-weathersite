import { Html } from '@react-three/drei';
import FWeatherItem from './FWeatherItem'; 
import FAdditionalModal from './FAdditionalModal';    
import { React, useState } from 'react';

// FModal 컴포넌트는 날씨 정보를 모달 형식으로 표시합니다.
function FModal({ isOpen, data, currentIndex, onClose, onPageChange }) {
    const [selectedItemIndex, setSelectedItemIndex] = useState(null); // 선택된 항목의 인덱스 상태
    const [triggerBlink, setTriggerBlink] = useState(false); // 깜빡임 애니메이션 트리거 상태
    const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 중인지 여부 상태

    // 모달이 열리지 않았거나, 데이터가 없거나, weatherData.list가 없으면 null을 반환
    if (!isOpen || !data || !data.weatherData || !data.weatherData.list) {
        console.log('weatherData.list is missing');
        return null;
    }

    // 현재 페이지에 표시할 데이터 슬라이스 계산
    const startIndex = currentIndex * 8;
    const endIndex = startIndex + 8;
    const currentDataSlice = data.weatherData.list.slice(startIndex, endIndex);

    // 항목 클릭 핸들러
    const handleItemClick = (index) => {
        if (isAnimating) {
            return; // 애니메이션 중에는 다른 항목 선택 불가
        }

        if (selectedItemIndex !== null && selectedItemIndex !== index) {
            // 모달을 두 번 깜빡이게 함
            setTriggerBlink(true);
            setIsAnimating(true);
            setTimeout(() => {
                setTriggerBlink(false);
                setIsAnimating(false);
            }, 600); // 애니메이션 시간 후 상태 초기화
        } else {
            setSelectedItemIndex(index); // 선택된 항목 인덱스 업데이트
        }
    };

    // 페이지 인디케이터 렌더링 함수
    const renderPageIndicators = (currentIndex, totalItems) => {
        const totalPages = Math.ceil(totalItems / 8); // 총 페이지 수 계산
        const indicators = [];

        for (let i = 0; i < totalPages; i++) {
            indicators.push(
                <span key={i} style={{
                    height: '10px',
                    width: '10px',
                    backgroundColor: currentIndex === i ? 'gray' : 'white',
                    borderRadius: '50%',
                    display: 'inline-block',
                    margin: '0 5px',
                    border: '1px solid black',
                }} />
            );
        }

        return (
            <div style={{ position: 'absolute', bottom: '-235px', left: '50px', transform: 'translateX(-50%)', textAlign: 'center',
                writingMode: 'horizontal-tb', whiteSpace: 'nowrap' }}>
                {indicators}
            </div>
        );
    };

    // 날짜가 변경되는 곳에 표시할 데이터 준비
    let lastDate = null;
    let lastMonth = null;
    const dataWithDateChange = currentDataSlice.map((item, index) => {
        const dateObj = new Date(item.dt_txt);
        const currentDate = dateObj.getDate();
        const currentMonth = dateObj.getMonth() + 1; 
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes().toString().padStart(2, '0'); 

        let displayDate = `${hours}:${minutes}`; 
        
        if (currentDate !== lastDate || currentMonth !== lastMonth) {
            displayDate = `${currentMonth}/${currentDate} ${displayDate}`; 
            lastDate = currentDate;
            lastMonth = currentMonth;
        }
        
        return { ...item, displayDate }; // displayDate를 추가한 새로운 객체 반환
    });

    return (
        <Html fullscreen>
            <div className="modal-overlay">
                <div className="modal">
                    <h2 className='fh2'>{data.weatherData.city.name}</h2>
                    {dataWithDateChange.map((item, index) => (
                        <FWeatherItem key={index} item={item} isSelected={selectedItemIndex === index} onClick={() => handleItemClick(index)} />
                    ))}
                    <button className='fbeforebtn' onClick={() => onPageChange(-1)} disabled={currentIndex === 0}>이전</button>
                    {renderPageIndicators(currentIndex, data.weatherData.list.length)}
                    <button className='fnextbtn' onClick={() => onPageChange(1)} disabled={endIndex >= data.weatherData.list.length}>다음</button>
                    <button className='fxbtn' onClick={onClose}>X</button>
                    {selectedItemIndex !== null && (
                        <FAdditionalModal 
                            isOpen={selectedItemIndex !== null} 
                            onClose={() => setSelectedItemIndex(null)} 
                            data={currentDataSlice[selectedItemIndex]} 
                            cityData={data.weatherData.city}
                            triggerBlink={triggerBlink} 
                        />
                    )}
                </div>
            </div>
        </Html>
    );
}

export default FModal;



// import { Html } from '@react-three/drei';
// import FWeatherItem from './FWeatherItem'; 
// import FAdditionalModal from './FAdditionalModal';    
// import { React, useState } from 'react';

// function FModal({ isOpen, data, currentIndex, onClose, onPageChange }) {
//     const [selectedItemIndex, setSelectedItemIndex] = useState(null);
//     const [triggerBlink, setTriggerBlink] = useState(false);
//     const [isAnimating, setIsAnimating] = useState(false);

//     if (!isOpen || !data || !data.weatherData || !data.weatherData.list) {
//         console.log('weatherData.list is missing');
//         return null;
//     }

//     const startIndex = currentIndex * 8;
//     const endIndex = startIndex + 8;
//     const currentDataSlice = data.weatherData.list.slice(startIndex, endIndex);

//     const handleItemClick = (index) => {
//         if (isAnimating) {
//             return; // 애니메이션 중에는 다른 항목 선택 불가
//         }

//         if (selectedItemIndex !== null && selectedItemIndex !== index) {
//             // 모달을 두 번 깜빡이게 함
//             setTriggerBlink(true);
//             setIsAnimating(true);
//             setTimeout(() => {
//                 setTriggerBlink(false);
//                 setIsAnimating(false);
//             }, 600); // 애니메이션 시간 후 상태 초기화
//         } else {
//             setSelectedItemIndex(index);
//         }
//     };

//     const renderPageIndicators = (currentIndex, totalItems) => {
//         const totalPages = Math.ceil(totalItems / 8);
//         const indicators = [];

//         for (let i = 0; i < totalPages; i++) {
//             indicators.push(
//                 <span key={i} style={{
//                     height: '10px',
//                     width: '10px',
//                     backgroundColor: currentIndex === i ? 'gray' : 'white',
//                     borderRadius: '50%',
//                     display: 'inline-block',
//                     margin: '0 5px',
//                     border: '1px solid black',
//                 }} />
//             );
//         }

//         return (
//             <div style={{ position: 'absolute', bottom: '-235px', left: '50px', transform: 'translateX(-50%)', textAlign: 'center',
//                 writingMode: 'horizontal-tb', whiteSpace: 'nowrap' }}>
//                 {indicators}
//             </div>
//         );
//     };

//     let lastDate = null;
//     let lastMonth = null;
//     const dataWithDateChange = currentDataSlice.map((item, index) => {
//         const dateObj = new Date(item.dt_txt);
//         const currentDate = dateObj.getDate();
//         const currentMonth = dateObj.getMonth() + 1; 
//         const hours = dateObj.getHours();
//         const minutes = dateObj.getMinutes().toString().padStart(2, '0'); 

//         let displayDate = `${hours}:${minutes}`; 
        
//         if (currentDate !== lastDate || currentMonth !== lastMonth) {
//             displayDate = `${currentMonth}/${currentDate} ${displayDate}`; 
//             lastDate = currentDate;
//             lastMonth = currentMonth;
//         }
        
//         return { ...item, displayDate };
//     });

//     return (
//         <Html fullscreen>
//             <div className="modal-overlay">
//                 <div className="modal">
//                     <h2 className='fh2'>{data.weatherData.city.name}</h2>
//                     {dataWithDateChange.map((item, index) => (
//                         <FWeatherItem key={index} item={item} isSelected={selectedItemIndex === index} onClick={() => handleItemClick(index)} />
//                     ))}
//                     <button className='fbeforebtn' onClick={() => onPageChange(-1)} disabled={currentIndex === 0}>이전</button>
//                     {renderPageIndicators(currentIndex, data.weatherData.list.length)}
//                     <button className='fnextbtn' onClick={() => onPageChange(1)} disabled={endIndex >= data.weatherData.list.length}>다음</button>
//                     <button className='fxbtn' onClick={onClose}>X</button>
//                     {selectedItemIndex !== null && (
//                         <FAdditionalModal 
//                             isOpen={selectedItemIndex !== null} 
//                             onClose={() => setSelectedItemIndex(null)} 
//                             data={currentDataSlice[selectedItemIndex]} 
//                             cityData={data.weatherData.city}
//                             triggerBlink={triggerBlink} 
//                         />
//                     )}
//                 </div>
//             </div>
//         </Html>
//     );
// }

// export default FModal;

