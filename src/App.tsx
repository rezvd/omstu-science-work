import {makeStyles} from '@material-ui/core';
import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import {colors} from './styles/colors';
import DepsPage from './pages/deps-page/DepsPage';
import ParamsPage from './pages/params-page/ParamsPage';
import ResultsPage from './pages/result-page/ResultPage';
import StartPage from './pages/start-page/StartPage';
import {buildCurriculum} from './utils/buildCurriculum';
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
      <BrowserRouter>
        <div className={classes.container}>
          {/* <p id="input">{strInput}</p>
      <p id="result">{strResult}</p> */}
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/params" element={<ParamsPage />} />
            <Route path="/deps" element={<DepsPage />} />
            <Route path="/result" element={<ResultsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
