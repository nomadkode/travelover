import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

//* Hero
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

const HeroSlide = styled.div``;
const HeroSlider = styled.div``;
const HeroImage = styled.img``;
const HeroContent = styled.div``;

//* Slider Buttons
const SliderButtons = styled.div`
  position: absolute;
  bottom: 40px;
  /* right: 50px; */
  display: flex;
  z-index: 10;
`;
const Arrow = styled(IoMdArrowRoundForward)``;

//* Arrow Buttons
const arrowButtons = css`
  width: 40px;
  height: 40px;
  color: #f1f1f1;
  background: #000d1a;
  cursor: pointer;
  padding: 10px;
  margin-right: 0.1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #f1f1f1;
    color: #000d1a;
    transform: scale(1.1);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
  border-radius: 100% 0% 0% 100% / 50% 50% 50% 50%;
  &:hover {
    transform: translateX(-10px);
  }
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
  border-radius: 0% 100% 100% 0% / 50% 50% 50% 50%;
  &:hover {
    transform: translateX(10px);
  }
`;

export const Hero = ({ slides }) => {
  return (
    <HeroSection>
      <HeroContainer>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              <HeroSlider>
                <HeroImage />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button
                    to={slide.path}
                    primary="true"
                    css={`
                      max-width: 160px;
                      /* border-radius: 27% 73% 43% 57% / 54% 38% 62% 46%; */

                      &:hover {
                        transform: translateX(10px);
                      }
                    `}
                  >
                    {slide.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow />
          <NextArrow />
        </SliderButtons>
      </HeroContainer>
    </HeroSection>
  );
};
