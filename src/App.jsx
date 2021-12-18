import React, { useRef } from 'react'
import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";
import { Moon } from "./components/moon";
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {

  const group = useRef()

  return (
    <CanvasContainer>
      {/* 
     <TopSection /> 
     */}
      <Canvas>
        <Suspense fallback={null}>

          <Earth group = {group}/>
        <group ref={group}>
          <Moon  />
          </group>


          <EffectComposer multisampling={8}>

      {/* 
<Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
*/}


          <Bloom kernelSize={KernelSize.LARGE} luminanceThreshold={0.3}  luminanceSmoothing={0.5} intensity={0.3} />
        </EffectComposer>



        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
