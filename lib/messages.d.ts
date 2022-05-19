import { Config, RuleBundle } from "./types";

export type BackgroundMessage =
  InitResponseMessage
  | OptOutMessage
  | DummyResponseMessage;

export type ContentScriptMessage =
  InitMessage
  | FoundMessage
  | SuccessMessage
  | FailureMessage;

type InitMessage = {
  type: "init";
};

type FoundMessage = {
  type: "popupFound";
  cmp: string;
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
  config: Config;
}

type OptOutMessage = {
  type: "optOut";
}

type DummyResponseMessage = {
  type: "dummyResp";
}
