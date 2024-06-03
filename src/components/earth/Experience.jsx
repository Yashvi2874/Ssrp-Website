import { OrbitControls } from "@react-three/drei";
// import { Model } from './Earth_1_12756';
import { EarthModel } from "./Compressed_earth";
// import { Office } from './Office';

export const Experience = () => {
    return (
        <>
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.6} enableRotate={false}/>
            <ambientLight intensity={2}/>
            {/* <Office /> */}
            <EarthModel position = {[0,0,0]}scale={[2.5, 2.5, 2.5]}/>
        </>
    );
};