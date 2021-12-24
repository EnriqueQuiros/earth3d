import { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import MoonDayMap from "../../assets/textures/moonmap4k.jpg";
import MoonNormalMap from "../../assets/textures/moonbump4k.jpg";
import { TextureLoader } from "three";

export function Moon(props) {
  const [colorMap, specularMap] = useLoader(
    TextureLoader,
    [MoonDayMap, MoonNormalMap]
  );

  const moonRef = useRef();

  useEffect(() => {
    moonRef.current.position.x = props.realMode ? 80 : 3;
  }, [props])


  return (
    <>
      <mesh ref={moonRef} position={[3, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.27, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          metalness={0.4}
          roughness={5}
        />
      </mesh>
    </>
  );
}
