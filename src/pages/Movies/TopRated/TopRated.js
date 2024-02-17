import classNames from 'classnames/bind';
import style from './TopRated.module.scss';

import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import MovieCard from '../../../component/MovieCard/MovieCard';
import { GenRes } from '../Movies';

const cx = classNames.bind(style);

function TopRated() {
  const isGenre = useContext(GenRes);

  const [topRated, setTopRated] = useState([]);
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
          `https://api.themoviedb.org/3/movie/top_rated?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page=${page}`,
        );
        setTopRated((topRated) => [...topRated, ...response.data.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    Items();

    if (isGenre !== undefined) {
      const filter = topRated.filter((p) => p.genre_ids[0] === isGenre);
      setTopRated(filter);
    }
  }, [page, isGenre]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {topRated.map((item, index) => (
          <MovieCard
            key={index}
            id={item.id}
            poster={item.poster_path}
            vote={item.vote_average}
            genres_id={item.genre_ids[0]}
            popularrity={item.popularity}
            title={item.original_title}
          />
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

export default TopRated;
