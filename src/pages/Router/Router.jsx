import { Routes, Route } from 'react-router-dom';
import { routesConfig } from './RouteConst';

const Router = () => {
  const routes = routesConfig.map(({ component, path, title }) => (
    <Route key={title} path={path} element={component} />
  ));

  return <Routes>{routes}</Routes>;
};

export default Router;
