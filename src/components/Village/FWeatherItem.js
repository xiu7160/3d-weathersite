import React from 'react';

// FWeatherItem 컴포넌트는 개별 날씨 항목을 표시합니다.
// props로 item, isSelected, onClick을 받습니다.
function FWeatherItem({ item, isSelected, onClick }) {
    return (
        // isSelected 값에 따라 클래스 이름과 배경색을 동적으로 설정합니다.
        <div 
            className={`modal-item ${isSelected ? "selected" : ""}`} 
            onClick={onClick} 
            style={{ backgroundColor: isSelected ? 'lightgray' : 'white' }}
        >
            {/* item.displayDate가 존재하는 경우 날짜를 표시합니다. */}
            {item.displayDate && <div className="date-display">{item.displayDate}</div>}
            {/* 온도 정보를 표시합니다. */}
            <p>온도: {item.main.temp}˚ 최저: {item.main.temp_min}˚ 최고: {item.main.temp_max}˚</p>
        </div>
    );
}

// 컴포넌트를 외부에서 사용할 수 있도록 export 합니다.
export default FWeatherItem;
