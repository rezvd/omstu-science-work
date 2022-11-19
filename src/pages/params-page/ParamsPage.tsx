import {makeStyles, TextField, Button} from '@material-ui/core';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Subject} from '../../typings/typings';
import {useAppDispatch} from '../../redux/hooks/useAppDispatch';
import {useAppSelector} from '../../redux/hooks/useAppSelector';
import {updateCurriculumAction} from '../../redux/actions/updateCurriculumAction';
import BaseLayout from '../../components/base-layout/BaseLayout';
import QuestionTooltip from '../../components/QuestionTooltip/QuestionTooltip';
import {typography} from '../../styles/typography';
import IconButton, {Icons} from '../../components/iconButton/IconButton';

const useStyles = makeStyles(() => ({
  title: {
    ...typography.h1,
  },
  /*   ===   number inputs part   ===   */
  inputText: {
    ...typography.text,
    display: 'inline',
    maxWidth: 350,
  },
  numberInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  numberInput: {
    width: 70,
    marginLeft: 50,
  },
  /*   ===   text field with button   ===   */
  twoColumnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
    marginTop: 80,
  },
  inputListColumn: {
    minWidth: 400,
    marginRight: 40,
  },
  titleh2: {
    ...typography.h2,
    marginBottom: 30,
  },
  textInputSubjects: {
    width: '60%',
    marginRight: 15,
    marginBottom: 30,
  },
  textInputCompetences: {
    width: '80%',
    marginRight: 15,
    marginBottom: 30,
  },
  creditsNumberInput: {
    width: 70,
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

const ParamsPage: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const competences = useAppSelector((state) => state.curriculum.competences);
  const subjects = useAppSelector((state) => state.curriculum.subjects);
  const maxCreditsInTerm = useAppSelector((state) => state.curriculum.maxCreditsInTerm);
  const termsNumber = useAppSelector((state) => state.curriculum.termsNumber);

  const [tempSubject, setTemSubject] = useState('');
  const [tempCompetence, setTermCompetence] = useState('');
  const [tempCredits, setTempCredits] = useState(1);

  const onTermsNumberChange = (e: any) => {
    const value = Number(e.currentTarget.value);
    if (value >= 1 && value <= 20) {
      dispatch(updateCurriculumAction({termsNumber: value}));
    }
  };

  const onMaxCreditsChange = (e: any) => {
    const value = Number(e.currentTarget.value);
    if (value >= 1 && value <= 2000) {
      dispatch(updateCurriculumAction({maxCreditsInTerm: value}));
    }
  };

  const onTempCreditsChange = (e: any) => {
    const value = Number(e.currentTarget.value);
    if (value >= 0 && value <= 100) {
      setTempCredits(value);
    }
  };

  const addSubject = () => {
    const newSubject: Subject = {
      name: tempSubject,
      neededCompetentences: [],
      earnedCompetentences: [],
      credits: tempCredits,
    };
    dispatch(updateCurriculumAction({subjects: [...subjects, newSubject]}));
    setTemSubject('');
    setTempCredits(0);
  };

  const addCompetence = () => {
    dispatch(updateCurriculumAction({competences: [...competences, tempCompetence]}));
    setTermCompetence('');
  };

  const renderSubjects = () =>
    subjects.map((subject, index) => (
      <p key={subject.name} className={classes.listItem}>{`${index + 1}. ${subject.name}, ${
        subject.credits
      } з.е.`}</p>
    ));

  const renderCompetences = () =>
    competences.map((competence, index) => (
      <p key={competence} className={classes.listItem}>{`${index + 1}. ${competence}`}</p>
    ));

  return (
    <BaseLayout currentStep={1}>
      <p className={classes.title}>Ввод параметров и ограничений</p>
      {/*   ===   number inputs part   ===   */}
      <div className={classes.numberInputContainer}>
        <p className={classes.inputText}>Количество семестров</p>
        <QuestionTooltip tooltipText="Количество семестров в вашем учебном плане" />
        <TextField
          className={classes.numberInput}
          type="number"
          value={termsNumber}
          onChange={onTermsNumberChange}
          variant="standard"
        />
      </div>
      <div className={classes.numberInputContainer}>
        <p className={classes.inputText}>Максимальное количество зачётных единиц в семестре</p>
        <QuestionTooltip tooltipText="Ограничение по количеству зачётных единиц в семестре" />
        <TextField
          className={classes.numberInput}
          type="number"
          value={maxCreditsInTerm}
          onChange={onMaxCreditsChange}
          variant="standard"
        />
      </div>

      <div className={classes.twoColumnsContainer}>
        {/*   ===   subjects   ===   */}
        <div className={classes.inputListColumn}>
          <p className={classes.titleh2}>Дисциплины</p>
          <div>
            <TextField
              className={classes.textInputSubjects}
              value={tempSubject}
              onChange={(e) => setTemSubject(e.currentTarget.value)}
              variant="outlined"
              placeholder="Название дисциплины"
            />
            <TextField
              className={classes.creditsNumberInput}
              type="number"
              value={tempCredits}
              onChange={onTempCreditsChange}
              variant="outlined"
              label="з.е."
            />
            <IconButton
              icon={Icons.create}
              onClick={addSubject}
              disabled={tempSubject.length === 0}
            />
          </div>
          {renderSubjects()}
        </div>

        {/*   ===   competentences   ===   */}
        <div className={classes.inputListColumn}>
          <p className={classes.titleh2}>Компетенции</p>
          <div>
            <TextField
              className={classes.textInputCompetences}
              value={tempCompetence}
              onChange={(e) => setTermCompetence(e.currentTarget.value)}
              variant="outlined"
              placeholder="Название компетенции"
            />
            <IconButton
              icon={Icons.create}
              onClick={addCompetence}
              disabled={tempCompetence.length === 0}
            />
          </div>
          {renderCompetences()}
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button variant="contained" onClick={() => navigate('/start')} style={{marginRight: 20}}>
          Назад
        </Button>
        <Button variant="contained" color="primary" onClick={() => navigate('/deps')}>
          Далее
        </Button>
      </div>
    </BaseLayout>
  );
};

export default ParamsPage;
