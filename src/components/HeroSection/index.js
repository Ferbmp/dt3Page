import React from 'react';
import Image from '../../images/image.jpg';

import { HeroContainer, HeroBg, ImgBg } from './HeroElements';

const HeroSection = () => {
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={Image} type="image" />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
