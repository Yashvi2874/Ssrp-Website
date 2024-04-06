import { OrbitControls } from "@react-three/drei";
// import { Model } from './Earth_1_12756';
import { EarthModel } from "./Earthtrial";
// import { Office } from './Office';

export const Experience = () => {
    return (
        <>
            <OrbitControls/>
            <ambientLight intensity={5}/>
            {/* <Office /> */}
            <EarthModel scale={[3, 3, 3]}/>
        </>
    );
};