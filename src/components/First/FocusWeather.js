import { useBounds } from "@react-three/drei";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function FocusWeather({ children, disableFocus }) {
    const location = useLocation();
    const bounds = useBounds();

    const handleClick = (e) => {
        if (disableFocus) return; // disableFocus가 true이면 클릭 이벤트 무시
        e.stopPropagation();
        bounds.refresh(e.object).fit();
    };

    useEffect(() => {
        if (location.pathname === "/" && !disableFocus) {
            bounds.refresh().fit()
        }
    }, [location, bounds, disableFocus]);

    return (
        <group 
            onClick={handleClick} 
            onPointerMissed={(e) => e.button === 0 && !disableFocus && bounds.refresh().fit()}>
            {children}
        </group>
    );
}


//원본
// import { useBounds } from "@react-three/drei"
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export function FocusWeather({ children }) {
//     const location = useLocation()
//     const bounds = useBounds()
//     const handleClick = (e) => {
//         e.stopPropagation();
//         bounds.refresh(e.object).fit();
//     };

//     useEffect(()=>{
//         if(location.pathname == "/"){
//             bounds.refresh().fit()
//         }
//     }, [location]);

//     return (
//         <group 
//             onClick={handleClick} 
//             onPointerMissed={(e) => e.button === 0 && bounds.refresh().fit()}>
//             {children}
//         </group>
//     )
// }
