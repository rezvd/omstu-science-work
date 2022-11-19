import {CurriculumState} from '../reducers/curriculum';
import {AppDispatch} from '../store';

export const UPDATE_CURRICULUM_STATE = 'UPDATE_CURRICULUM_STATE';

export type UpdateCurriculumActionRequest = Partial<CurriculumState>;

export type UpdateCurriculumActionResponse = {
  type: typeof UPDATE_CURRICULUM_STATE;
  payload: Partial<CurriculumState>;
};

export const updateCurriculumAction =
  (data: UpdateCurriculumActionRequest) =>
  async (dispatch: AppDispatch<UpdateCurriculumActionResponse>) => {
    dispatch({type: UPDATE_CURRICULUM_STATE, payload: data});
  };
