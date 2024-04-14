import { OrbitControls } from "@react-three/drei";
import Astro from "./Final_astro";

const Astronaut = () => {
   return (
    <>

    <OrbitControls enableZoom={false} enableRotate={false}/>
    <directionalLight position={[0, 100, 300]} intensity={8} />
        
    <Astro position={[0, -3, 0]} scale={[1.8,1.8,1.8]} />

    </>
   ); 
}

export default Astronaut;