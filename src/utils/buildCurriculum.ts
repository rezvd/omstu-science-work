export type Subject = {
  name: string;
  neededCompetentences: string[];
  earnedCompetentences: string[];
  credits: number;
};

export type inputData = {
  termsCount: number;
  maxCreditsInTerm: number;
  subjects: Subject[];
};

export type SubjectsDistribution = {[terms: number]: Subject[]};

const doesAllSubjectsDistrubuted = (currentDistribution: SubjectsDistribution, subjectsNumber: number): boolean => {
  const addedSubjectsNum = Object.values(currentDistribution).reduce((sum, currentTerm) => sum + currentTerm.length, 0);
  console.log(`=== doesAllSubjectsDistrubuted ${addedSubjectsNum}/${subjectsNumber}`);
  return addedSubjectsNum === subjectsNumber;
};

const getSumOfCreditsInTerm = (currentDistribution: SubjectsDistribution, termNumber: number): number => {
  if (!currentDistribution[termNumber]) return 0;
  const creditsSum = currentDistribution[termNumber].reduce((sum, subject) => sum + subject.credits, 0);
  console.log(`=== getSumOfCreditsInTerm ${creditsSum}: ${currentDistribution[termNumber]}`);
  return creditsSum;
};

const isSubjectDistributed = (currentDistribution: SubjectsDistribution, subjectName: string): boolean => {
  const result = Object.values(currentDistribution)
    .flat()
    .find((subject) => subject.name === subjectName);
  return !!result;
};

const areCompetencesFullfiled = (neededCompetentences: string[], competences: string[]): boolean =>
  neededCompetentences.every((elem) => competences.includes(elem));

const getEarnedCompetences = (currentDistribution: SubjectsDistribution, currentTermNumber: number): string[] => {
  let currentCompetences: string[] = [];
  for (let i = 1; i < currentTermNumber; i++) {
    currentCompetences = [
      ...currentCompetences,
      ...currentDistribution[i].map((subject) => subject.earnedCompetentences).flat(),
    ];
  }
  return currentCompetences;
};

const findNextSubjectToDistribute = (
  currentDistribution: SubjectsDistribution,
  subjects: Subject[],
  currentTermNumber: number,
  maxCreditsInTerm: number,
): Subject | undefined => {
  let currentCompetences: string[] = getEarnedCompetences(currentDistribution, currentTermNumber);
  return subjects.find(
    (subject) =>
      !isSubjectDistributed(currentDistribution, subject.name) &&
      areCompetencesFullfiled(subject.neededCompetentences, currentCompetences) &&
      getSumOfCreditsInTerm(currentDistribution, currentTermNumber) + subject.credits <= maxCreditsInTerm,
  );
};

export const buildCurriculum = ({termsCount, maxCreditsInTerm, subjects}: inputData): SubjectsDistribution | null => {
  // temp data
  let currentTermNumber = 1;
  let currentDistribution: SubjectsDistribution = [];
  for (let i = 1; i <= termsCount; i++) {
    currentDistribution[i] = [];
  }

  console.log(currentDistribution);
  console.log(`=== starting`);

  while (!doesAllSubjectsDistrubuted(currentDistribution, subjects.length)) {
    const nextSubjectToDistribute = findNextSubjectToDistribute(
      currentDistribution,
      subjects,
      currentTermNumber,
      maxCreditsInTerm,
    );
    if (!nextSubjectToDistribute) {
      if (currentTermNumber === termsCount) {
        console.log(`=== max terms count, cannot add ${currentTermNumber}`);
        return null;
      }
      console.log(`=== add terms count to ${currentTermNumber + 1}`);
      currentTermNumber++;
      continue;
    }
    console.log(`=== add subject ${nextSubjectToDistribute?.name} to term ${currentTermNumber}`);
    currentDistribution[currentTermNumber] = [...currentDistribution[currentTermNumber], nextSubjectToDistribute];
  }

  return currentDistribution;
};
