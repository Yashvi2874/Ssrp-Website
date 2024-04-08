import { OrbitControls } from "@react-three/drei";
import Astro from "./Compressed_astro";

const Astronaut = () => {
   return (
    <>

    <OrbitControls enableZoom={false}/>
    <directionalLight position={[50, 50, 50]} intensity={2} />
        
    <Astro position={[0, -0.72, 4]} scale={[0.4,0.4,0.4]} />

    </>
   ); 
}

export default Astronaut;