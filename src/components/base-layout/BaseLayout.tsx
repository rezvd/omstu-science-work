import {makeStyles, Stepper, Step, StepLabel} from '@material-ui/core';
import {useEffect} from 'react';
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
    backgroundColor: 'transparent',
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
      label: 'Старт',
      title: 'Старт',
      onClick: () => navigate('/start'),
    },
    {
      label: 'Общие параметры',
      title: 'Параметры',
      onClick: () => navigate('/params'),
    },
    {
      label: 'Установление зависимостей',
      title: 'Зависимости',
      onClick: () => navigate('/deps'),
    },
    {
      label: 'Готово!',
      title: 'Результат',
      onClick: () => navigate('/result'),
    },
  ];

  useEffect(() => {
    document.title = `Учебный план | ${steps[currentStep].title}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  return (
    <div className={classes.container}>
      <Stepper activeStep={currentStep} className={classes.stepper}>
        {steps.map(({label, onClick}) => (
          <Step key={label} onClick={onClick} className={classes.stepLabel}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.childrenContainer}>{children}</div>
    </div>
  );
};

export default BaseLayout;
