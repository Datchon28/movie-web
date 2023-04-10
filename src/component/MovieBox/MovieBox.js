import classNames from 'classnames/bind';
import style from './MovieBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import config from '../../config';
import { useDispatch } from 'react-redux';
import { updateIdWatchlist } from '../../store/IdStore';
import TippyNote from '../TippyNote/TippyNote';
import axios from 'axios';

const cx = classNames.bind(style);

function MoiveBox({ id, className = 'wrapper', poster, title, genres, interactive = true }) {
  const itemRef = useRef();
  const [openMenuChild, setOpenMenuChild] = useState(false);

  const account = JSON.parse(localStorage.getItem('current_account'));
  const dispatch = useDispatch();

  const handleGetIdForDetail = () => {
    const id = itemRef.current.id;
    localStorage.setItem('id_detail', JSON.stringify(id));
  };

  const handleGetIdWatchList = () => {
    const id = itemRef.current.id;
    dispatch(updateIdWatchlist(id));
  };

  const handleOpenMenuChild = () => {
    setOpenMenuChild(!openMenuChild);
  };

  const handleAddFavourite = async () => {
    const id = itemRef.current.id;
    setOpenMenuChild(false);
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&append_to_response=videos`,
        )
        .then((res) => {
          let dataFirts = res.data;

          axios
            .put('http://localhost:5000/favourite/add', {
              userName: account.userName,
              favourite_Movie: dataFirts,
            })
            .then((data) => {
              console.log(data);
            });
          const favourite = account.favourite_Movie.push(res.data);
          const update = { ...account, favourite };
          localStorage.setItem('current_account', JSON.stringify(update));
        });
    } catch (error) {
      console.log(error);
    }
  };

  // const Lola = async (data) => {
  //   try {
  //     await axios
  //       .post('http://localhost:5000/add-to-favourite', {
  //         userName: account.userName,
  //         favourite_Movie: 'Ha Noi',
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(async () => {
  //   const update = await axios
  //     .post('http://localhost:5000/update-account', {
  //       userName: account.userName,
  //       favourite_Movie: account.favourite_Movie,
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });

  //   // return () => update();
  // }, [account]);

  return (
    <div className={cx(className)} ref={itemRef} id={id} genres={genres}>
      <div className={cx('backdrop')}>
        <Link className={cx('link-movie')} to={config.routes.movies + `${id}`} onClick={handleGetIdForDetail}>
          <img className={cx('backdrop-img')} alt="bdrop" src={poster} />
        </Link>
        {interactive && (
          <div className={cx('interactive')}>
            <div className={cx('menu-child')}>
              <button className={cx('menu-child-btn')} onClick={handleOpenMenuChild}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>

              {openMenuChild && (
                <div className={cx('menu-small')}>
                  <ul className={cx('menu-small-list')}>
                    <li className={cx('menu-small-item')} onClick={handleAddFavourite}>
                      Add to Favorite
                    </li>
                    <li className={cx('menu-small-item')}>Share</li>
                    <li className={cx('menu-small-item')}>optional</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={cx('add-list')}>
              <TippyNote note="Save to your watchlist">
                <button className={cx('add-list-btn')} onClick={handleGetIdWatchList}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </TippyNote>
            </div>
          </div>
        )}
      </div>
      <div className={cx('info-movie')}>
        <span className={cx('title-movie')}>{title}</span>
      </div>
    </div>
  );
}

export default MoiveBox;
