import {makeStyles, Button, Snackbar} from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BaseLayout from '../../components/base-layout/BaseLayout';
import {typography} from '../../styles/typography';
import {useAppDispatch} from '../../redux/hooks/useAppDispatch';
import {updateCurriculumAction} from '../../redux/actions/updateCurriculumAction';
import {exampleState, initState} from '../../redux/reducers/curriculum';
import {useState} from 'react';
import {Alert} from '@mui/material';

const useStyles = makeStyles(() => ({
  title: {
    ...typography.h1,
  },
  text: {
    ...typography.text,
    marginBottom: 16,
  },
  dataButtons: {
    marginTop: 20,
    marginRight: 20,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 70,
  },
}));

const StartPage: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [snackbarText, setSnackbarText] = useState('');

  const crearData = () => {
    dispatch(updateCurriculumAction(initState));
    setSnackbarText('Данные были очищены');
  };
  const addExample = () => {
    dispatch(updateCurriculumAction(exampleState));
    setSnackbarText('Тестовые данные были добавлены');
  };

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
      <p className={classes.text}>На любом этапе вы можете вернуться назад и обновить данные</p>
      <p className={classes.text}>
        Также вы можете <strong>ввести тестовые данные</strong> в систему для примера или{' '}
        <strong>очистить</strong> все введённые данные и начать с нуля.
      </p>

      <Button
        variant="contained"
        className={classes.dataButtons}
        startIcon={<ListAltIcon />}
        onClick={addExample}>
        Ввести тестовые данные
      </Button>
      <Button
        variant="contained"
        className={classes.dataButtons}
        startIcon={<DeleteIcon />}
        onClick={crearData}>
        Очистить данные
      </Button>
      <Snackbar
        open={snackbarText.length !== 0}
        autoHideDuration={6000}
        anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
        onClose={() => setSnackbarText('')}>
        <Alert severity="info" variant="filled">
          {snackbarText}
        </Alert>
      </Snackbar>

      <div className={classes.buttonContainer}>
        <Button variant="contained" color="primary" onClick={() => navigate('/params')}>
          Далее
        </Button>
      </div>
    </BaseLayout>
  );
};

export default StartPage;
