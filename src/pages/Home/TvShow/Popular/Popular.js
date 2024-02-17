import classNames from 'classnames/bind';
import style from './Popular.module.scss';

import { useEffect, useState, useContext } from 'react';
import SlickMovie from '../../../../component/SlickMovie/SlickMovie';
import MovieBox from '../../../../component/MovieBox/MovieBox';
import { Responsive } from '../../../../Layout/DefaultLayout/DefaultLayout';
import { Link } from 'react-router-dom';
import config from '../../../../config';
import { PopularService } from '../../../../services/Popular.service';
import { enviroment } from '../../../../enviroments/enviroment';

const cx = classNames.bind(style);

function Popular() {
  const [popular, setPopular] = useState([]);
  const { isMobile, isTable } = useContext(Responsive);

  const popularService = new PopularService();

  useEffect(() => {
    popularService.getListTv(1).then((res) => {
      setPopular(res.results);
    });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>TV : Popular</h2>
        <Link to={config.routes.popular_tv}>
          <span>See all</span>
        </Link>
      </div>
      <SlickMovie quality={isTable ? 3 : isMobile ? 2 : 5}>
        {popular.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MovieBox
              id={item.id}
              className={cx('popular')}
              poster={`${enviroment.urlBackDrop}${item.poster_path}`}
              slideScroll={5}
            />
          </div>
        ))}
      </SlickMovie>
    </div>
  );
}

export default Popular;
