import {makeStyles, Button, Grid, GridSize} from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import Expandable from '../../components/expandable/Expandable';
import BaseLayout from '../../components/base-layout/BaseLayout';
import QuestionTooltip from '../../components/question-tooltip/QuestionTooltip';
import {useAppSelector} from '../../redux/hooks/useAppSelector';
import {colors} from '../../styles/colors';
import {typography} from '../../styles/typography';
import {Subject} from '../../typings/typings';
import ButtonWithPopup from './ButtonWithPopup';

const useStyles = makeStyles(() => ({
  title: {
    ...typography.h1,
    marginBottom: 40,
  },

  /*   ===   table header   ===   */
  titleh2: {
    ...typography.h2,
    fontWeight: 500,
  },
  titleh3: {
    ...typography.h3,
    fontWeight: 500,
  },
  titleh4: {
    ...typography.h4,
    fontWeight: 500,
  },

  /*   ===   table cell   ===   */
  rowContainer: {
    borderBottom: `1px solid ${colors.border}`,
    paddingTop: '20px',
  },
  cellContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  expandable: {
    flexGrow: 1,
  },
  listItem: {
    ...typography.text,
    marginBottom: 10,
    fontSize: 16,
  },

  /*   ===   next button   ===   */
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 70,
  },
}));

const DepsPage: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const subjects = useAppSelector((state) => state.curriculum.subjects);

  const columsSizes: GridSize[] = [3, 4, 5];
  const spacing = 5;

  const renderCompetencesCell = (
    subject: Subject,
    competenceType: 'neededCompetentences' | 'earnedCompetentences',
  ) => (
    <div className={classes.cellContainer}>
      <Expandable
        header={<p>{`Компетенций: ${subject[competenceType].length}`}</p>}
        classname={classes.expandable}>
        <div>
          {subject[competenceType].map((competence, index) => (
            <p key={competence} className={classes.listItem}>{`${index + 1}. ${competence}`}</p>
          ))}
        </div>
      </Expandable>

      <ButtonWithPopup subject={subject} competenceType={competenceType} />
    </div>
  );

  const renderTableRows = () =>
    subjects.map((subject) => (
      <Grid container spacing={spacing} className={classes.rowContainer} key={subject.name}>
        <Grid item xs={columsSizes[0]}>
          <p>{subject.name}</p>
        </Grid>
        <Grid item xs={columsSizes[1]}>
          {renderCompetencesCell(subject, 'neededCompetentences')}
        </Grid>
        <Grid item xs={columsSizes[2]}>
          {renderCompetencesCell(subject, 'earnedCompetentences')}
        </Grid>
      </Grid>
    ));

  return (
    <BaseLayout currentStep={2}>
      <p className={classes.title}>Зависимости между дисциплинами и компетенциями</p>

      <div>
        <Grid container alignItems="center" spacing={spacing} className={classes.rowContainer}>
          <Grid item xs={columsSizes[0]}>
            <p className={classes.titleh2}>Дисциплины</p>
          </Grid>
          <Grid item xs={columsSizes[1]}>
            <p className={classes.titleh3}>Компетенции необходимые</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <p className={classes.titleh4}>для изучения данной дисциплины</p>
              <QuestionTooltip tooltipText="В этом столбце необходимо указать компетенции, которыми нужно овладеть до изучения данной дисциплины" />
            </div>
          </Grid>
          <Grid item xs={columsSizes[2]}>
            <p className={classes.titleh3}>Компетенции приобретаемые</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <p className={classes.titleh4}>в ходе изучения данной дисциплины</p>
              <QuestionTooltip tooltipText="В этом столбце необходимо указать компетенции, которые студент получит после изучения данной дисциплины" />
            </div>
          </Grid>
        </Grid>

        {renderTableRows()}
      </div>

      <div className={classes.buttonContainer}>
        <Button variant="contained" onClick={() => navigate('/params')} style={{marginRight: 20}}>
          Назад
        </Button>
        <Button variant="contained" color="primary" onClick={() => navigate('/result')}>
          Далее
        </Button>
      </div>
    </BaseLayout>
  );
};

export default DepsPage;
