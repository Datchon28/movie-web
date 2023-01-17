import { BrowserRouter, Routes, Route } from 'react-router-dom';
import config from './config';
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <DefaultLayout>
          <Routes>
            <Route path={config.routes.home} element={<Home />} />
            <Route exact path={config.routes.movies} element={<Movies />}></Route>
            <Route path={config.routes.movieItem} element={<MovieDetail />} />

            {/* Movie Tab */}
            <Route
              path={config.routes.popular_movie}
              element={
                <Movies>
                  <Popular />
                </Movies>
              }
            />
            <Route
              path={config.routes.nowplaying_movie}
              element={
                <Movies>
                  <NowPlaying />
                </Movies>
              }
            />
            <Route
              path={config.routes.upcoming_movie}
              element={
                <Movies>
                  <UpComing />
                </Movies>
              }
            />
            <Route
              path={config.routes.toprated_movie}
              element={
                <Movies>
                  <TopRated />
                </Movies>
              }
            />
            {/* Movie Tab */}

            <Route path={config.routes.tv} element={<TvShow />} />

            {/* Tv Show */}
            <Route
              path={config.routes.popular_tv}
              element={
                <TvShow>
                  <TvPopular />
                </TvShow>
              }
            />
            <Route
              path={config.routes.nowplaying_tv}
              element={
                <TvShow>
                  <NowPlaying />
                </TvShow>
              }
            />
            <Route
              path={config.routes.upcoming_tv}
              element={
                <TvShow>
                  <UpComing />
                </TvShow>
              }
            />
            <Route
              path={config.routes.toprated_tv}
              element={
                <TvShow>
                  <TvToprated />
                </TvShow>
              }
            />
            {/* Tv Show */}
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
