import classNames from 'classnames/bind';
import style from './Popular.module.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieBox from '../../../component/MovieBox/MovieBox';

const cx = classNames.bind(style);

function Popular() {
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    const Items = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page=${page}`,
        );
        setPopular((popular) => [...popular, ...response.data.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    Items();
  }, [page]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {popular.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MovieBox
              id={item.id}
              className={cx('popular')}
              poster={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              vote={item.vote_average}
            />

            <div className={cx('info-tv')}>
              <a className={cx('link')} href="none">
                <span className={cx('tv-name')}>{item.original_name}</span>
              </a>
              <span className={cx('popularity')}>{item.popularity}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={cx('load-more')}>
        <button onClick={handleLoadMore} className={cx('load-more-btn')}>
          {isLoading ? 'Loading..' : 'LOAD MORE'}
        </button>
      </div>
    </div>
  );
}

export default Popular;
