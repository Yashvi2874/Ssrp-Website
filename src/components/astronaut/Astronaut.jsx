import { OrbitControls } from "@react-three/drei";
import AstroModel from "./AstronautModel";

const Astronaut = () => {
   return (
    <>

    <OrbitControls enableZoom={false} enableRotate={false}/>
    <directionalLight position={[0, 100, 300]} intensity={1.5} /> 
    <AstroModel position={[0, -3, 0]} scale={[1.9,1.9,1.9]} />

    </>
   ); 
}

export default Astronaut;