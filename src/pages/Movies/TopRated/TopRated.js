import classNames from 'classnames/bind';
import style from './TopRated.module.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieBox from '../../../component/MovieBox/MovieBox';

const cx = classNames.bind(style);

function TopRated() {
  const [topRated, setTopRated] = useState([]);
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page=${page}`,
      )
      .then((data) => {
        setTopRated(data.data.results);
      });
  }, [page]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {topRated.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MovieBox
              id={item.id}
              className={cx('popular')}
              poster={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              vote={item.vote_average}
            />

            <div className={cx('info-movie')}>
              <a className={cx('link')} href="none">
                <span className={cx('movie-name')}>{item.original_title}</span>
              </a>
              <span className={cx('popularity')}>{item.popularity}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={cx('load-more')}>
        <button onClick={handleLoadMore} className={cx('load-more-btn')}>
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

export default TopRated;
