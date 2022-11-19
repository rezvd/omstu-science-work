import {useDispatch} from 'react-redux';

import {AppActions, AppDispatch} from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch<AppActions>>();
