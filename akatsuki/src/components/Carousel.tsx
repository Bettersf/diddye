import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { WelcomeBanner2 } from '../sections/Dashboard/WelcomeBanner2';
import { WelcomeBanner } from '../sections/Dashboard/WelcomeBanner';
import { TokenListingBanner } from '../sections/Dashboard/NewBanner';

export function NewsCarousel() {
  const banners = [
    <WelcomeBanner key={0} />,
    <TokenListingBanner key={1} />
  ];

  const settings = {
    dots: true,
    infinite: banners.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {banners.map((banner, index) => (
        <div key={index}>
          {banner}
        </div>
      ))}
    </Slider>
  );
}
