import {Theme, makeStyles, TextField, Button, IconButton} from '@material-ui/core';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import BaseLayout from '../../components/base-layout/BaseLayout';
import QuestionTooltip from '../../components/QuestionTooltip/QuestionTooltip';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {typography} from '../../styles/typography';

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
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
  textInput: {
    width: '80%',
    marginRight: 15,
    marginBottom: 30,
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
  //   const dispatch = useDispatch();
  //   const company: string = useSelector((state: any) => state.companySettings.shortname);

  const [termNumber, setTermsNumber] = useState(8);
  const [maxCredits, setMaxCredits] = useState(200);

  const [tempSubject, setTemSubject] = useState('');
  const [subjects, setSubjects] = useState<string[]>([]);

  const [tempCompentence, setTermCompentence] = useState('');
  const [compentences, setCompentences] = useState<string[]>([]);

  const onTermsNumberChange = (e: any) => {
    const value = Number(e.currentTarget.value);
    if (value >= 1 && value <= 20) {
      setTermsNumber(value);
    }
  };

  const onMaxCreditsChange = (e: any) => {
    const value = Number(e.currentTarget.value);
    if (value >= 1 && value <= 2000) {
      setMaxCredits(value);
    }
  };

  const addSubject = () => {
    setSubjects([...subjects, tempSubject]);
    setTemSubject('');
  };

  const addCompetence = () => {
    setCompentences([...compentences, tempCompentence]);
    setTermCompentence('');
  };

  const renderSubjects = () =>
    subjects.map((subject, index) => (
      <p key={subject} className={classes.listItem}>{`${index + 1}. ${subject}`}</p>
    ));

  const renderCompetences = () =>
    compentences.map((subject, index) => (
      <p key={subject} className={classes.listItem}>{`${index + 1}. ${subject}`}</p>
    ));

  return (
    <BaseLayout currentStep={1}>
      <p className={classes.title}>Описание</p>
      {/*   ===   number inputs part   ===   */}
      <div className={classes.numberInputContainer}>
        <p className={classes.inputText}>Количество семестров</p>
        <QuestionTooltip />
        <TextField
          className={classes.numberInput}
          type="number"
          value={termNumber}
          onChange={onTermsNumberChange}
          variant="standard"
        />
      </div>
      <div className={classes.numberInputContainer}>
        <p className={classes.inputText}>Максимальное количество зачётных единиц в семестре</p>
        <QuestionTooltip />
        <TextField
          className={classes.numberInput}
          type="number"
          value={maxCredits}
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
              className={classes.textInput}
              value={tempSubject}
              onChange={(e) => setTemSubject(e.currentTarget.value)}
              variant="outlined"
              placeholder="Введите название дисциплины"
            />
            <IconButton onClick={addSubject} disabled={tempSubject.length === 0}>
              <ControlPointIcon fontSize="large" />
            </IconButton>
          </div>
          {renderSubjects()}
        </div>

        {/*   ===   competentences   ===   */}
        <div className={classes.inputListColumn}>
          <p className={classes.titleh2}>Компетенции</p>
          <div>
            <TextField
              className={classes.textInput}
              value={tempCompentence}
              onChange={(e) => setTermCompentence(e.currentTarget.value)}
              variant="outlined"
              placeholder="Введите название компетенции"
            />
            <IconButton onClick={addCompetence} disabled={tempCompentence.length === 0}>
              <ControlPointIcon fontSize="large" />
            </IconButton>
          </div>
          {renderCompetences()}
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button variant="contained" onClick={() => navigate('/deps')}>
          Далее
        </Button>
      </div>
    </BaseLayout>
  );
};

export default ParamsPage;
