import {makeStyles, IconButton as MuiIconButton} from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles(() => ({
  container: {
    marginLeft: 5,
  },
}));

export enum Icons {
  create = 'create',
  edit = 'edit',
  delete = 'delete',
}

type Props = {
  icon: Icons;
  size?: 'medium' | 'large' | 'small';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const IconButton: React.FC<Props> = ({
  icon,
  size = 'large',
  disabled = false,
  onClick = () => {},
}) => {
  const classes = useStyles();

  const iconsMap = {
    [Icons.create]: () => <AddCircleOutlineIcon fontSize={size} />,
    [Icons.edit]: () => <EditIcon fontSize={size} />,
    [Icons.delete]: () => <DeleteIcon fontSize={size} />,
  };

  return (
    <MuiIconButton onClick={(e) => onClick(e)} disabled={disabled} className={classes.container}>
      {iconsMap[icon]()}
    </MuiIconButton>
  );
};

export default IconButton;
