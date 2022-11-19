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

const initState: CurriculumState = {
  termsNumber: 8,
  maxCreditsInTerm: 40,
  subjects: [],
  competences: [],
};

const examleState: CurriculumState = {
  termsNumber: 8,
  maxCreditsInTerm: 40,
  subjects: exampleSubjects,
  competences: exampleCompetentions,
};

export type CurriculumActions = UpdateCurriculumActionResponse;

export default (state = examleState, action: CurriculumActions): CurriculumState => {
  switch (action.type) {
    case UPDATE_CURRICULUM_STATE: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};
