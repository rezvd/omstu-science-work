import {makeStyles, Stepper, Step, StepLabel} from '@material-ui/core';
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles(() => ({
  container: {
    minWidth: 800,
    maxWidth: 1200,
    margin: '0 auto',
  },
  childrenContainer: {
    padding: '30px 70px',
  },
  stepper: {
    padding: '30px 70px',
  },
  stepLabel: {
    cursor: 'pointer',
  },
}));

type Props = {
  currentStep: number;
  children?: React.ReactNode;
};

const BaseLayout: React.FC<Props> = ({currentStep, children}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const steps = [
    {
      label: 'Начало',
      onClick: () => navigate('/start'),
    },
    {
      label: 'Общие параметры',
      onClick: () => navigate('/params'),
    },
    {
      label: 'Установление зависимостей',
      onClick: () => navigate('/deps'),
    },
    {
      label: 'Готово!',
      onClick: () => navigate('/result'),
    },
  ];

  return (
    <div className={classes.container}>
      <Stepper activeStep={currentStep} className={classes.stepper}>
        {steps.map(({label, onClick}) => (
          <Step key={label}>
            <StepLabel onClick={onClick} className={classes.stepLabel}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.childrenContainer}>{children}</div>
    </div>
  );
};

export default BaseLayout;
