import { BrowserRouter, Routes, Route } from 'react-router-dom';
import config from './config';
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import LoadingEffect from './component/effect/Loading/LoadingEffect';

// Movie
import NowPlaying from './pages/Movies/NowPlaying/NowPlaying';
import Popular from './pages/Movies/Popular/Popular';
import TopRated from './pages/Movies/TopRated/TopRated';
import UpComing from './pages/Movies/UpComing/UpComing';
import MovieDetail from './component/MovieDetail/MovieDetail';

// TV
import TvShow from './pages/TvShow/TvShow';
import TvPopular from './pages/TvShow/Popular/Popular';
import TvToprated from './pages/TvShow/TopRated/TopRated';
import SignUp from './accounts/SignUp/SignUp';
import SignIn from './accounts/SignIn/SignIn';
import Account from './accounts/Account/Account';
import { Fragment, useState } from 'react';
import Favourite from './pages/Favourite/Favourite';
import Settings from './pages/Settings/Settings';
import { lazy } from 'react';
import { Suspense } from 'react';

const HomeComp = lazy(() => import('./pages/Home/Home.js'));

function App() {
  const isLogin = JSON.parse(localStorage.getItem('current_account'));

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route
            exact
            path={config.routes.home}
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            exact
            path={config.routes.movieItem}
            element={
              <DefaultLayout>
                <MovieDetail />
              </DefaultLayout>
            }
          />

          {/* Movies Tab */}
          {config.routes.moviesChild.map((item, index) => (
            <Route
              key={index}
              exact
              path={item.link}
              element={
                <DefaultLayout>
                  <Movies title={item.label}>
                    {item.label === 'Popular' ? (
                      <Popular />
                    ) : item.label === 'Now Playing' ? (
                      <NowPlaying />
                    ) : item.label === 'Upcoming' ? (
                      <UpComing />
                    ) : (
                      <TopRated />
                    )}
                  </Movies>
                </DefaultLayout>
              }
            />
          ))}
          {/* End Movies Tab */}

          {/* Tv Show */}
          {config.routes.tvsChild.map((item, index) => (
            <Route
              key={index}
              exact
              path={item.link}
              element={
                <DefaultLayout>
                  <Movies>
                    {item.label === 'Popular' ? (
                      <TvPopular />
                    ) : item.label === 'Now Playing' ? (
                      <TvShow />
                    ) : item.label === 'Upcoming' ? (
                      <UpComing />
                    ) : (
                      <TvToprated />
                    )}
                  </Movies>
                </DefaultLayout>
              }
            />
          ))}
          {/* End Tv Show */}

          {/* Account */}
          <Route exact path={config.routes.signup} element={<SignUp />} />
          <Route exact path={config.routes.signin} element={<SignIn />} />
          <Route exact path={config.routes.your_account} element={<Account />} />
          <Route exact path={config.routes.setting} element={<Settings />} />

          <Route
            exact
            path={config.routes.favourite}
            element={isLogin ? <Favourite /> : 'You need Login to save Favourite'}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
