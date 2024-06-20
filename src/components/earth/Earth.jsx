import { OrbitControls } from "@react-three/drei";
import { EarthModel } from "./EarthModel";

export const Earth = () => {
    return (
        <>
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.3} enableRotate={false} panSpeed={false} />
            <ambientLight intensity={2}/>
            <EarthModel position = {[0,0,0]}scale={[2.9, 2.8, 2.8]}/>
        </>
    );
};