import classNames from 'classnames/bind';
import style from './TopRated.module.scss';
import { useContext, useEffect, useState } from 'react';
import SlickMovie from '../../../../component/SlickMovie/SlickMovie';
import MovieBox from '../../../../component/MovieBox/MovieBox';
import { Responsive } from '../../../../Layout/DefaultLayout/DefaultLayout';
import config from '../../../../config';
import { Link } from 'react-router-dom';
import { enviroment } from '../../../../enviroments/enviroment';
import { TopRatedService } from '../../../../services/Toprated.service';

const cx = classNames.bind(style);

function TopRated() {
  const { isMobile, isTable } = useContext(Responsive);

  const [topRated, setTopRated] = useState([]);
  const TopRatedApi = new TopRatedService();

  useEffect(() => {
    TopRatedApi.getListMovie(1).then((res) => {
      setTopRated(res.results);
    });
  }, []);

  return (
    <div className={cx('toprated-wrapper')}>
      <div className={cx('title')}>
        <h2>Movies : Top Rated</h2>
        <Link to={config.routes.toprated_movie}>
          <span>See all</span>
        </Link>
      </div>
      <SlickMovie quality={isTable ? 3 : isMobile ? 2 : 5}>
        {topRated.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MovieBox
              id={item.id}
              poster={`${enviroment.urlBackDrop}${item.poster_path}`}
              slideScroll={5}
              vote={item.vote_average}
            />
          </div>
        ))}
      </SlickMovie>
    </div>
  );
}

export default TopRated;
