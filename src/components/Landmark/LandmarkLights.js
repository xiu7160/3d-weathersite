const LandmarkLights = () => {
    return(
        <>
            <ambientLight intensity={1.4} color="#ffffff" /> 
            <directionalLight position={[-50, 160, -80]} intensity={8} color="rgb(201, 253, 253)" />
        </>
    );
}

export default LandmarkLights;
