import { OrbitControls } from "@react-three/drei";
// import { Model } from './Earth_1_12756';
import { EarthModel } from "./Compressed_earth";
// import { Office } from './Office';

export const Experience = () => {
    return (
        <>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={5}/>
            {/* <Office /> */}
            <EarthModel scale={[2, 2, 2]}/>
        </>
    );
};