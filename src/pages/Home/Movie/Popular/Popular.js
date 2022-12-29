import classNames from 'classnames/bind';
import style from './Popular.module.scss';

import { useEffect, useState } from 'react';
import SlickMovie from '../../../../component/SlickMovie/SlickMovie';
import axios from 'axios';
import MoiveBox from '../../../../component/MoiveBox/MoiveBox';

const cx = classNames.bind(style);

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page=1')
      .then((data) => {
        setPopular(data.data.results);
      });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>Movies : Popular</h2>
        <span>See all</span>
      </div>
      <SlickMovie quality={3}>
        {popular.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MoiveBox
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

export default Popular;
