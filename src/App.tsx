import {makeStyles} from '@material-ui/core';
import React from 'react';
import {Routes, Route, Navigate, HashRouter} from 'react-router-dom';
import {colors} from './styles/colors';
import DepsPage from './pages/deps-page/DepsPage';
import ParamsPage from './pages/params-page/ParamsPage';
import ResultsPage from './pages/result-page/ResultPage';
import StartPage from './pages/start-page/StartPage';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: colors.background,
    maxWidth: '100%',
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <HashRouter>
        <div className={classes.container}>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/params" element={<ParamsPage />} />
            <Route path="/deps" element={<DepsPage />} />
            <Route path="/result" element={<ResultsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
};

export default App;
