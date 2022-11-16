import {Theme, makeStyles} from '@material-ui/core';
import BaseLayout from '../../components/base-layout/BaseLayout';
import {typography} from '../../styles/typography';

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
  container: {
    padding: '72px 70px 70px 70px',
  },
  title: {
    ...typography.h1,
  },
  text: {
    ...typography.text,
  },
}));

const StartPage: React.FC = () => {
  const classes = useStyles();
  //   const dispatch = useDispatch();
  //   const company: string = useSelector((state: any) => state.companySettings.shortname);

  return (
    <BaseLayout currentStep={0}>
      <p className={classes.title}>Описание</p>
      <p className={classes.text}>
        Данный проект предназначен для составления учебного плана. Необходимо лишь ввести все входные
        данные, а именно список дисциплин, количество зачётных единиц по ним, компетенции и связи
        между компетенциями и дисциплинами, чтобы получить распределение дисциплин по семестрам с
        учётом ограничений на количество зачётных единиц в семестр и ограничений на покрытие дисциплин
        компетенциями.
      </p>
    </BaseLayout>
  );
};

export default StartPage;
