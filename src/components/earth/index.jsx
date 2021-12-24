import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import gsap from "gsap";

import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.png";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 0.5;
    cloudsRef.current.rotation.y = elapsedTime / 0.5;

    if (!props.realMode) {
      props.group.current.rotation.y += Math.PI / 500
    } else {
      props.group.current.rotation.y = Math.PI / 2500
    }

    gsap.to(camera.position, {
      duration: 0.7,
      x: props.realMode ? 39 : 0,
      z: props.realMode ? 120 : 7,
      ease: "Power3.inOut",
    })

  });

  return (
    <>
      {!props.realMode &&
        <>
          <pointLight color="#fffcf5" position={[15, 0, 15]} intensity={2.2} castShadow shadow-mapSize={[512, 512]} />

          <Stars
            radius={300}
            depth={60}
            count={3000}
            factor={5}
            saturation={0}
            fade={true}
          />
        </>
      }

      {props.realMode &&
        <pointLight color="#fffcf5" position={[115, 0, 115]} intensity={7} castShadow shadow-mapSize={[512, 512]} />
      }

      <mesh ref={cloudsRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.0005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.9}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={earthRef} position={[0, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />

      </mesh>
    </>
  );
}
