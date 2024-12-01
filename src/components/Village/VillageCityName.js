import { Html } from "@react-three/drei";

export function VillageCityName(props){
    const { name, position } = props;

    return (
        <Html center position={position}>
            <div className="VillagecityName">
                {name}
            </div>
        </Html>
    );
}
