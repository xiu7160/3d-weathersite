const VillageLights = () => {
    return(
        <>
            <ambientLight intensity={1.4} color="#ffffff" /> 
            <directionalLight position={[-250, 160, -80]} intensity={5.5} color="rgb(201, 253, 253)" />
        </>
    );
}

export default VillageLights;
