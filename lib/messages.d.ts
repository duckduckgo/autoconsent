import { RuleBundle } from "./types";

export type BackgroundMessage =
  InitResponseMessage
  | DummyResponseMessage;

export type ContentScriptMessage =
  InitMessage
  | FoundMessage
  | SuccessMessage
  | FailureMessage;

export type HideMethod = 'display' | 'opacity';

type InitMessage = {
  type: "init";
};

type FoundMessage = {
  type: "popupFound";
}

type SuccessMessage = {
  type: "success";
};

type FailureMessage = {
  type: "failure";
};

type InitResponseMessage = {
  type: "initResp";
  rules: RuleBundle;
  enabled: boolean;
  autoOptOut: boolean;
  disabledCmps: string[];
}

type DummyResponseMessage = {
  type: "dummyResp";
}
