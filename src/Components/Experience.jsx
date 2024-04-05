import { OrbitControls } from "@react-three/drei";
import { Model } from './Earth_1_12756';
// import { Office } from './Office';

export const Experience = () => {
    return (
        <>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={10}/>
            {/* <Office /> */}
            <Model scale={[0.0060, 0.0060, 0.0060]} position={[0, 0, 0]} />
        </>
    );
};