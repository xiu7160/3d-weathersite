import Home from "../pages";
import Losangeles from "../pages/Citys/Losangeles";
import NewYork from "../pages/Citys/NewYork";
import Osaka from "../pages/Citys/Osaka";
import Portofspain from "../pages/Citys/Portofspain";
import Search from "../pages/Searchpage";
import Seoul from "../pages/Citys/Seoul";
import { getCityWeather } from "./weatherApi";
import Hochimin from "../pages/Citys/Hochimin";
import BookmarkPage from "../pages/Bookmark";
import Villageindex from "../pages/Anyindex/Villageindex";
import Afterindex from "../pages/Anyindex/Afterindex";

import AbuDhabi from "../pages/Citys/AbuDhabi";
import Accra from "../pages/Citys/Accra";
import Abuja from "../pages/Citys/Abuja";
import Busan from "../pages/Citys/Busan";
import Berlin from "../pages/Citys/Berlin";
import Barcelona from "../pages/Citys/Barcelona";
import Baghdad from "../pages/Citys/Baghdad";
import Chengdu from "../pages/Citys/Chengdu";
import Cairo from "../pages/Citys/Cairo";
import Chicago from "../pages/Citys/Chicago";
import Dhaka from "../pages/Citys/Dhaka";
import Dubai from "../pages/Citys/Dubai";
import Fukuoka from "../pages/Citys/Fukuoka";
import FortdeFrance from "../pages/Citys/FortdeFrance";
import Gwangju from "../pages/Citys/Gwangju";
import Gitega from "../pages/Citys/Gitega";
import Hamburg from "../pages/Citys/Hamburg";
import Hanoi from "../pages/Citys/Hanoi";
import Havana from "../pages/Citys/Havana";
import Helsinki from "../pages/Citys/Helsinki";
import HongKong from "../pages/Citys/HongKong";
import Incheon from "../pages/Citys/Incheon";
import Isfahan from "../pages/Citys/Isfahan";
import Jaipur from "../pages/Citys/Jaipur";
import Jakarta from "../pages/Citys/Jakarta";
import Jeddah from "../pages/Citys/Jeddah";
import Kampala from "../pages/Citys/Kampala";
import Kyoto from "../pages/Citys/Kyoto";
import Kobe from "../pages/Citys/Kobe";
import Lagos from "../pages/Citys/Lagos";
import Lisbon from "../pages/Citys/Lisbon";
import Lome from "../pages/Citys/Lome";
import London from "../pages/Citys/London";
import Luxembourg from "../pages/Citys/Luxembourg";
import Manila from "../pages/Citys/Manila";
import MexicoCity from "../pages/Citys/MexicoCity";
import Monaco from "../pages/Citys/Monaco";
import Nagoya from "../pages/Citys/Nagoya";
import Noumea from "../pages/Citys/Noumea";
import Oslo from "../pages/Citys/Oslo";
import Ottawa from "../pages/Citys/Ottawa";
import Philadelphia from "../pages/Citys/Philadelphia";
import Paris from "../pages/Citys/Paris";
import Pyongyang from "../pages/Citys/Pyongyang";
import Rome from "../pages/Citys/Rome";
import Recife from "../pages/Citys/Recife";
import Saipan from "../pages/Citys/Saipan";
import SanAntonio from "../pages/Citys/SanAntonio";
import SanFrancisco from "../pages/Citys/SanFrancisco";
import Santiago from "../pages/Citys/Santiago";
import SaoPaulo from "../pages/Citys/SaoPaulo";
import Seattle from "../pages/Citys/Seattle";
import Shanghai from "../pages/Citys/Shanghai";
import Stockholm from "../pages/Citys/Stockholm";
import Sydney from "../pages/Citys/Sydney";
import Tokyo from "../pages/Citys/Tokyo";
import Toronto from "../pages/Citys/Toronto";
import Vancouver from "../pages/Citys/Vancouver";
import Vientiane from "../pages/Citys/Vientiane";
import Washington from "../pages/Citys/Washington";
import Yokohama from "../pages/Citys/Yokohama";
import Zurich from "../pages/Citys/Zurich";
import Giza from "../pages/Citys/Giza";
import Agra from "../pages/Citys/Agra";
import Pisa from "../pages/Citys/Pisa";
import RiodeJaneiro from "../pages/Citys/RiodeJaneiro";
import Athens from "../pages/Citys/Athens";
import Wiltshire from "../pages/Citys/Wiltshire";
import Orlando from "../pages/Citys/Orlando";
import Florence from "../pages/Citys/Florence";
import Yangon from "../pages/Citys/Yangon";
import NewYorkLandmark from "../pages/Landmark/NewYorkLandmark";
import SeoulLandmark from "../pages/Landmark/SeoulLandmark";
import WiltshireLandmark from "../pages/Landmark/WiltshireLandmark";
import AthensLandmark from "../pages/Landmark/AthensLandmark";
import YangonLandmark from "../pages/Landmark/YangonLandmark";
import FlorenceLandmark from "../pages/Landmark/FlorenceLandmark";
import DubaiLandmark from "../pages/Landmark/DubaiLandmark";
import RomeLandmark from "../pages/Landmark/RomeLandmark";
import Miryang from "../pages/Citys/Miryang";
import Gimhae from "../pages/Citys/Gimhae";
import Daegu from "../pages/Citys/Daegu";
import Ulsan from "../pages/Citys/Ulsan";
import Daejeon from "../pages/Citys/Daejeon";
import Jeju from "../pages/Citys/Jeju";


import Mokpo from "../pages/Citys/Mokpo";
import Muan from "../pages/Citys/Muan";
import Boseong from "../pages/Citys/Boseong";
import Suncheon from "../pages/Citys/Suncheon";
import Shinan from "../pages/Citys/Shinan";
import Yeosu from "../pages/Citys/Yeosu";
import Yeonggwang from "../pages/Citys/Yeonggwang";
import Wando from "../pages/Citys/Wando";
import Jangseong from "../pages/Citys/Jangseong";
import Hampyeong from "../pages/Citys/Hampyeong";
import Haenam from "../pages/Citys/Haenam";
import Hwasun from "../pages/Citys/Hwasun";
import Gyeongsan from "../pages/Citys/Gyeongsan";
import Gyeongju from "../pages/Citys/Gyeongju";
import Goryeong from "../pages/Citys/Goryeong";
import Gumi from "../pages/Citys/Gumi";
import Gunwi from "../pages/Citys/Gunwi";
import Gimcheon from "../pages/Citys/Gimcheon";
import Mungyeong from "../pages/Citys/Mungyeong";
import Bonghwa from "../pages/Citys/Bonghwa";
import Sangju from "../pages/Citys/Sangju";
import Seongju from "../pages/Citys/Seongju";
import Andong from "../pages/Citys/Andong";
import Yeongyang from "../pages/Citys/Yeongyang";
import Yeongju from "../pages/Citys/Yeongju";
import Yecheon from "../pages/Citys/Yecheon";
import Uiseong from "../pages/Citys/Uiseong";
import Cheongdo from "../pages/Citys/Cheongdo";
import Cheongsong from "../pages/Citys/Cheongsong";
import Chilgok from "../pages/Citys/Chilgok";
import Pohang from "../pages/Citys/Pohang";
import Goseong from "../pages/Citys/Goseong";
import Namhae from "../pages/Citys/Namhae";
import Sacheon from "../pages/Citys/Sacheon";
import Yangsan from "../pages/Citys/Yangsan";
import Uiryeong from "../pages/Citys/Uiryeong";
import Jinju from "../pages/Citys/Jinju";
import Changnyeong from "../pages/Citys/Changnyeong";
import Changwon from "../pages/Citys/Changwon";
import Hadong from "../pages/Citys/Hadong";
import Haman from "../pages/Citys/Haman";
import Hamyang from "../pages/Citys/Hamyang";
import Hapcheon from "../pages/Citys/Hapcheon";


export const routerInfo = [
    {
        path: '/',
        element : <Home/>,
        errorElement: <div className="layout-detail">Error</div>,
        children : [
            {
                path: "searchpage",
                element: <Search />,
            },
            {
                path: "bookmark",
                element: <BookmarkPage />,
            },
            {
                path: 'seoul',
                element : <Seoul/>,
                loader: async()=>{
                    return getCityWeather('Seoul')
                }
            },
            {
                path: 'hochiminhcity',
                element : <Hochimin />,
                loader: async()=>{
                    return getCityWeather('Ho chi minh City')
                }
            },
            {
                path: "newyork",
                element: <NewYork />,
                loader: async () => {
                    return getCityWeather('New York')
                },
            },
            {
                path: "osaka",
                element: <Osaka />,
                loader: async () => {
                    return getCityWeather('Osaka')
                },
            },
            {
                path: "losangeles",
                element: <Losangeles />,
                loader: async () => {
                    return getCityWeather('Los Angeles')
                },
            },
            {
                path: "Portofspain",
                element: <Portofspain />,
                loader: async () => {
                    return getCityWeather('Port of Spain')
                },
            },
            {
                path: "AbuDhabi",
                element: <AbuDhabi />,
                loader: async () => {
                    return getCityWeather('Abu Dhabi')
                },
            },
            {
                path: "Abuja",
                element: <Abuja />,
                loader: async () => {
                    return getCityWeather('Abuja')
                },
            },
            {
                path: "Accra",
                element: <Accra />,
                loader: async () => {
                    return getCityWeather('Accra')
                },
            },
            {
                path: "Busan",
                element: <Busan />,
                loader: async () => {
                    return getCityWeather('Busan')
                },
            },
            {
                path: "Berlin",
                element: <Berlin />,
                loader: async () => {
                    return getCityWeather('Berlin')
                },
            },
            {
                path: "Barcelona",
                element: <Barcelona />,
                loader: async () => {
                    return getCityWeather('Barcelona')
                },
            },
            {
                path: "Baghdad",
                element: <Baghdad />,
                loader: async () => {
                    return getCityWeather('Baghdad')
                },
            },
            {
                path: "Chengdu",
                element: <Chengdu />,
                loader: async () => {
                    return getCityWeather('Chengdu')
                },
            },
            {
                path: "Cairo",
                element: <Cairo />,
                loader: async () => {
                    return getCityWeather('Cairo')
                },
            },
            {
                path: "Chicago",
                element: <Chicago />,
                loader: async () => {
                    return getCityWeather('Chicago')
                },
            },
            {
                path: "Dhaka",
                element: <Dhaka />,
                loader: async () => {
                    return getCityWeather('Dhaka')
                },
            },
            {
                path: "Dubai",
                element: <Dubai />,
                loader: async () => {
                    return getCityWeather('Dubai')
                },
            },
            {
                path: "Fukuoka",
                element: <Fukuoka />,
                loader: async () => {
                    return getCityWeather('Fukuoka')
                },
            },
            {
                path: "FortdeFrance",
                element: <FortdeFrance />,
                loader: async () => {
                    return getCityWeather('Fort-de-France')
                },
            },
            {
                path: "Gwangju",
                element: <Gwangju />,
                loader: async () => {
                    return getCityWeather('Gwangju')
                },
            },
            {
                path: "Gitega",
                element: <Gitega />,
                loader: async () => {
                    return getCityWeather('Gitega')
                },
            },
            {
                path: "Hamburg",
                element: <Hamburg />,
                loader: async () => {
                    return getCityWeather('Hamburg')
                },
            },
            {
                path: "Hanoi",
                element: <Hanoi />,
                loader: async () => {
                    return getCityWeather('Hanoi')
                },
            },
            {
                path: "Havana",
                element: <Havana />,
                loader: async () => {
                    return getCityWeather('Havana')
                },
            },
            {
                path: "Helsinki",
                element: <Helsinki />,
                loader: async () => {
                    return getCityWeather('Helsinki')
                },
            },
            {
                path: "HongKong",
                element: <HongKong />,
                loader: async () => {
                    return getCityWeather('Hong Kong')
                },
            },
            {
                path: "Incheon",
                element: <Incheon />,
                loader: async () => {
                    return getCityWeather('Incheon')
                },
            },
            {
                path: "Isfahan",
                element: <Isfahan />,
                loader: async () => {
                    return getCityWeather('Isfahan')
                },
            },
            {
                path: "Jaipur",
                element: <Jaipur />,
                loader: async () => {
                    return getCityWeather('Jaipur')
                },
            },
            {
                path: "Jakarta",
                element: <Jakarta />,
                loader: async () => {
                    return getCityWeather('Jakarta')
                },
            },
            {
                path: "Jeddah",
                element: <Jeddah />,
                loader: async () => {
                    return getCityWeather('Jeddah')
                },
            },
            {
                path: "Kampala",
                element: <Kampala />,
                loader: async () => {
                    return getCityWeather('Kampala')
                },
            },
            {
                path: "Kyoto",
                element: <Kyoto />,
                loader: async () => {
                    return getCityWeather('Kyoto')
                },
            },
            {
                path: "Kobe",
                element: <Kobe />,
                loader: async () => {
                    return getCityWeather('Kobe')
                },
            },
            {
                path: "Lagos",
                element: <Lagos />,
                loader: async () => {
                    return getCityWeather('Lagos')
                },
            },
            {
                path: "Lisbon",
                element: <Lisbon />,
                loader: async () => {
                    return getCityWeather('Lisbon')
                },
            },
            {
                path: "Lome",
                element: <Lome />,
                loader: async () => {
                    return getCityWeather('Lome')
                },
            },
            {
                path: "London",
                element: <London />,
                loader: async () => {
                    return getCityWeather('London')
                },
            },
            {
                path: "Luxembourg",
                element: <Luxembourg />,
                loader: async () => {
                    return getCityWeather('Luxembourg')
                },
            },
            {
                path: "Manila",
                element: <Manila />,
                loader: async () => {
                    return getCityWeather('Manila')
                },
            },
            {
                path: "MexicoCity",
                element: <MexicoCity />,
                loader: async () => {
                    return getCityWeather('Mexico City')
                },
            },
            {
                path: "Monaco",
                element: <Monaco />,
                loader: async () => {
                    return getCityWeather('Monaco')
                },
            },
            {
                path: "Nagoya",
                element: <Nagoya />,
                loader: async () => {
                    return getCityWeather('Nagoya')
                },
            },
            {
                path: "Noumea",
                element: <Noumea />,
                loader: async () => {
                    return getCityWeather('Noumea')
                },
            },
            {
                path: "Oslo",
                element: <Oslo />,
                loader: async () => {
                    return getCityWeather('Oslo')
                },
            },
            {
                path: "Ottawa",
                element: <Ottawa />,
                loader: async () => {
                    return getCityWeather('Ottawa')
                },
            },
            {
                path: "Philadelphia",
                element: <Philadelphia />,
                loader: async () => {
                    return getCityWeather('Philadelphia')
                },
            },
            {
                path: "Paris",
                element: <Paris />,
                loader: async () => {
                    return getCityWeather('Paris')
                },
            },
            {
                path: "Pyongyang",
                element: <Pyongyang />,
                loader: async () => {
                    return getCityWeather('Pyongyang')
                },
            },
            {
                path: "Rome",
                element: <Rome />,
                loader: async () => {
                    return getCityWeather('Rome')
                },
            },
            {
                path: "Recife",
                element: <Recife />,
                loader: async () => {
                    return getCityWeather('Recife')
                },
            },
            {
                path: "Saipan",
                element: <Saipan />,
                loader: async () => {
                    return getCityWeather('Saipan')
                },
            },
            {
                path: "SanAntonio",
                element: <SanAntonio />,
                loader: async () => {
                    return getCityWeather('San Antonio')
                },
            },
            {
                path: "SanFrancisco",
                element: <SanFrancisco />,
                loader: async () => {
                    return getCityWeather('San Francisco')
                },
            },
            {
                path: "Santiago",
                element: <Santiago />,
                loader: async () => {
                    return getCityWeather('Santiago')
                },
            },
            {
                path: "SaoPaulo",
                element: <SaoPaulo />,
                loader: async () => {
                    return getCityWeather('Sao Paulo')
                },
            },
            {
                path: "Seattle",
                element: <Seattle />,
                loader: async () => {
                    return getCityWeather('Seattle')
                },
            },
            {
                path: "Shanghai",
                element: <Shanghai />,
                loader: async () => {
                    return getCityWeather('Shanghai')
                },
            },
            {
                path: "Stockholm",
                element: <Stockholm/>,
                loader: async () => {
                    return getCityWeather('Stockholm')
                },
            },
            {
                path: "Sydney",
                element: <Sydney />,
                loader: async () => {
                    return getCityWeather('Sydney')
                },
            },
            {
                path: "Tokyo",
                element: <Tokyo />,
                loader: async () => {
                    return getCityWeather('Tokyo')
                },
            },
            {
                path: "Toronto",
                element: <Toronto />,
                loader: async () => {
                    return getCityWeather('Toronto')
                },
            },
            {
                path: "Vancouver",
                element: <Vancouver />,
                loader: async () => {
                    return getCityWeather('Vancouver')
                },
            },
            {
                path: "Vientiane",
                element: <Vientiane />,
                loader: async () => {
                    return getCityWeather('Vientiane')
                },
            },
            {
                path: "Washington",
                element: <Washington />,
                loader: async () => {
                    return getCityWeather('Washington')
                },
            },
            {
                path: "Yokohama",
                element: <Yokohama />,
                loader: async () => {
                    return getCityWeather('Yokohama')
                },
            },
            {
                path: "Zurich",
                element: <Zurich />,
                loader: async () => {
                    return getCityWeather('Zurich')
                },
            },
            {
                path: "Giza",
                element: <Giza />,
                loader: async () => {
                    return getCityWeather('Giza')
                },
            },
            {
                path: "Agra",
                element: <Agra />,
                loader: async () => {
                    return getCityWeather('Agra')
                },
            },
            {
                path: "RiodeJaneiro",
                element: <RiodeJaneiro />,
                loader: async () => {
                    return getCityWeather('Rio de Janeiro')
                },
            },
            {
                path: "Pisa",
                element: <Pisa />,
                loader: async () => {
                    return getCityWeather('Pisa')
                },
            },
            {
                path: "Orlando",
                element: <Orlando />,
                loader: async () => {
                    return getCityWeather('Orlando')
                },
            },
            {
                path: "Wiltshire",
                element: <Wiltshire />,
                loader: async () => {
                    return getCityWeather('Wiltshire')
                },
            },
            {
                path: "Athens",
                element: <Athens />,
                loader: async () => {
                    return getCityWeather('Athens')
                },
            },
            {
                path: "Yangon",
                element: <Yangon />,
                loader: async () => {
                    return getCityWeather('Yangon')
                },
            },
            {
                path: "Florence",
                element: <Florence />,
                loader: async () => {
                    return getCityWeather('Florence')
                },
            },
            {
                path: "Miryang",
                element: <Miryang />,
                loader: async () => {
                    return getCityWeather('Miryang')
                },
            },
            {
                path: "Gimhae",
                element: <Gimhae />,
                loader: async () => {
                    return getCityWeather('Gimhae')
                },
            },
            {
                path: "Daegu",
                element: <Daegu />,
                loader: async () => {
                    return getCityWeather('Daegu')
                },
            },
            {
                path: "Daejeon",
                element: <Daejeon />,
                loader: async () => {
                    return getCityWeather('Daejeon')
                },
            },
            {
                path: "Ulsan",
                element: <Ulsan />,
                loader: async () => {
                    return getCityWeather('Ulsan')
                },
            },
            {
                path: "Jeju",
                element: <Jeju />,
                loader: async () => {
                    return getCityWeather('Jeju')
                },
            },
            {
                path: 'mokpo',
                element: <Mokpo />,
                loader: async () => {
                    return getCityWeather('Mokpo');
                }
            },
            {
                path: 'muan',
                element: <Muan />,
                loader: async () => {
                    return getCityWeather('Muan');
                }
            },
            {
                path: 'boseong',
                element: <Boseong />,
                loader: async () => {
                    return getCityWeather('Boseong');
                }
            },
            {
                path: 'suncheon',
                element: <Suncheon />,
                loader: async () => {
                    return getCityWeather('Suncheon');
                }
            },
            {
                path: 'shinan',
                element: <Shinan />,
                loader: async () => {
                    return getCityWeather('Shinan');
                }
            },
            {
                path: 'yeosu',
                element: <Yeosu />,
                loader: async () => {
                    return getCityWeather('Yeosu');
                }
            },
            {
                path: 'yeonggwang',
                element: <Yeonggwang />,
                loader: async () => {
                    return getCityWeather('Yeonggwang');
                }
            },
            {
                path: 'wando',
                element: <Wando />,
                loader: async () => {
                    return getCityWeather('Wando');
                }
            },
            {
                path: 'jangseong',
                element: <Jangseong />,
                loader: async () => {
                    return getCityWeather('Jangseong');
                }
            },
            {
                path: 'hampyeong',
                element: <Hampyeong />,
                loader: async () => {
                    return getCityWeather('Hampyeong');
                }
            },
            {
                path: 'haenam',
                element: <Haenam />,
                loader: async () => {
                    return getCityWeather('Haenam');
                }
            },
            {
                path: 'hwasun',
                element: <Hwasun />,
                loader: async () => {
                    return getCityWeather('Hwasun');
                }
            },
            {
                path: 'gyeongsan',
                element: <Gyeongsan />,
                loader: async () => {
                    return getCityWeather('Gyeongsan');
                }
            },
            {
                path: 'gyeongju',
                element: <Gyeongju />,
                loader: async () => {
                    return getCityWeather('Gyeongju');
                }
            },
            {
                path: 'goryeong',
                element: <Goryeong />,
                loader: async () => {
                    return getCityWeather('Goryeong');
                }
            },
            {
                path: 'gumi',
                element: <Gumi />,
                loader: async () => {
                    return getCityWeather('Gumi');
                }
            },
            {
                path: 'gunwi',
                element: <Gunwi />,
                loader: async () => {
                    return getCityWeather('Gunwi');
                }
            },
            {
                path: 'gimcheon',
                element: <Gimcheon />,
                loader: async () => {
                    return getCityWeather('Gimcheon');
                }
            },
            {
                path: 'mungyeong',
                element: <Mungyeong />,
                loader: async () => {
                    return getCityWeather('Mungyeong');
                }
            },
            {
                path: 'bonghwa',
                element: <Bonghwa />,
                loader: async () => {
                    return getCityWeather('Bonghwa');
                }
            },
            {
                path: 'sangju',
                element: <Sangju />,
                loader: async () => {
                    return getCityWeather('Sangju');
                }
            },
            {
                path: 'seongju',
                element: <Seongju />,
                loader: async () => {
                    return getCityWeather('Seongju');
                }
            },
            {
                path: 'andong',
                element: <Andong />,
                loader: async () => {
                    return getCityWeather('Andong');
                }
            },
            {
                path: 'yeongyang',
                element: <Yeongyang />,
                loader: async () => {
                    return getCityWeather('Yeongyang');
                }
            },
            {
                path: 'yeongju',
                element: <Yeongju />,
                loader: async () => {
                    return getCityWeather('Yeongju');
                }
            },
            {
                path: 'yecheon',
                element: <Yecheon />,
                loader: async () => {
                    return getCityWeather('Yecheon');
                }
            },
            {
                path: 'uiseong',
                element: <Uiseong />,
                loader: async () => {
                    return getCityWeather('Uiseong');
                }
            },
            {
                path: 'cheongdo',
                element: <Cheongdo />,
                loader: async () => {
                    return getCityWeather('Cheongdo');
                }
            },
            {
                path: 'cheongsong',
                element: <Cheongsong />,
                loader: async () => {
                    return getCityWeather('Cheongsong');
                }
            },
            {
                path: 'chilgok',
                element: <Chilgok />,
                loader: async () => {
                    return getCityWeather('Chilgok');
                }
            },
            {
                path: 'pohang',
                element: <Pohang />,
                loader: async () => {
                    return getCityWeather('Pohang');
                }
            },
            {
                path: 'goseong',
                element: <Goseong />,
                loader: async () => {
                    return getCityWeather('Goseong');
                }
            },
            {
                path: 'namhae',
                element: <Namhae />,
                loader: async () => {
                    return getCityWeather('Namhae');
                }
            },
            {
                path: 'sacheon',
                element: <Sacheon />,
                loader: async () => {
                    return getCityWeather('Sacheon');
                }
            },
            {
                path: 'yangsan',
                element: <Yangsan />,
                loader: async () => {
                    return getCityWeather('Yangsan');
                }
            },
            {
                path: 'uiryeong',
                element: <Uiryeong />,
                loader: async () => {
                    return getCityWeather('Uiryeong');
                }
            },
            {
                path: 'jinju',
                element: <Jinju />,
                loader: async () => {
                    return getCityWeather('Jinju');
                }
            },
            {
                path: 'changnyeong',
                element: <Changnyeong />,
                loader: async () => {
                    return getCityWeather('Changnyeong');
                }
            },
            {
                path: 'changwon',
                element: <Changwon />,
                loader: async () => {
                    return getCityWeather('Changwon');
                }
            },
            {
                path: 'hadong',
                element: <Hadong />,
                loader: async () => {
                    return getCityWeather('Hadong');
                }
            },
            {
                path: 'haman',
                element: <Haman />,
                loader: async () => {
                    return getCityWeather('Haman');
                }
            },
            {
                path: 'hamyang',
                element: <Hamyang />,
                loader: async () => {
                    return getCityWeather('Hamyang');
                }
            },
            {
                path: 'hapcheon',
                element: <Hapcheon />,
                loader: async () => {
                    return getCityWeather('Hapcheon');
                }
            },
        ]
    },
    {
        path: "/Village",
        element: <Villageindex/>,
    },
    {
        path: "/After",
        element: <Afterindex/>,
    },
    {
        path: "/landmark",
        children: [
            {
                path: 'seoul',
                element: <SeoulLandmark />,
            },
            // {
            //     path: 'agra',
            //     element: <AgraLandmark />,
            // },
            {
                path: 'athens',
                element: <AthensLandmark />,
            },
            {
                path: 'dubai',
                element: <DubaiLandmark />,
            },
            {
                path: 'florence',
                element: <FlorenceLandmark />,
            },
            // {
            //     path: 'giza',
            //     element: <GizaLandmark />,
            // },
            // {
            //     path: 'london',
            //     element: <LondonLandmark />,
            // },
            // {
            //     path: 'losangeles',
            //     element: <LosAngelesLandmark />,
            // },
            // {
            //     path: 'moscow',
            //     element: <MoscowLandmark />,
            // },
            {
                path: 'new-york',
                element: <NewYorkLandmark />,
            },
            // {
            //     path: 'orlando',
            //     element: <OrlandoLandmark />,
            // },
            // {
            //     path: 'paris',
            //     element: <ParisLandmark />,
            // },
            // {
            //     path: 'pisa',
            //     element: <PisaLandmark />,
            // },
            // {
            //     path: 'riodejaneiro',
            //     element: <RiodeJaneiroLandmark />,
            // },
            {
                path: 'rome',
                element: <RomeLandmark />,
            },
            // {
            //     path: 'washington',
            //     element: <WashingtonLandmark />,
            // },
            {
                path: 'wiltshire',
                element: <WiltshireLandmark />,
            },
            {
                path: 'yangon',
                element: <YangonLandmark />,
            },
        ]
    }
]