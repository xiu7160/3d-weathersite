export const recommendVisit = (weather) => {
    const temp = weather.main.temp;
    const weatherMain = weather.weather[0].main;
    /*&& weatherMain !== 'Rain' && weatherMain !== 'Snow' 이조건 넣을시 비눈 안올경우 */
    if (temp <= 0) {
        return { message: "현재 방문하기에는 매우 추운 날씨입니다", className: "cold" };
    } else if (temp > 0 && temp <= 10) {
        return { message: "현재 방문하기에는 추운 날씨입니다.", className: "cold" };
    } else if (temp > 10 && temp <= 15) {
        return { message: "현재 방문하기에는 선선한 날씨입니다.", className: "sunsun" };
    } else if (temp > 15 && temp <= 20) {
        return { message: "현재 방문하기에는 좋은 날씨입니다.", className: "verygood" };
    } else if (temp > 20 && temp <= 25) {
        return { message: "현재 방문하기에는 따뜻한 날씨입니다.", className: "good" };
    } else if (temp > 25 && temp <= 30) {
        return { message: "현재 방문하기에는 다소 더운 날씨입니다.", className: "hot" };
    } else if (temp > 30 && temp <= 35) {
        return { message: "현재 방문하기에는 매우 더운 날씨입니다.", className: "sohot" };
    } else if (temp > 35) {
        return { message: "현재 방문하기에는 불쾌할 수 있는 더운 날씨입니다.", className: "veryhot" };
    } else {
        return { message: "현재 방문하기는 적합하지 않은 날씨입니다.", className: "felse" };
    }
};


export const getWeatherMent = (weather) => {
    const temp = weather.main.temp;
    const humidity = weather.main.humidity;
    const windSpeed = weather.wind.speed;
    const weatherMain = weather.weather[0].main;
    const month = new Date().getMonth() + 1;  // 월을 1부터 시작하도록 조정

    if (temp < 0) {
        return "현재 날씨가 매우 춥습니다. 따뜻하게 입고 나가세요.";
    } else if (temp >= 0 && temp < 10) {
        return "현재 날씨가 추우니 외출 시 옷을 따뜻하게 입으세요.";
    } else if (temp >= 10 && temp < 20) {
        if (humidity < 40) {
            return "현재 날씨가 선선하고 건조합니다. 피부 보습에 신경 쓰세요.";
        } else {
            return "현재 날씨가 선선합니다. 나들이 가기에 좋은 날씨입니다.";
        }
    } else if (temp >= 20 && temp < 30) {
        if (humidity > 70) {
            return "현재 날씨가 덥고 습합니다. 시원한 음료를 준비하세요.";
        } else {
            return "현재 날씨가 따뜻합니다. 야외 활동하기 좋은 날씨입니다.";
        }
    } else if (temp >= 30) {
        if (humidity > 70) {
            return "현재 날씨가 매우 덥고 습합니다. 충분한 수분을 섭취하세요.";
        } else if (windSpeed > 5) {
            return "현재 날씨가 덥지만 바람이 불어 다소 시원합니다. 야외 활동 시 주의하세요.";
        } else {
            return "현재 날씨가 매우 덥습니다. 외출 시 주의하세요.";
        }
    } else {
        return "현재 날씨 정보를 불러오지 못했습니다.";
    }
};