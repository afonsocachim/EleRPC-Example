import { ClientApi, PayloadResult } from 'elerpc';

export const routerMap = {
  demoRouter: {
    handlers: {
      handleThis: () => async () => {
        return {
          message: 'Hello there General Kenobi',
          result: PayloadResult.Failure,
          data: null,
        };
      },
    },
    dispatchers: {
      dispatchThis: async () => {
        console.log('Executed');
        return { message: '', result: PayloadResult.Failure, data: null };
      },
    },
  },
};
export type ElClientAPI = ClientApi<typeof routerMap>;
