import {Theme, makeStyles} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import BaseLayout from '../../components/base-layout/BaseLayout';

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
  container: {
    padding: '72px 70px 70px 70px',
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
    </BaseLayout>
  );
};

export default ResultsPage;
