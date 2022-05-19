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

type InitMessage = {
  type: "init";
};

type FoundMessage = {
  type: "popupFound";
  cmp: string;
}

type OptOutResultMessage = {
  type: "optOutResult";
  result: boolean;
};

type OptInResultMessage = {
  type: "optInResult";
  result: boolean;
};

type SelfTestResultMessage = {
  type: "selfTestResult";
  result: boolean;
};

type InitResponseMessage = {
  type: "initResp";
  rules: RuleBundle;
  config: Config;
}

type OptOutMessage = {
  type: "optOut";
}

type OptInMessage = {
  type: "optIn";
}

type SelfTestMessage = {
  type: "selfTest";
}
