import {Theme, makeStyles, Stepper, Step, StepLabel} from '@material-ui/core';

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
  container: {
    minWidth: 800,
    maxWidth: 1200,
    margin: '0 auto',
  },
  childrenContainer: {
    padding: '30px 70px',
  },
  stepper: {
    marginTop: '50px',
  },
}));

type Props = {
  currentStep: number;
  children?: React.ReactNode;
};

const BaseLayout: React.FC<Props> = ({currentStep, children}) => {
  const classes = useStyles();

  const steps = ['Начало', 'Общие параметры', 'Установление зависимостей', 'Готово!'];

  return (
    <div className={classes.container}>
      <Stepper activeStep={currentStep} className={classes.stepper} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.childrenContainer}>{children}</div>
    </div>
  );
};

export default BaseLayout;
