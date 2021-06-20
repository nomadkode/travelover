import { useState, useEffect, useRef } from 'react';
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

const HeroSlide = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    z-index: 2;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
    position: absolute;
    bottom: 0vh;
    left: 0;
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  opacity: 0.9;
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: calc(100% - 150px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 800;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-weight: 600;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  }
`;

//* Slider Buttons
const SliderButtons = styled.div`
  position: absolute;
  bottom: 40px;
  /* right: 50px; */
  display: flex;
  z-index: 10;
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

//* Arrow Buttons
const arrowButtons = css`
  width: 40px;
  height: 40px;
  color: #f1f1f1;
  background: #ba135d;
  cursor: pointer;
  padding: 10px;
  margin-right: 0.5rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #f1f1f1;
    color: #ba135d;
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
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  //* Auto Slides
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 5000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <HeroSection>
      <HeroContainer>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Button
                      to={slide.path}
                      primary="true"
                      css={`
                        max-width: 160px;
                        border-radius: 27% 73% 43% 57% / 54% 38% 62% 46%;

                        &:hover {
                          transform: translateX(10px);
                          background: #f1f1f1;
                          color: #ba135d;
                        }
                      `}
                    >
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroContainer>
    </HeroSection>
  );
};
