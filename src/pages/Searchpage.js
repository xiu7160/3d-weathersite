import React, { useEffect, useState, useRef } from "react";
import { getCityWeather } from "../utils/weatherApi";
import { anycities } from "../utils/anycities"; // 연관 도시를 가져오는 API 함수
import { Link } from "react-router-dom";
import AlertBox from "../components/Search/AlertBox";

const Searchpage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [relatedCities, setRelatedCities] = useState([]);
    const [visibleCities, setVisibleCities] = useState([]); // 화면에 보이는 도시 목록
    const [showAllCities, setShowAllCities] = useState(false); // 모든 도시 표시 여부
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1); // 선택된 항목의 인덱스
    const [bookmarkedCities, setBookmarkedCities] = useState([]);
    const [showAlert, setShowAlert] = useState(false); // 팝업창 상태
    const [blink, setBlink] = useState(false); // 깜빡임 상태
    const itemRefs = useRef([]);

    useEffect(() => {
        const savedBookmarks = localStorage.getItem("bookmarkedCities");
        if (savedBookmarks) {
        setBookmarkedCities(JSON.parse(savedBookmarks));
        console.log("로컬 스토리지에서 즐겨찾기 목록을 가져왔습니다:", JSON.parse(savedBookmarks));
        }
    }, []); // 컴포넌트가 처음 마운트될 때 한 번만 호출

    useEffect(() => {
        // 즐겨찾기 목록이 변경될 때만 로컬 스토리지에 저장
        if (bookmarkedCities.length > 0) {
        localStorage.setItem("bookmarkedCities", JSON.stringify(bookmarkedCities));
        }
    }, [bookmarkedCities]);

    const handleInputChange = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setSelectedItemIndex(-1);
        setShowAllCities(false); // 검색어가 변경될 때 모든 도시 표시 여부 초기화

        try {
        if (query.trim() !== "") {
            const cities = await anycities(query);
            setRelatedCities(cities);
            setVisibleCities(cities.slice(0, 13));
        } else {
            setRelatedCities([]); // 검색어가 비어있는 경우 연관 검색어 목록을 초기화
            setVisibleCities([]);
        }
        } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
        }
    };

    const handleKeyDown = (e) => {
        if (visibleCities.length === 0) return;

        if (e.key === "ArrowDown") {
        setSelectedItemIndex((prevIndex) => {
            const newIndex = prevIndex < visibleCities.length - 1 ? prevIndex + 1 : prevIndex;
            itemRefs.current[newIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            return newIndex;
        });
        } else if (e.key === "ArrowUp") {
        setSelectedItemIndex((prevIndex) => {
            const newIndex = prevIndex > 0 ? prevIndex - 1 : 0;
            itemRefs.current[newIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            return newIndex;
        });
        } else if (e.key === "Enter") {
        handleCityClick(visibleCities[selectedItemIndex]);
        }
    };

    const handleCityClick = (city) => {
        setSearchQuery(city);
        setRelatedCities([]);
        setVisibleCities([]);
    };

    const handleBookmarkToggle = (city) => {
        if (bookmarkedCities.includes(city)) {
        setBookmarkedCities(bookmarkedCities.filter((item) => item !== city));
        } else {
        if (bookmarkedCities.length >= 5) {
            setShowAlert(true); // 팝업창 표시
            setBlink(true); // 깜빡임 효과 활성화
            setTimeout(() => {
            setBlink(false);
            setTimeout(() => setBlink(true), 200); // 0.2초 후 깜빡임 효과 다시 활성화
            setTimeout(() => setBlink(false), 400); // 0.4초 후 깜빡임 효과 비활성화
            }, 200); // 0.2초 후 깜빡임 효과 비활성화
            return;
        }
        setBookmarkedCities((prevBookmarks) => [...prevBookmarks, city]);
        }
    };

    const handleSearch = async () => {
        console.log("검색어:", searchQuery);

        try {
        const cityWeatherData = await getCityWeather(searchQuery);
        console.log("도시 날씨 데이터:", cityWeatherData);
        } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
        }
    };

    const handleShowAllCities = () => {
        setShowAllCities(true);
        setVisibleCities(relatedCities);
    };

    return (
        <div className="modal-content">
        <Link to="/">
            <div className="x-btn"></div>
        </Link>
        <div className="search-container">
            <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="도시 이름을 입력하세요"
            />
            <button className="search-btn" onClick={handleSearch}>Search</button>
            {visibleCities.length > 0 && (
            <div className="related-cities">
                <ul style={{ maxHeight: "200px", overflowY: "auto" }}>
                {visibleCities.map((city, index) => (
                    <li
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className={index === selectedItemIndex ? "selected" : ""}
                    onClick={() => handleCityClick(city)}
                    >
                    {city}
                    <span
                        className="bookmark-icon"
                        onClick={(e) => {
                        e.stopPropagation();
                        handleBookmarkToggle(city);
                        }}
                    >
                        {bookmarkedCities.includes(city) ? "⭐️" : "☆"}
                    </span>
                    </li>
                ))}
                </ul>
                {relatedCities.length > 6 && !showAllCities && (
                <div className="more-cities" onClick={handleShowAllCities}>
                    + {relatedCities.length - 6}개의 추가 항목
                </div>
                )}
            </div>
            )}
        </div>
        {showAlert && (
            <AlertBox
            message="즐겨찾기 개수는 최대 5개 입니다!"
            onClose={() => setShowAlert(false)}
            blink={blink}
            />
        )}
        </div>
    );
};

export default Searchpage;





//검색창에서 페이지 바로 이동 추가
// import React, { useEffect, useState, useRef } from "react";
// import { getCityWeather } from "../utils/weatherApi";
// import { anycities } from "../utils/anycities"; // 연관 도시를 가져오는 API 함수
// import { Link, useNavigate } from "react-router-dom";
// import AlertBox from "../components/Search/AlertBox";

// const Searchpage = () => {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [relatedCities, setRelatedCities] = useState([]);
//     const [visibleCities, setVisibleCities] = useState([]); // 화면에 보이는 도시 목록
//     const [showAllCities, setShowAllCities] = useState(false); // 모든 도시 표시 여부
//     const [selectedItemIndex, setSelectedItemIndex] = useState(-1); // 선택된 항목의 인덱스
//     const [bookmarkedCities, setBookmarkedCities] = useState([]);
//     const [showAlert, setShowAlert] = useState(false); // 팝업창 상태
//     const [blink, setBlink] = useState(false); // 깜빡임 상태
//     const itemRefs = useRef([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const savedBookmarks = localStorage.getItem("bookmarkedCities");
//         if (savedBookmarks) {
//             setBookmarkedCities(JSON.parse(savedBookmarks));
//             console.log("로컬 스토리지에서 즐겨찾기 목록을 가져왔습니다:", JSON.parse(savedBookmarks));
//         }
//     }, []); // 컴포넌트가 처음 마운트될 때 한 번만 호출

//     useEffect(() => {
//         // 즐겨찾기 목록이 변경될 때만 로컬 스토리지에 저장
//         if (bookmarkedCities.length > 0) {
//             localStorage.setItem("bookmarkedCities", JSON.stringify(bookmarkedCities));
//         }
//     }, [bookmarkedCities]);

//     const handleInputChange = async (e) => {
//         const query = e.target.value;
//         setSearchQuery(query);
//         setSelectedItemIndex(-1);
//         setShowAllCities(false); // 검색어가 변경될 때 모든 도시 표시 여부 초기화

//         try {
//             if (query.trim() !== "") {
//                 const cities = await anycities(query);
//                 setRelatedCities(cities);
//                 setVisibleCities(cities.slice(0, 13));
//             } else {
//                 setRelatedCities([]); // 검색어가 비어있는 경우 연관 검색어 목록을 초기화
//                 setVisibleCities([]);
//             }
//         } catch (error) {
//             console.error("API 호출 중 오류 발생:", error);
//         }
//     };

//     const handleKeyDown = (e) => {
//         if (visibleCities.length === 0) return;

//         if (e.key === "ArrowDown") {
//             setSelectedItemIndex((prevIndex) => {
//                 const newIndex = prevIndex < visibleCities.length - 1 ? prevIndex + 1 : prevIndex;
//                 itemRefs.current[newIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
//                 return newIndex;
//             });
//         } else if (e.key === "ArrowUp") {
//             setSelectedItemIndex((prevIndex) => {
//                 const newIndex = prevIndex > 0 ? prevIndex - 1 : 0;
//                 itemRefs.current[newIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
//                 return newIndex;
//             });
//         } else if (e.key === "Enter") {
//             handleCityClick(visibleCities[selectedItemIndex]);
//         }
//     };

//     const handleCityClick = (city) => {
//         setSearchQuery(city);
//         setRelatedCities([]);
//         setVisibleCities([]);
//         navigate(`/${city.toLowerCase().replace(/\s+/g, '')}`); // 도시 페이지로 이동
//     };

//     const handleBookmarkToggle = (city) => {
//         if (bookmarkedCities.includes(city)) {
//             setBookmarkedCities(bookmarkedCities.filter((item) => item !== city));
//         } else {
//             if (bookmarkedCities.length >= 5) {
//                 setShowAlert(true); // 팝업창 표시
//                 setBlink(true); // 깜빡임 효과 활성화
//                 setTimeout(() => {
//                     setBlink(false);
//                     setTimeout(() => setBlink(true), 200); // 0.2초 후 깜빡임 효과 다시 활성화
//                     setTimeout(() => setBlink(false), 400); // 0.4초 후 깜빡임 효과 비활성화
//                 }, 200); // 0.2초 후 깜빡임 효과 비활성화
//                 return;
//             }
//             setBookmarkedCities((prevBookmarks) => [...prevBookmarks, city]);
//         }
//     };

//     const handleSearch = async () => {
//         console.log("검색어:", searchQuery);

//         try {
//             const cityWeatherData = await getCityWeather(searchQuery);
//             console.log("도시 날씨 데이터:", cityWeatherData);
//         } catch (error) {
//             console.error("API 호출 중 오류 발생:", error);
//         }
//     };

//     const handleShowAllCities = () => {
//         setShowAllCities(true);
//         setVisibleCities(relatedCities);
//     };

//     return (
//         <div className="modal-content">
//             <Link to="/">
//                 <div className="x-btn"></div>
//             </Link>
//             <div className="search-container">
//                 <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={handleInputChange}
//                     onKeyDown={handleKeyDown}
//                     placeholder="도시 이름을 입력하세요"
//                 />
//                 <button className="search-btn" onClick={handleSearch}>Search</button>
//                 {visibleCities.length > 0 && (
//                     <div className="related-cities">
//                         <ul style={{ maxHeight: "200px", overflowY: "auto" }}>
//                             {visibleCities.map((city, index) => (
//                                 <li
//                                     key={index}
//                                     ref={(el) => (itemRefs.current[index] = el)}
//                                     className={index === selectedItemIndex ? "selected" : ""}
//                                     onClick={() => handleCityClick(city)}
//                                 >
//                                     {city}
//                                     <span
//                                         className="bookmark-icon"
//                                         onClick={(e) => {
//                                             e.stopPropagation();
//                                             handleBookmarkToggle(city);
//                                         }}
//                                     >
//                                         {bookmarkedCities.includes(city) ? "⭐️" : "☆"}
//                                     </span>
//                                 </li>
//                             ))}
//                         </ul>
//                         {relatedCities.length > 6 && !showAllCities && (
//                             <div className="more-cities" onClick={handleShowAllCities}>
//                                 + {relatedCities.length - 6}개의 추가 항목
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//             {showAlert && (
//                 <AlertBox
//                     message="즐겨찾기 개수는 최대 5개 입니다!"
//                     onClose={() => setShowAlert(false)}
//                     blink={blink}
//                 />
//             )}
//         </div>
//     );
// };

// export default Searchpage;