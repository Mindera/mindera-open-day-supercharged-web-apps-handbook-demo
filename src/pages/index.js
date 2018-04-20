import loadable from 'loadable-components';

import Loading from '../components/Loading';
import LoadingError from '../components/LoadingError';

export const Home = loadable(() => import(/* webpackChunkName: "home" */ './Home'), {
  LoadingComponent: Loading,
  ErrorComponent: LoadingError
});
export const WeAreHuman = loadable(() => import(/* webpackChunkName: "we-are-human" */ './WeAreHuman'), {
  LoadingComponent: Loading,
  ErrorComponent: LoadingError
});
export const WeChange = loadable(() => import(/* webpackChunkName: "we-change" */ './WeChange'), {
  LoadingComponent: Loading,
  ErrorComponent: LoadingError
});
export const WeWorkTogether = loadable(() => import(/* webpackChunkName: "we-work-together" */ './WeWorkTogether'), {
  LoadingComponent: Loading,
  ErrorComponent: LoadingError
});
