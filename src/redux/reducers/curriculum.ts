import {Subject} from '../../typings/typings';
import {
  UpdateCurriculumActionResponse,
  UPDATE_CURRICULUM_STATE,
} from '../actions/updateCurriculumAction';
import {exampleCompetentions, exampleSubjects} from '../exampleData';

export type CurriculumState = {
  termsNumber: number;
  maxCreditsInTerm: number;
  subjects: Subject[];
  competences: string[];
};

export const initState: CurriculumState = {
  termsNumber: 1,
  maxCreditsInTerm: 1,
  subjects: [],
  competences: [],
};

export const exampleState: CurriculumState = {
  termsNumber: 3,
  maxCreditsInTerm: 10,
  subjects: exampleSubjects,
  competences: exampleCompetentions,
};

export type CurriculumActions = UpdateCurriculumActionResponse;

export default (state = initState, action: CurriculumActions): CurriculumState => {
  switch (action.type) {
    case UPDATE_CURRICULUM_STATE: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};
