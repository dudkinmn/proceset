export interface IProcessListProps {}

export type TProcess = {
  id: string;
  name: string;
  numberOfExecutions: number;
  averageLeadTime: string;
  averageActiveTime: string;
  employeesInvolvedProcess: number;
  numberOfScenarios: number;
  start: string;
  end: string;
  loading: string;
};

export type TProcessListData = { processList: TProcess[] };
