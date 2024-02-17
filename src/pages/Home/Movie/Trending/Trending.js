import classNames from 'classnames/bind';
import style from './Trending.module.scss';

import { useEffect, useState, useContext, useRef } from 'react';
import MovieBox from '../../../../component/MovieBox/MovieBox';
import { Responsive } from '../../../../Layout/DefaultLayout/DefaultLayout';
import { TrendingService } from '../../../../services/Trending.service';
import { enviroment } from '../../../../enviroments/enviroment';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { InformationDetailService } from '../../../../services/InformationDetail.service';

const cx = classNames.bind(style);

function Trending() {
  const [trending, setTreding] = useState([]);
  const [indexMovie, setIndexMovie] = useState(0);
  const { isMobile, isTable } = useContext(Responsive);
  const TrendingMovieService = new TrendingService();
  const InformationService = new InformationDetailService();
  const bgTrending = useRef();
  const tileTrending = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    beforeChange: (current, next) => {
      changeMovies('before', current, next);
    },
    afterChange: (current) => {
      changeMovies('after', current);
    },
  };

  const changeMovies = (type, index) => {
    bgTrending.current.classList.remove('fadeIn');

    if (indexMovie === index) {
      return;
    }

    setIndexMovie(index);
    let nextIndex;

    if (type === 'before') {
      nextIndex = index;
      tileTrending.current.innerText = trending[nextIndex].title;

      setTimeout(() => {
        let urlPath = `url(${enviroment.urlBackDrop}${trending[nextIndex].backdrop_path})`;
        bgTrending.current.style.backgroundImage = urlPath;
        bgTrending.current.classList.add('fadeIn');
      }, 60);
    } else {
      nextIndex = index;
      tileTrending.current.innerText = trending[nextIndex].title;

      setTimeout(() => {
        let urlPath = `url(${enviroment.urlBackDrop}${trending[nextIndex].backdrop_path})`;
        bgTrending.current.style.backgroundImage = urlPath;
        bgTrending.current.classList.add('fadeIn');
      }, 60);
    }
  };

  useEffect(() => {
    let allGenre = [];
    InformationService.getGenres().then((data) => {
      allGenre = data;
    });

    TrendingMovieService.getListMovie(1).then((res) => {
      const data = res.results;
      setTreding(data);

      data.forEach((item) => {
        item['genre_movie'] = [];
        item.genre_ids.forEach((g) => {
          for (let i = 0; i < allGenre.length; i++) {
            if (g === allGenre[i].id) {
              item['genre_movie'].push(allGenre[i]);
              break;
            }
          }
        });
      });

      setTimeout(() => {
        bgTrending.current.style.backgroundImage = `url(${enviroment.urlBackDrop}${res.results[0].backdrop_path})`;
        bgTrending.current.classList.add('fadeIn');
      }, 50);
    });
  }, []);

  return (
    <div className={cx('wrapper', 'relative')}>
      <div className={cx('bg-trending')} ref={bgTrending} />
      <div className={cx('list-movies')}>
        <div className={cx('title')}>
          <h3 ref={tileTrending}>{trending[indexMovie]?.title}</h3>

          <p>
            {trending[indexMovie]?.genre_movie?.map((item, index) => (
              <span key={item.id}>{item.name} </span>
            ))}
          </p>
        </div>

        <div className={cx('list-movies-item')}>
          <div className={cx('slick-movie')}>
            <Slider {...settings}>
              {trending.map((item, index) => (
                <div className={cx('item')} key={index}>
                  <MovieBox
                    id={item.id}
                    className={cx('popular', index === indexMovie && 'focus-now')}
                    poster={`${enviroment.urlBackDrop}${item.poster_path}`}
                    slideScroll={5}
                    imageTyp="bgImage"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
