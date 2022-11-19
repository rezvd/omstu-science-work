import {makeStyles, Button} from '@material-ui/core';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Expandable from '../../components/accordion/Expandable';
import BaseLayout from '../../components/base-layout/BaseLayout';
import {useAppSelector} from '../../redux/hooks/useAppSelector';
import {typography} from '../../styles/typography';
import {Subject, SubjectsDistribution} from '../../typings/typings';
import {buildCurriculum} from '../../utils/buildCurriculum';

const useStyles = makeStyles(() => ({
  title: {
    ...typography.h1,
  },
  term: {
    maxWidth: 450,
  },
  listItem: {
    ...typography.text,
    marginBottom: 20,
    paddingLeft: 10,
  },

  /*   ===   next button   ===   */
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 70,
  },
}));

const ResultsPage: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const subjects = useAppSelector((state) => state.curriculum.subjects);
  const maxCreditsInTerm = useAppSelector((state) => state.curriculum.maxCreditsInTerm);
  const termsNumber = useAppSelector((state) => state.curriculum.termsNumber);

  const [curriculum, setCurriculum] = useState<SubjectsDistribution | null>([]);

  const renderTerm = (term: Subject[], termNumber: number) => (
    <Expandable header={<p>{`Семестр ${termNumber + 1}`}</p>} classname={classes.term}>
      <div>
        {term.map((subject, index) => (
          <p key={subject.name} className={classes.listItem}>{`${index + 1}. ${subject.name}, ${
            subject.credits
          } з.е.`}</p>
        ))}
        <p>{`Итого: ${term.reduce((sum, current) => sum + current.credits, 0)} з.е.`}</p>
      </div>
    </Expandable>
  );

  useEffect(() => {
    setCurriculum(buildCurriculum({termsNumber, maxCreditsInTerm, subjects}));
  }, [maxCreditsInTerm, subjects, termsNumber]);

  return (
    <BaseLayout currentStep={3}>
      <p className={classes.title}>Результат</p>
      {curriculum ? (
        curriculum.map(renderTerm)
      ) : (
        <p>К сожалению, построить расписание не получалось. Попробуйте изменить входные данные.</p>
      )}

      <div className={classes.buttonContainer}>
        <Button variant="contained" onClick={() => navigate('/deps')} style={{marginRight: 20}}>
          Назад
        </Button>
        <Button variant="contained" onClick={() => navigate('/start')}>
          К началу
        </Button>
      </div>
    </BaseLayout>
  );
};

export default ResultsPage;
