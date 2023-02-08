import classNames from 'classnames/bind';
import style from './Trending.module.scss';

import { useEffect, useState } from 'react';
import SlickMovie from '../../../../component/SlickMovie/SlickMovie';
import axios from 'axios';
import MovieBox from '../../../../component/MovieBox/MovieBox';

const cx = classNames.bind(style);

function Trending() {
  const [trending, setTreding] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/trending/movie/day?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267')
      .then((data) => {
        setTreding(data.data.results);
      });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>Movies : Trending</h2>
        <span>See all</span>
      </div>
      <SlickMovie quality={3}>
        {trending.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MovieBox
              id={item.id}
              className={cx('popular')}
              poster={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              slideScroll={5}
            />
          </div>
        ))}
      </SlickMovie>
    </div>
  );
}

export default Trending;
