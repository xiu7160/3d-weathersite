import React from "react";
import Landmark from "./Landmark";
import { SeoulLandmarkContent } from "./SeoulLandmarkContent";
import { NewYorkLandmarkContent } from "./NewYorkLandmarkContent";
import { AthensLandmarkContent } from "./AthensLandmarkContent";
import { DubaiLandmarkContent } from "./DubaiLandmarkContent";
import { WiltshireLandmarkContent } from "./WiltshireLandmarkContent";
import { RomeLandmarkContent } from "./RomeLandmarkContent";
import { YangonLandmarkContent } from "./YangonLandmarkContent";
import { FlorenceLandmarkContent } from "./FlorenceLandmarkContent";
import PrecipitationButton from "./precipitationButton";
import TemperatureButton from "./TemperatureButton";

const LandmarkScene = ({ cityName }) => {
    let LandmarkContentComponent;
    
    switch (cityName) {
        case 'Seoul':
            LandmarkContentComponent = SeoulLandmarkContent;
            break;
        case 'New York':
            LandmarkContentComponent = NewYorkLandmarkContent;
            break;
        case 'Athens':
            LandmarkContentComponent = AthensLandmarkContent;
            break;
        case 'Dubai':
            LandmarkContentComponent = DubaiLandmarkContent;
            break;
        case 'Wiltshire':
            LandmarkContentComponent = WiltshireLandmarkContent;
            break;
        case 'Rome':
            LandmarkContentComponent = RomeLandmarkContent;
            break;
        case 'Yangon':
            LandmarkContentComponent = YangonLandmarkContent;
            break;
        case 'Florence':
            LandmarkContentComponent = FlorenceLandmarkContent;
            break;
        default:
            LandmarkContentComponent = () => <div>Unknown city</div>;
            break;
    }

    return (
        <>
            <TemperatureButton cityName={cityName}/>
            <PrecipitationButton cityName={cityName}/>
            <LandmarkContentComponent cityName={cityName} />
            <Landmark cityName={cityName} />
        </>
    );
}

export default LandmarkScene;
