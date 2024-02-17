import classNames from 'classnames/bind';
import style from './Movies.module.scss';

import config from '../../config/index';
import NavMovieTab from './NavMovieTab';
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { InformationDetailService } from '../../services/InformationDetail.service';

const cx = classNames.bind(style);
export const GenRes = createContext();

function Movies({ children, title }) {
  const [filter, setFilter] = useState(false);
  const [genres, setGenres] = useState([]);
  const [isGenre, setIsGenre] = useState();
  const [chooseGenre, setChooseGenre] = useState(28);
  const InformationService = new InformationDetailService();

  const handleFilter = () => {
    setFilter(!filter);
  };

  const handleChangeGenre = (e) => {
    const value = e.target.value;
    setChooseGenre(value);
  };

  useEffect(() => {
    InformationService.getGenres().then((data) => {
      setGenres(data);
    });
  }, []);

  const handleFilterGenre = () => {
    setIsGenre(chooseGenre);
  };

  return (
    <GenRes.Provider value={isGenre}>
      <div className={cx('wrapper')}>
        <div className={cx('tab')}>
          <div className={cx('name-tab')}>
            <h2>{title}</h2>
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
    </GenRes.Provider>
  );
}

export default Movies;
