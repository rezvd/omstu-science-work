import {makeStyles, Tooltip} from '@material-ui/core';
import {colors} from '../../styles/colors';
import {typography} from '../../styles/typography';

const useStyles = makeStyles(() => ({
  tooltip: {
    margin: '0 18px',
    width: 18,
    height: 18,
    boxSizing: 'border-box',
    cursor: 'pointer',
    backgroundColor: colors.darkGray1,
    borderRadius: '50%',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionMark: {
    ...typography.text,
    fontWeight: 700,
    fontSize: 14,
    color: colors.background,
    paddingTop: 2,
  },
}));

type Props = {
  tooltipText?: string;
};

const QuestionTooltip: React.FC<Props> = ({tooltipText = 'Подсказка'}) => {
  const classes = useStyles();

  return (
    <Tooltip title={tooltipText} className={classes.tooltip}>
      <p className={classes.questionMark}>?</p>
    </Tooltip>
  );
};

export default QuestionTooltip;
