import classNames from 'classnames/bind';
import style from './UpComing.module.scss';

import { useEffect, useState, useContext } from 'react';
import SlickMovie from '../../../../component/SlickMovie/SlickMovie';
import MovieBox from '../../../../component/MovieBox/MovieBox';
import { Responsive } from '../../../../Layout/DefaultLayout/DefaultLayout';
import config from '../../../../config';
import { Link } from 'react-router-dom';
import { UpcomingService } from '../../../../services/Upcoming.service';
import { enviroment } from '../../../../enviroments/enviroment';

const cx = classNames.bind(style);

function UpComing() {
  const { isMobile, isTable } = useContext(Responsive);
  const [UpComing, setUpComing] = useState([]);

  const upcomingMovieService = new UpcomingService();

  useEffect(() => {
    upcomingMovieService.getListMovie(1).then((res) => {
      setUpComing(res.results);
    });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>Movies : Up Coming</h2>
        <Link to={config.routes.upcoming_movie}>
          <span>See all</span>
        </Link>
      </div>
      <SlickMovie quality={isTable ? 3 : isMobile ? 2 : 5}>
        {UpComing.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MovieBox
              id={item.id}
              poster={`${enviroment.urlBackDrop}${item.poster_path}`}
              sssssssssss
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
