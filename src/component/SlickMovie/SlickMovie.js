import classNames from 'classnames/bind';
import style from './SlickMovie.module.scss';
import '../SlickMovie/SlickMovie.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const cx = classNames.bind(style);
// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
// }

function SlickMovie({ quality = 5, children, slideScroll = 1, autoplay = false }) {
  const [change, setChange] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: autoplay,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    slidesToShow: quality,
    slidesToScroll: slideScroll,
    // nextArrow: true,
    // prevArrow: <SamplePrevArrow />,
    afterChange: (current) => {
      // setChange(current + 1);
    },
  };

  return (
    <div className={cx('slick-movie')}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default SlickMovie;
