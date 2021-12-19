import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  padding-top: 3%;
  color: #fff;
  font-weight: 800;
  font-size: 50px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 25px;
  margin-top: 5px;
`;


const ActionButton = styled.button`
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

const GithubButton = styled.button`
  outline: none;
  border: none;
  background-color: #000;
  color: #fff !important;
  border-radius: 30px;
  padding: 0.5em 0.5em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  position: fixed;
  top: 0.5em;
  right: 0.5em;

  &:hover {
    background-color: transparent;
    border: 2px solid #10366e;
  }
`;


export function TopSection(props) {

  return (
    <TopSectionContainer>
      <Logo>Earth & Moon</Logo>
      <Slogan>Are not as close as you think</Slogan>
      <GithubButton onClick={() => props.setRealMode(true)}>
        <a href="https://github.com/EnriqueQuiros/earth3d" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" strokeWidth="2" className="ai ai-GithubFill"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
        </a>

      </GithubButton>

      {!props.realMode && <>
        <ActionButton onClick={() => props.setRealMode(true)}> Check how far they really are </ActionButton>
      </>}

      {props.realMode && <>
        <ActionButton onClick={(prev) => props.setRealMode(!prev)}> Go back </ActionButton>
      </>}

    </TopSectionContainer>
  );
}
