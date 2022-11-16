import {Theme, makeStyles} from '@material-ui/core';
import BaseLayout from '../../components/base-layout/BaseLayout';

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
  container: {
    padding: '72px 70px 70px 70px',
  },
}));

const DepsPage: React.FC = () => {
  const classes = useStyles();
  //   const dispatch = useDispatch();
  //   const company: string = useSelector((state: any) => state.companySettings.shortname);

  return (
    <BaseLayout currentStep={2}>
      <p>New page</p>
    </BaseLayout>
  );
};

export default DepsPage;
