import React, { useRef } from 'react'
import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";
import { Moon } from "./components/moon";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {

  const group = useRef()

  return (
    <CanvasContainer>
     <TopSection /> 
      <Canvas>
        <Suspense fallback={null}>

          <Earth group = {group}/>
        <group ref={group}>
          <Moon  />
          </group>

        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
