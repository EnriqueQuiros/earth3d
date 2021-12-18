import React from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
`;


const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #10366e;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 10px 2em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  position: fixed;
  bottom: 2em;

  &:hover {
    background-color: transparent;
    border: 2px solid #10366e;
  }
`;


export function TopSection(props) {
  
  useEffect(() => {
   // console.log("HEY ", props.realMode);
  }, [props])


  return (
    <TopSectionContainer>
       <Logo>Earth & Moon</Logo>
      <Slogan>Are not as close as you think</Slogan>
      {!props.realMode && <>
     <DonateButton onClick={() => props.setRealMode(true)}> Check how far they really are </DonateButton>
      
      </>}
      {props.realMode && <>
        <DonateButton onClick={(prev)=> props.setRealMode(!prev)}> Go back </DonateButton>      
      </>}

    </TopSectionContainer>
  );
}
