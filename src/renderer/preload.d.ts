/* eslint-disable no-unused-vars */
import type { ElClientAPI } from '../main/api';

declare global {
  interface Window {
    api: ElClientAPI;
  }
}

export {};
