export type Subject = {
  name: string;
  neededCompetentences: string[];
  earnedCompetentences: string[];
  credits: number;
};

export type inputData = {
  termsNumber: number;
  maxCreditsInTerm: number;
  subjects: Subject[];
};

export type SubjectsDistribution = Subject[][];
