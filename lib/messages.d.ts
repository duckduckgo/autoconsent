export type ContentScriptMessage =
  | ClickMessage
  | ElemExistsMessage
  | ElemVisibleMessage
  | GetAttributeMessage
  | EvalMessage
  | HideMessage
  | UndoHideMessage
  | MatchesMessage
  | ActionMessage;

export type HideMethod = 'display' | 'opacity';

type ClickMessage = {
  type: "click";
  selector: string;
  all?: boolean;
};

type ElemExistsMessage = {
  type: "elemExists";
  selector: string;
};

type ElemVisibleMessage = {
  type: "elemVisible";
  selector: string;
  check?: "any" | "none" | "all";
};

type GetAttributeMessage = {
  type: "getAttribute";
  selector: string;
  attribute: string;
};

type EvalMessage = {
  type: "eval";
  script: string;
};

type HideMessage = {
  type: "hide";
  selectors: string[];
  method: HideMethod;
};

type UndoHideMessage = {
  type: "undohide"
};

type MatchesMessage = {
  type: "matches";
  config: any;
};

type ActionMessage = {
  type: "executeAction";
  config: any;
  param: any;
};
