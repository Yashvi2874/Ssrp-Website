import React, { useEffect, useRef } from 'react';
import { PerspectiveCamera, WebGLRenderer, Scene, BufferGeometry, PointsMaterial, Points, Float32BufferAttribute, MathUtils } from 'three';

const StarBackground = ({ children }) => {
  const containerRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();
  const requestAnimationFrameId = useRef();

  useEffect(() => {
    // Capture the container element to use in cleanup
    const containerElement = containerRef.current;

    // Initialize scene
    const scene = new Scene();

    // Initialize camera
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 800);
    camera.position.z = 300; // Set a better initial position for visibility
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new WebGLRenderer();
    renderer.setSize(
      Math.max(window.innerWidth, Math.min(document.querySelector('.relative')?.clientWidth || window.innerWidth, document.body.scrollWidth, document.documentElement.scrollWidth)),
      Math.max(window.innerHeight, Math.min(document.querySelector('.relative')?.clientHeight || window.innerHeight, document.body.scrollHeight, document.documentElement.scrollHeight))
    );
    containerElement.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create stars
    const starsGeometry = new BufferGeometry();
    const starsMaterial = new PointsMaterial({
      color: 0xffffff,
      size: 2,
      sizeAttenuation: false,
    });

    const positions = [];
    for (let i = 0; i < 800; i++) {
      const x = MathUtils.randFloatSpread(2000);
      const y = MathUtils.randFloatSpread(2000);
      const z = MathUtils.randFloatSpread(2000);
      positions.push(x, y, z);
    }
    starsGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3));

    const starField = new Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Animation loop
    const animate = () => {
      requestAnimationFrameId.current = requestAnimationFrame(animate);

      starField.rotation.x += 0.0002;
      starField.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleWindowResize = () => {
      const width = Math.min(document.querySelector('.relative')?.clientWidth || window.innerWidth, Math.max(document.body.scrollWidth, document.documentElement.scrollWidth));
      const height = Math.min(document.querySelector('.relative')?.clientHeight || window.innerHeight, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    // Handle scroll event
    const handleScroll = () => {
      const height = Math.min(document.querySelector('.relative')?.clientHeight || window.innerHeight, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
      const width = Math.min(document.querySelector('.relative')?.clientWidth || window.innerWidth, Math.max(document.body.scrollWidth, document.documentElement.scrollWidth));
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestAnimationFrameId.current);

      // Use the captured container element in the cleanup
      if (containerElement && rendererRef.current) {
        containerElement.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default StarBackground;
