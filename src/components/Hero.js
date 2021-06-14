import styled, { css } from 'styled-components/macro';

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <h1>Hero</h1>
      </HeroContainer>
    </HeroSection>
  );
};
