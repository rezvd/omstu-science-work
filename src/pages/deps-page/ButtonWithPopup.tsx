import {makeStyles, Popover, Checkbox} from '@material-ui/core';
import IconButton, {Icons} from '../../components/iconButton/IconButton';
import {useState} from 'react';
import {Subject} from '../../typings/typings';
import {useAppSelector} from '../../redux/hooks/useAppSelector';
import {useAppDispatch} from '../../redux/hooks/useAppDispatch';
import {updateCurriculumAction} from '../../redux/actions/updateCurriculumAction';

const useStyles = makeStyles(() => ({
  container: {
    padding: 10,
    maxHeight: 250,
    maxWidth: 350,
    overflowY: 'scroll',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

type Props = {
  subject: Subject;
  competenceType: 'neededCompetentences' | 'earnedCompetentences';
};

const ButtonWithPopup: React.FC<Props> = ({subject, competenceType}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const dispatch = useAppDispatch();

  const competences = useAppSelector((state) => state.curriculum.competences);
  const subjects = useAppSelector((state) => state.curriculum.subjects);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onItemClick = (competence: string) => {
    const isChecked = subject[competenceType].includes(competence);
    const updatedSubjects = subjects.map((currentSubject) => {
      if (currentSubject.name !== subject.name) {
        return currentSubject;
      }
      const newCompetencesList = isChecked
        ? subject[competenceType].filter((item) => item !== competence)
        : [...subject[competenceType], competence];
      return {...subject, [competenceType]: newCompetencesList};
    });

    dispatch(updateCurriculumAction({subjects: updatedSubjects}));
  };

  const renderListItem = (competence: string) => (
    <div className={classes.itemContainer} onClick={() => onItemClick(competence)}>
      <Checkbox edge="start" checked={subject[competenceType].includes(competence)} />
      <p>{competence}</p>
    </div>
  );

  return (
    <>
      <IconButton icon={Icons.edit} size="medium" onClick={handleClick} />
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <div className={classes.container}>{competences.map(renderListItem)}</div>
      </Popover>
    </>
  );
};

export default ButtonWithPopup;
