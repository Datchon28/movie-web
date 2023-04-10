import classNames from 'classnames/bind';
import style from './MovieCard.module.scss';

import MovieBox from '../MovieBox/MovieBox';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(style);

function MovieCard({ id, poster, vote, title, genres_id, popularrity }) {
  const [genres, setGenres] = useState();

  useEffect(() => {
    const Genres = async () => {
      await axios
        .get('https://api.themoviedb.org/3/genre/movie/list?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US')
        .then((gr) => {
          const data = gr.data.genres;
          data.filter((gr) => gr.id === genres_id && setGenres(gr.name));
        });
    };
    Genres();
  }, [genres_id]);

  return (
    <div className={cx('item')}>
      <MovieBox
        // genres={genres}
        id={id}
        className={cx('popular')}
        poster={`https://image.tmdb.org/t/p/original${poster}`}
        vote={vote}
      />

      <div className={cx('info-movie')}>
        <a className={cx('link')} href="none">
          <span className={cx('movie-name')}>{title}</span>
        </a>
        <span className={cx('popularity')}>{popularrity}</span>
        <span className={cx('popularity')}>{genres}</span>
      </div>
    </div>
  );
}

export default MovieCard;
