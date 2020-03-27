export interface IProcessProps {

        process : {
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
}

export type TProcessProps = IProcessProps;