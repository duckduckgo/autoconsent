import { ContentScriptMessage } from './messages';
import { ConsentOMaticConfig } from './cmps/consentomatic';
import { AutoConsentCMPRule, ElementSelector, HideMethod, RunContext, VisibilityCheck } from './rules';
import { CompactCMPRuleset } from './encoding';

export type MessageSender = (message: ContentScriptMessage) => Promise<void>;

export interface AutoCMP {
    name: string;
    hasSelfTest: boolean;
    isIntermediate: boolean;
    isCosmetic: boolean;
    prehideSelectors?: string[];
    runContext: RunContext;
    checkRunContext(): boolean;
    checkFrameContext(isTop: boolean): boolean;
    hasMatchingUrlPattern(): boolean;
    detectCmp(): Promise<boolean>;
    detectPopup(): Promise<boolean>;
    optOut(): Promise<boolean>;
    optIn(): Promise<boolean>;
    openCmp(): Promise<boolean>;
    test(): Promise<boolean>;
}

export interface DomActionsProvider {
    click(selector: ElementSelector, all: boolean): Promise<boolean>;
    clickElement(element: HTMLElement): Promise<boolean>;
    elementExists(selector: ElementSelector): boolean;
    elementVisible(selector: ElementSelector, check: VisibilityCheck): boolean;
    waitForElement(selector: ElementSelector, timeout?: number): Promise<boolean>;
    waitForVisible(selector: ElementSelector, timeout?: number, check?: VisibilityCheck): Promise<boolean>;
    waitForThenClick(selector: ElementSelector, timeout?: number, all?: boolean): Promise<boolean>;
    wait(ms: number): Promise<true>;
    hide(selector: string, method: HideMethod): boolean;
    removeClass(selector: ElementSelector, className: string): boolean;
    setStyle(selector: ElementSelector, css: string): boolean;
    addStyle(selector: ElementSelector, css: string): boolean;
    prehide(selector: string): boolean;
    undoPrehide(): void;
    querySingleReplySelector(selector: string, parent?: any): HTMLElement[];
    querySelectorChain(selectors: string[]): HTMLElement[];
    elementSelector(selector: ElementSelector): HTMLElement[];
    waitForMutation(selector: ElementSelector): Promise<boolean>;
}

export type RuleBundle = {
    autoconsent: AutoConsentCMPRule[];
    compact?: CompactCMPRuleset;
    consentomatic?: { [name: string]: ConsentOMaticConfig };
};

export type AutoAction = 'optOut' | 'optIn' | null;

export type Config = {
    enabled: boolean;
    autoAction: AutoAction;
    disabledCmps: string[];
    enablePrehide: boolean;
    enableCosmeticRules: boolean;
    enableGeneratedRules: boolean;
    detectRetries: number;
    isMainWorld: boolean;
    prehideTimeout: number;
    enableHeuristicDetection: boolean;
    enableHeuristicAction: boolean;
    enablePopupMutationObserver: boolean;
    visualTest: boolean; // If true, the script will delay before every click action
    logs: {
        lifecycle: boolean;
        rulesteps: boolean;
        detectionsteps: boolean;
        evals: boolean;
        errors: boolean;
        messages: boolean;
        waits: boolean;
    };
    performanceLoggingEnabled: boolean;
    heuristicPopupSearchTimeout: number;
    heuristicMode: PopupHandlingMode; // controls the behavior of the heuristic popup detection. Has no effect if enableHeuristicDetection is false.
};

export type LifecycleState =
    | 'loading'
    | 'initialized'
    | 'waitingForInitResponse'
    | 'started'
    | 'nothingDetected'
    | 'cmpDetected'
    | 'openPopupDetected'
    | 'runningOptOut'
    | 'runningOptIn'
    | 'optOutSucceeded'
    | 'optOutFailed'
    | 'optInSucceeded'
    | 'optInFailed'
    | 'done';

export type ConsentState = {
    lifecycle: LifecycleState; // What point in the autoconsent lifecycle this script is at.
    prehideOn: boolean; // If the script is currently hiding preHide elements.
    findCmpAttempts: number; // Number of times we tried to find CMPs in this frame.
    detectedCmps: string[]; // Names of CMP rules where `detectCmp` returned true.
    detectedPopups: string[]; // Names of CMP rules where `detectPopup` returned true.
    heuristicPatterns: string[]; // Matched heuristic patterns
    heuristicSnippets: string[]; // Matched heuristic snippets
    selfTest: boolean | null; // null if no self test was run, otherwise it holds the result of the self test.
    clicks: number; // Number of clicks the script has made.
    startTime: number; // The time the script started.
    endTime: number; // The time the script ended.
    performance?: Record<string, number[]>;
};

export type ButtonRegexClassification = 'reject' | 'settings' | 'accept' | 'acknowledge' | 'other';

export interface ButtonData {
    text: string;
    element: HTMLElement;
    regexClassification?: ButtonRegexClassification;
}

export interface PopupData {
    text: string;
    element: HTMLElement;
    buttons: ButtonData[];
    regexClassification?: PopupHandlingMode;
}

/**
 * Controls the behavior of the heuristic popup detection.
 *  - Reject: Will click the reject button on a popup if it exists.
 *  - Tier1: Will also click the acknowledge button on a popup if it exists, and no Reject button exists.
 *  - Tier2: Will also click the accept button on a popup if it exists, and no Reject or Acknowledge button exists.
 *  - None: Disabled
 */
export const PopupHandlingModes = {
    None: -1,
    Reject: 0,
    Tier1: 1,
    Tier2: 2,
} as const;
export type PopupHandlingMode = (typeof PopupHandlingModes)[keyof typeof PopupHandlingModes];
