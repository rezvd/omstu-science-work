import {makeStyles, Button} from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import BaseLayout from '../../components/base-layout/BaseLayout';

const useStyles = makeStyles(() => ({
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
  //   const dispatch = useDispatch();
  //   const company: string = useSelector((state: any) => state.companySettings.shortname);

  return (
    <BaseLayout currentStep={3}>
      <p>New page</p>

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
