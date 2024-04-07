import { OrbitControls } from "@react-three/drei";
// import { Model } from './Earth_1_12756';
import { Model } from "./Earth_1_12756";
// import { Office } from './Office';

export const Experience = () => {
    return (
        <>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={10}/>
            {/* <Office /> */}
            <Model scale={[0.006, 0.006, 0.006]}/>
        </>
    );
};