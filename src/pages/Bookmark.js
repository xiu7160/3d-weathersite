import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Bookmark = () => {
    const [bookmarkedCities, setBookmarkedCities] = useState([]);

    useEffect(() => {
        const savedBookmarks = localStorage.getItem("bookmarkedCities");
        if (savedBookmarks) {
            setBookmarkedCities(JSON.parse(savedBookmarks));
        }
    }, []);

    return (
        <div>
            <div className="bookmark-content">
                <Link to="/">
                    <div className="x-btn"></div>
                </Link>
                <h1>즐겨찾기 목록</h1>
                <ul>
                    {bookmarkedCities.map((city, index) => (
                        <li key={index}>{city}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Bookmark;

// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";

// const Bookmark = () => {
//     const [bookmarkedCities, setBookmarkedCities] = useState([]);

//     useEffect(() => {
//         const savedBookmarks = localStorage.getItem("bookmarkedCities");
//         if (savedBookmarks) {
//             setBookmarkedCities(JSON.parse(savedBookmarks));
//         }
//     }, []);

//     return (
//         <div>
//                 <div className="bookmark-content">
//                 <Link to="/">
//                     <div className="x-btn"></div>
//                 </Link>
//                 <h1>즐겨찾기 목록</h1>
//                 <ul>
//                     {bookmarkedCities.map((city, index) => (
//                     <li key={index}>{city}</li>
//                     ))}
//                 </ul>
//                 </div>
//         </div>
//     );
// };

// export default Bookmark;



// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const Bookmark = () => {
//     const canvasRef = useRef();

//     useEffect(() => {
//         const renderer = new THREE.WebGLRenderer();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         canvasRef.current.appendChild(renderer.domElement);

//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         camera.position.z = 5;

//         const scene = new THREE.Scene();

//         const geometry = new THREE.BoxGeometry();
//         const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//         const cube = new THREE.Mesh(geometry, material);
//         scene.add(cube);

//         const animate = () => {
//             requestAnimationFrame(animate);

//             cube.rotation.x += 0.01;
//             cube.rotation.y += 0.01;

//             renderer.render(scene, camera);
//         };

//         animate();

//         return () => {
//             renderer.domElement.remove();
//         };
//     }, []);

//     return (
//         <div ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />
//     );
// };

// export default Bookmark;
