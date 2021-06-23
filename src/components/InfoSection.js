import styled from 'styled-components';
import { Button } from './Button';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  background: #000;
  color: #f1f1f1;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;
const RightContainer = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

export const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  image,
  reverse,
}) => {
  return (
    <Section>
      <Container>
        <LeftContainer>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/resorts" primary="true">
            {buttonLabel}
          </Button>
        </LeftContainer>
        <RightContainer reverse={reverse}>
          <img src={image} alt="resort" />
        </RightContainer>
      </Container>
    </Section>
  );
};
