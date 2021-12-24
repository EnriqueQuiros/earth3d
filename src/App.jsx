import { useRef, useState } from 'react'
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
  const [realMode, setRealMode] = useState(false);
  const group = useRef()

  return (
    <CanvasContainer>
      <TopSection realMode={realMode} setRealMode={setRealMode} />

      <Canvas shadows>
        <Suspense fallback={<>Loading...</>}>

          <Earth group={group} realMode={realMode} />
          <group ref={group}>
            <Moon realMode={realMode} />
          </group>

        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;