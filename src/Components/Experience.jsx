import { OrbitControls } from "@react-three/drei";
// import { Model } from './Earth_1_12756';
import { EarthModel } from "./Earthtrial";
// import { Office } from './Office';

export const Experience = () => {
    return (
        <>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={2}/>
            {/* <Office /> */}
            <EarthModel scale={[2.8, 2.8, 2.8]}/>
        </>
    );
};