import { RuleBundle } from "./types";

export type BackgroundMessage =
  InitResponseMessage
  | DummyResponseMessage;

export type ContentScriptMessage =
  InitMessage
  | SuccessMessage
  | FailureMessage;

export type HideMethod = 'display' | 'opacity';

type InitMessage = {
  type: "init";
};

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
}

type DummyResponseMessage = {
  type: "dummyResp";
}
