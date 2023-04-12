import classNames from 'classnames/bind';
import style from './TvShow.module.scss';

import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import config from '../../config/index';
import NavMovieTab from '../Movies/NavMovieTab';

const cx = classNames.bind(style);
export const GenresTV = createContext();

function TvShow({ children }) {
  const [filter, setFilter] = useState(false);
  const [genres, setGenres] = useState([]);
  const [isGenre, setIsGenre] = useState();
  const [chooseGenre, setChooseGenre] = useState(28);

  const handleFilter = () => {
    setFilter(!filter);
  };

  useEffect(() => {
    const Genres = async () => {
      await axios
        .get('https://api.themoviedb.org/3/genre/movie/list?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US')
        .then((gr) => {
          const data = gr.data.genres;
          setGenres(data);
        });
    };
    Genres();
  }, []);

  const handleChangeGenre = (e) => {
    const value = e.target.value;
    setChooseGenre(value);
  };

  const handleFilterGenre = () => {
    setIsGenre(chooseGenre);
  };

  return (
    <GenresTV.Provider value={isGenre}>
      <div className={cx('wrapper')}>
        <div className={cx('tab')}>
          <div className={cx('name-tab')}>
            <h2>Tv Show</h2>
          </div>
          <div className={cx('tab-movies')}>
            <NavMovieTab to={config.routes.popular_tv} title="Popular" />
            <NavMovieTab to={config.routes.nowplaying_tv} title="Now Playing" />
            <NavMovieTab to={config.routes.upcoming_tv} title="Up Coming" />
            <NavMovieTab to={config.routes.toprated_tv} title="Top Rated" />
          </div>

          <div className={cx('filter-category')}>
            <div className={cx('filter')}>
              <button className={cx('filter-btn')} onClick={handleFilter}>
                Filter
              </button>
            </div>
          </div>
        </div>

        {filter && (
          <div className={cx('filter-genres')}>
            <select className={cx('list-genres')} onChange={handleChangeGenre} value={chooseGenre}>
              {genres.map((gr, index) => (
                <option value={gr.id} key={index}>
                  {gr.name}
                </option>
              ))}
            </select>

            <button className={cx('submit-genre-btn')} onClick={handleFilterGenre}>
              OK
            </button>
          </div>
        )}

        <div className={cx('content')}>{children}</div>
      </div>
    </GenresTV.Provider>
  );
}

export default TvShow;
