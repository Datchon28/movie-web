import classNames from 'classnames/bind';
import style from './WatchList.module.scss';

import { useState } from 'react';
import MovieBox from '../../../../component/MovieBox/MovieBox';

const cx = classNames.bind(style);

function WatchList() {
  const [watchList, setWatchlist] = useState([]);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>Watch List</h2>
      </div>
      <div className={cx('container')}>
        {watchList.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MovieBox
              id={item.id}
              poster={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              title={item.original_title}
              slideScroll={5}
              vote={item.vote_average}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchList;
