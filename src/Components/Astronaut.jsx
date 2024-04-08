import { OrbitControls } from "@react-three/drei";
import Astro from "./Compressed_astro";

const Astronaut = () => {
   return (
    <>

    <OrbitControls enableZoom={false}/>
    <directionalLight position={[50, 50, 50]} intensity={2} />
        
    <Astro position={[0.1, -3.4, 0]} scale={[2,2,2]} />

    </>
   ); 
}

export default Astronaut;