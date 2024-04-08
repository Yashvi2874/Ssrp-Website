import { OrbitControls } from "@react-three/drei";
import Astro from "./Compressed_astro";

const Astronaut = () => {
   return (
    <>

    <OrbitControls enableZoom={false}/>
    <directionalLight position={[50, 50, 50]} intensity={3} />
        
    <Astro position={[0, -1.5, 2.8]} scale={[0.8,0.8,0.8]} />

    </>
   ); 
}

export default Astronaut;