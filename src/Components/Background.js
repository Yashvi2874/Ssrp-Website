import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarBackground = ({ children }) => {
    const containerRef = useRef();
    const rendererRef = useRef();
    const cameraRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });

        const positions = [];
        for (let i = 0; i < 10000; i++) {
            const x = THREE.MathUtils.randFloatSpread(2000);
            const y = THREE.MathUtils.randFloatSpread(2000);
            const z = THREE.MathUtils.randFloatSpread(2000);
            positions.push(x, y, z);
        }
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        const starField = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starField);

        const animate = () => {
            requestAnimationFrame(animate);

            starField.rotation.x += 0.0005;
            starField.rotation.y += 0.0005;

            rendererRef.current.render(scene, cameraRef.current);
        };

        animate();

        const handleWindowResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
            containerRef.current.removeChild(rendererRef.current.domElement);
        };
    }, []);

    return <div ref={containerRef}></div>;
};

export default StarBackground;

