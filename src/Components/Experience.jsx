import { OrbitControls } from "@react-three/drei";
import { Model } from './Earth_1_12756';
// import { Office } from './Office';

export const Experience = () => {
    return (
        <>
            <OrbitControls/>
            <ambientLight intensity={3}/>
            {/* <Office /> */}
            <Model scale={[0.045, 0.045, 0.045]} position={[0, 0, 0]} />
        </>
    );
};