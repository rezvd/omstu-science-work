import {makeStyles, Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {colors} from '../../styles/colors';

const useStyles = makeStyles(() => ({
  container: {
    border: `1px solid ${colors.border}`,
  },
}));

type Props = {
  header: React.ReactNode;
  children: React.ReactNode;
  classname?: string;
};

const Expandable: React.FC<Props> = ({header, children, classname = ''}) => {
  const classes = useStyles();

  return (
    <Accordion className={`${classes.container} ${classname}`}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        {header}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default Expandable;
