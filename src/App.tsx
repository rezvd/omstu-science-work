import React from 'react';
import logo from './logo.svg';
import './App.css';
import {buildCurriculum} from './utils/buildCurriculum';

const App: React.FC = () => {
  const subjects = [
    {
      name: '7',
      neededCompetentences: ['6'],
      earnedCompetentences: ['8'],
      credits: 1,
    },
    {
      name: '8',
      neededCompetentences: ['7'],
      earnedCompetentences: ['9'],
      credits: 5,
    },
    {
      name: '9',
      neededCompetentences: ['6', '7'],
      earnedCompetentences: ['10'],
      credits: 2,
    },

    {
      name: '1',
      neededCompetentences: [],
      earnedCompetentences: ['1', '2'],
      credits: 4,
    },
    {
      name: '2',
      neededCompetentences: [],
      earnedCompetentences: ['2', '3'],
      credits: 3,
    },
    {
      name: '3',
      neededCompetentences: [],
      earnedCompetentences: ['2', '3'],
      credits: 2,
    },

    {
      name: '4',
      neededCompetentences: [],
      earnedCompetentences: ['4', '5'],
      credits: 3,
    },
    {
      name: '5',
      neededCompetentences: ['1', '2', '3'],
      earnedCompetentences: ['6'],
      credits: 3,
    },
    {
      name: '6',
      neededCompetentences: ['3'],
      earnedCompetentences: ['7'],
      credits: 2,
    },
  ];
  const result = buildCurriculum({termsCount: 3, maxCreditsInTerm: 10, subjects: subjects});

  console.log(result);
  alert(JSON.stringify(subjects, null, 4));
  alert(result ? JSON.stringify(result, null, 4) : '');

  return (
    <div className="App">
        <p>{result ? JSON.stringify(result, null, 4) : ''}</p>
    </div>
  );
};

export default App;
