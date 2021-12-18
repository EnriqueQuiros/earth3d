import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.png";
import { TextureLoader } from "three";
import gsap from "gsap";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 1;
    cloudsRef.current.rotation.y = elapsedTime / 1;

    props.group.current.rotation.y += Math.PI / 2500


  //  if(!gsap.isTweening(camera.position)) {
      gsap.to(camera.position, {
        duration: 0.7,
        z: props.realMode ? 50: 5,
        ease: "Power3.inOut",
      })
   // }


  });

  return (
    <>
      <pointLight color="#fffcf5" position={[5, 0, 5]} intensity={2.2} castShadow shadow-mapSize={[512, 512]} />

      <Stars
        radius={300}
        depth={60}
        count={3000}
        factor={5}
        saturation={0}
        fade={true}
      />

      <mesh ref={cloudsRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.005, 32, 32]} />
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
          bumpScale={1}
        />


 {/* 
      <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> 
 */}       


      </mesh>
    </>
  );
}
