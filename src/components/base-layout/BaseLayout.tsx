import {Theme, makeStyles, Stepper, Step, StepLabel} from '@material-ui/core';

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
  container: {
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
    <>
      <Stepper activeStep={currentStep} className={classes.stepper} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default BaseLayout;
