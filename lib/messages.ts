import { Config, RuleBundle } from "./types";

export type BackgroundMessage =
  InitResponseMessage
  | OptOutMessage
  | OptInMessage
  | SelfTestMessage;

export type ContentScriptMessage =
  InitMessage
  | FoundMessage
  | OptOutResultMessage
  | OptInResultMessage
  | SelfTestResultMessage;

export type InitMessage = {
  type: "init";
};

export type FoundMessage = {
  type: "popupFound";
  cmp: string;
}

export type OptOutResultMessage = {
  type: "optOutResult";
  result: boolean;
};

export type OptInResultMessage = {
  type: "optInResult";
  result: boolean;
};

export type SelfTestResultMessage = {
  type: "selfTestResult";
  result: boolean;
};

export type InitResponseMessage = {
  type: "initResp";
  rules: RuleBundle;
  config: Config;
}

export type OptOutMessage = {
  type: "optOut";
}

export type OptInMessage = {
  type: "optIn";
}

export type SelfTestMessage = {
  type: "selfTest";
}