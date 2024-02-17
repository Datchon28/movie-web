const routes = {
  home: '/',
  moviesChild: [
    {
      label: 'Popular',
      link: '/movies/popular',
    },
    {
      label: 'Now Playing',
      link: '/movies/nowplaying',
    },
    {
      label: 'Upcoming',
      link: '/movies/upcoming',
    },
    {
      label: 'Top Rated',
      link: '/movies/toprated',
    },
  ],

  tvsChild: [
    {
      label: 'Popular',
      link: '/tv/popular',
    },
    {
      label: 'Now Playing',
      link: '/tv/nowplaying',
    },
    {
      label: 'Upcoming',
      link: '/tv/upcoming',
    },
    {
      label: 'Top Rated',
      link: '/tv/toprated',
    },
  ],

  // Accounts
  signup: '/signup',
  signin: '/signin',
  your_account: '/account-setting',
  setting: '/setting',
};

export default routes;
