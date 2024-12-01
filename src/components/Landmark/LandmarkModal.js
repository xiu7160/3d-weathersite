import { Html } from '@react-three/drei';

const LandmarkModal = ({ isOpen, imageUrl, onClose }) => {
    return (
        <Html center>
            {isOpen && (
                <div className="landmarkmodal-overlay">
                    <div className="landmarkmodal">
                        {imageUrl && <img src={imageUrl} alt="Landmark Image" />}
                        <button onClick={onClose} className='x-button'>X</button>
                    </div>
                </div>
            )}
        </Html>
    );
};

export default LandmarkModal;
