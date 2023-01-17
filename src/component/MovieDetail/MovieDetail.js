import classNames from 'classnames/bind';
import style from './MovieDetail.module.scss';

import { faBookBookmark, faHeart, faPlay, faShare, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SlickMovie from '../../component/SlickMovie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectId } from '../../store/IdStore';
import TippyNote from '../TippyNote/TippyNote';

const cx = classNames.bind(style);

function MovieDetail() {
  const [item, setItem] = useState([]);

  const id = useSelector(selectId);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&append_to_response=videos`,
      )
      .then((res) => {
        setItem(res.data);
      });
  }, [id]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('backdrop')}>
        <div className={cx('img')}>
          <img
            className={cx('back-drop-img')}
            alt="anh"
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          />
          <div className={cx('alpha-bgc')} />
        </div>
      </div>
      <div className={cx('container')}>
        <div className={cx('poster')}>
          <img alt="anh" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
        </div>

        <div className={cx('information')}>
          <div className={cx('title')}>
            <h3>{item.original_title}</h3>
            <span className={cx('tag-line')}>{item.tagline}</span>
            <span className={cx('release-date')}>{item.release_date}</span>
            <span className={cx('timer')}>1h30</span>
            <span className={cx('overview')}>OVERVIEW : {item.overview}</span>
          </div>

          <div className={cx('interactives')}>
            <div className={cx('interactives-button')}>
              <div className={cx('score')}>
                <span>{Math.floor(item.vote_average * 10)}%</span>
              </div>
              <TippyNote note="Like">
                <button className={cx('inter-btn', 'like-btn')}>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </TippyNote>

              <TippyNote note="Add to your watchlist">
                <button className={cx('inter-btn', 'watch-list-btn')}>
                  <FontAwesomeIcon icon={faBookBookmark} />
                </button>
              </TippyNote>

              <TippyNote note="Rate for this movie">
                <button className={cx('inter-btn', 'rate-btn')}>
                  <FontAwesomeIcon icon={faStar} />
                </button>
              </TippyNote>
            </div>

            <div className={cx('watch-button')}>
              <button className={cx('watch-button--btn')}>
                <span className={cx('icon-play')}>
                  <FontAwesomeIcon icon={faPlay} />
                </span>
                <span className={cx('watch-text')}>Watch</span>
              </button>

              <div className={cx('share')}>
                <TippyNote note="Share This Movie" placement="right">
                  <button className={cx('inter-btn', 'share-btn')}>
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                </TippyNote>
              </div>
            </div>
          </div>

          <div className={cx('content')}>
            <div className={cx('actor')}>
              <h3 className={cx('actor-title')}>Cast</h3>

              <div className={cx('actor-list')}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
