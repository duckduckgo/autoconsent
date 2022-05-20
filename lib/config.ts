import { AutoAction } from "./types";

export const enableLogs = false; // change this to enable debug logs
export const autoAction: AutoAction = 'optOut'; // if falsy, the extension will wait for an explicit user signal before opting in/out
export const runSelfTest = false;
