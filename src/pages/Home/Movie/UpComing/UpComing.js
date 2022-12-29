import classNames from 'classnames/bind';
import style from './UpComing.module.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import SlickMovie from '../../../../component/SlickMovie/SlickMovie';
import MoiveBox from '../../../../component/MoiveBox/MoiveBox';

const cx = classNames.bind(style);

function UpComing() {
  const [UpComing, setUpComing] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/upcoming?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page=1')
      .then((data) => {
        setUpComing(data.data.results);
      });
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>Movies : Up Coming</h2>
        <span>See all</span>
      </div>
      <SlickMovie quality={5}>
        {UpComing.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MoiveBox
              id={item.id}
              poster={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              title={item.original_title}
              slideScroll={5}
              vote={item.vote_average}
            />
          </div>
        ))}
      </SlickMovie>
    </div>
  );
}

export default UpComing;
