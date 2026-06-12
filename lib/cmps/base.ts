import { AutoCMP, ButtonData, DomActionsProvider, PopupData } from '../types';
import { AutoConsentCMPRule, AutoConsentRuleStep, ElementSelector, HideMethod, RunContext, VisibilityCheck } from '../rules';
import { requestEval } from '../eval-handler';
import AutoConsent from '../web';
import { getFunctionBody, snippets } from '../eval-snippets';
import { highlightNode, isElementVisible, isTopFrame, unhighlightNode } from '../utils';
import { getActionablePopups } from '../heuristics';

export async function success(action: Promise<boolean>): Promise<boolean> {
    const result = await action;
    if (!result) {
        throw new Error(`Action failed: ${action} ${result}`);
    }
    return result;
}

export const defaultRunContext: RunContext = {
    main: true,
    frame: false,
    urlPattern: '',
};

export default class AutoConsentCMPBase implements AutoCMP, DomActionsProvider {
    name: string = 'BASERULE';
    runContext: RunContext = defaultRunContext;
    autoconsent: AutoConsent;

    constructor(autoconsentInstance: AutoConsent) {
        this.autoconsent = autoconsentInstance;
    }

    get hasSelfTest(): boolean {
        throw new Error('Not Implemented');
    }

    get isIntermediate(): boolean {
        throw new Error('Not Implemented');
    }

    get isCosmetic(): boolean {
        throw new Error('Not Implemented');
    }

    mainWorldEval(snippetId: keyof typeof snippets): Promise<boolean> {
        const snippet = snippets[snippetId];
        if (!snippet) {
            this.autoconsent.config.logs.errors && console.warn('Snippet not found', snippetId);
            return Promise.resolve(false);
        }
        const logsConfig = this.autoconsent.config.logs;

        if (this.autoconsent.config.isMainWorld) {
            logsConfig.evals && console.log('inline eval:', snippetId, snippet);
            let result = false;
            try {
                result = !!snippet.call(globalThis);
            } catch (e) {
                // ignore exceptions
                logsConfig.evals && console.error('error evaluating rule', snippetId, e);
            }
            return Promise.resolve(result);
        }

        const snippetSrc = getFunctionBody(snippet);
        logsConfig.evals && console.log('async eval:', snippetId, snippetSrc);
        return requestEval(snippetSrc, snippetId).catch((e) => {
            logsConfig.evals && console.error('error evaluating rule', snippetId, e);
            return false;
        });
    }

    checkRunContext(): boolean {
        if (!this.checkFrameContext(isTopFrame())) {
            return false;
        }
        if (this.runContext.urlPattern && !this.hasMatchingUrlPattern()) {
            return false;
        }
        return true;
    }

    checkFrameContext(isTop: boolean): boolean {
        const runCtx: RunContext = {
            ...defaultRunContext,
            ...this.runContext,
        };

        if (isTop && !runCtx.main) {
            return false;
        }

        if (!isTop && !runCtx.frame) {
            return false;
        }
        return true;
    }

    hasMatchingUrlPattern(): boolean {
        return Boolean(this.runContext?.urlPattern && window.location.href.match(this.runContext.urlPattern));
    }

    detectCmp(): Promise<boolean> {
        throw new Error('Not Implemented');
    }

    async detectPopup() {
        return false;
    }

    optOut(): Promise<boolean> {
        throw new Error('Not Implemented');
    }

    optIn(): Promise<boolean> {
        throw new Error('Not Implemented');
    }

    openCmp(): Promise<boolean> {
        throw new Error('Not Implemented');
    }

    async test(): Promise<boolean> {
        // try IAB by default
        return Promise.resolve(true);
    }

    async highlightElements(elements: HTMLElement[], all = false, delayTimeout = 2000) {
        if (elements.length === 0) {
            return;
        }
        if (!all) {
            elements = [elements[0]];
        }

        this.autoconsent.sendContentMessage({
            type: 'visualDelay',
            timeout: delayTimeout,
        });

        for (const el of elements) {
            this.autoconsent.config.logs.rulesteps && console.log('highlighting', el);
            highlightNode(el);
        }
        await this.wait(delayTimeout);
        for (const el of elements) {
            unhighlightNode(el);
        }
    }

    // Implementing DomActionsProvider below:
    async clickElement(element: HTMLElement): Promise<boolean> {
        if (this.autoconsent.config.visualTest) {
            await this.highlightElements([element]);
        }
        this.autoconsent.updateState({ clicks: this.autoconsent.state.clicks + 1 });
        return this.autoconsent.domActions.clickElement(element);
    }

    async click(selector: ElementSelector, all = false) {
        if (this.autoconsent.config.visualTest) {
            await this.highlightElements(this.elementSelector(selector), all);
        }
        this.autoconsent.updateState({ clicks: this.autoconsent.state.clicks + 1 });
        return this.autoconsent.domActions.click(selector, all);
    }

    elementExists(selector: ElementSelector) {
        return this.autoconsent.domActions.elementExists(selector);
    }

    elementVisible(selector: ElementSelector, check?: VisibilityCheck) {
        return this.autoconsent.domActions.elementVisible(selector, check);
    }

    waitForElement(selector: ElementSelector, timeout?: number) {
        return this.autoconsent.domActions.waitForElement(selector, timeout);
    }

    waitForVisible(selector: ElementSelector, timeout?: number, check?: VisibilityCheck) {
        return this.autoconsent.domActions.waitForVisible(selector, timeout, check);
    }

    async waitForThenClick(selector: ElementSelector, timeout?: number, all?: boolean) {
        if (this.autoconsent.config.visualTest) {
            await this.highlightElements(this.elementSelector(selector), all);
        }
        this.autoconsent.updateState({ clicks: this.autoconsent.state.clicks + 1 });
        return this.autoconsent.domActions.waitForThenClick(selector, timeout, all);
    }

    wait(ms: number) {
        return this.autoconsent.domActions.wait(ms);
    }

    hide(selector: string, method?: HideMethod) {
        return this.autoconsent.domActions.hide(selector, method);
    }

    removeClass(selector: ElementSelector, className: string) {
        return this.autoconsent.domActions.removeClass(selector, className);
    }

    setStyle(selector: ElementSelector, css: string) {
        return this.autoconsent.domActions.setStyle(selector, css);
    }

    addStyle(selector: ElementSelector, css: string) {
        return this.autoconsent.domActions.addStyle(selector, css);
    }

    cookieContains(substring: string) {
        return this.autoconsent.domActions.cookieContains(substring);
    }

    prehide(selector: string) {
        return this.autoconsent.domActions.prehide(selector);
    }

    undoPrehide() {
        return this.autoconsent.domActions.undoPrehide();
    }

    querySingleReplySelector(selector: string, parent?: any) {
        return this.autoconsent.domActions.querySingleReplySelector(selector, parent);
    }

    querySelectorChain(selectors: string[]) {
        return this.autoconsent.domActions.querySelectorChain(selectors);
    }

    elementSelector(selector: ElementSelector) {
        return this.autoconsent.domActions.elementSelector(selector);
    }

    waitForMutation(selector: ElementSelector) {
        return this.autoconsent.domActions.waitForMutation(selector);
    }
}

export class AutoConsentCMP extends AutoConsentCMPBase {
    constructor(
        public rule: AutoConsentCMPRule,
        autoconsentInstance: AutoConsent,
    ) {
        super(autoconsentInstance);
        this.name = rule.name;
        this.runContext = rule.runContext || defaultRunContext;
    }

    get hasSelfTest(): boolean {
        return !!this.rule.test && this.rule.test.length > 0;
    }

    get isIntermediate(): boolean {
        return !!this.rule.intermediate;
    }

    get isCosmetic(): boolean {
        return !!this.rule.cosmetic;
    }

    get prehideSelectors(): string[] {
        return this.rule.prehideSelectors || [];
    }

    async detectCmp() {
        if (this.rule.detectCmp) {
            return this._runRulesSequentially(this.rule.detectCmp, this.autoconsent.config.logs.detectionsteps);
        }
        return false;
    }

    async detectPopup() {
        if (this.rule.detectPopup) {
            return this._runRulesSequentially(this.rule.detectPopup, this.autoconsent.config.logs.detectionsteps);
        }
        return false;
    }

    async optOut() {
        const logsConfig = this.autoconsent.config.logs;
        if (this.rule.optOut) {
            logsConfig.lifecycle && console.log('Initiated optOut()', this.rule.optOut);
            return this._runRulesSequentially(this.rule.optOut, this.autoconsent.config.logs.rulesteps);
        }
        return false;
    }

    async optIn() {
        const logsConfig = this.autoconsent.config.logs;
        if (this.rule.optIn) {
            logsConfig.lifecycle && console.log('Initiated optIn()', this.rule.optIn);
            return this._runRulesSequentially(this.rule.optIn, this.autoconsent.config.logs.rulesteps);
        }
        return false;
    }

    async openCmp() {
        if (this.rule.openCmp) {
            return this._runRulesSequentially(this.rule.openCmp, this.autoconsent.config.logs.rulesteps);
        }
        return false;
    }

    async test() {
        if (this.hasSelfTest && this.rule.test) {
            return this._runRulesSequentially(this.rule.test, this.autoconsent.config.logs.rulesteps);
        }
        return super.test();
    }

    async evaluateRuleStep(rule: AutoConsentRuleStep) {
        const results: Array<Promise<boolean> | boolean> = [];
        const logsConfig = this.autoconsent.config.logs;
        if (rule.exists) {
            results.push(this.elementExists(rule.exists));
        }
        if (rule.visible) {
            results.push(this.elementVisible(rule.visible, rule.check));
        }
        if (rule.eval) {
            const res = this.mainWorldEval(rule.eval);
            results.push(res);
        }
        if (rule.waitFor) {
            results.push(this.waitForElement(rule.waitFor, rule.timeout));
        }
        if (rule.waitForVisible) {
            results.push(this.waitForVisible(rule.waitForVisible, rule.timeout, rule.check));
        }
        if (rule.click) {
            results.push(this.click(rule.click, rule.all));
        }
        if (rule.waitForThenClick) {
            results.push(this.waitForThenClick(rule.waitForThenClick, rule.timeout, rule.all));
        }
        if (rule.wait) {
            results.push(this.wait(rule.wait));
        }
        if (rule.hide) {
            results.push(this.hide(rule.hide, rule.method));
        }
        if (rule.removeClass !== undefined) {
            results.push(rule.selector ? this.removeClass(rule.selector, rule.removeClass) : false);
        }
        if (rule.setStyle !== undefined) {
            results.push(rule.selector ? this.setStyle(rule.selector, rule.setStyle) : false);
        }
        if (rule.addStyle !== undefined) {
            results.push(rule.selector ? this.addStyle(rule.selector, rule.addStyle) : false);
        }
        if (rule.cookieContains) {
            results.push(this.cookieContains(rule.cookieContains));
        }
        if (rule.if) {
            if (!rule.if.exists && !rule.if.visible) {
                console.error('invalid conditional rule', rule.if);
                return false;
            }
            if (!rule.then) {
                console.error('invalid conditional rule, missing "then" step', rule.if);
                return false;
            }
            const condition = await this.evaluateRuleStep(rule.if);
            logsConfig.rulesteps && console.log('Condition is', condition);
            if (condition) {
                results.push(this._runRulesSequentially(rule.then, logsConfig.rulesteps));
            } else if (rule.else) {
                results.push(this._runRulesSequentially(rule.else, logsConfig.rulesteps));
            } else {
                results.push(true);
            }
        }
        if (rule.any) {
            let resultOfAny = false;
            for (const step of rule.any) {
                if (await this.evaluateRuleStep(step)) {
                    resultOfAny = true;
                    break;
                }
            }
            results.push(resultOfAny);
        }

        if (results.length === 0) {
            logsConfig.errors && console.warn('Unrecognized rule', rule);
            // return immediately so that this result cannot be negated
            return false;
        }

        // boolean and of results
        const all = await Promise.all(results);
        const result = all.reduce((a, b) => a && b, true);

        if (rule.negated) {
            return !result;
        }
        return result;
    }

    async _runRulesParallel(rules: AutoConsentRuleStep[]): Promise<boolean> {
        const results = rules.map((rule) => this.evaluateRuleStep(rule));
        const detections = await Promise.all(results);
        return detections.every((r) => !!r);
    }

    async _runRulesSequentially(rules: AutoConsentRuleStep[], logSteps = true): Promise<boolean> {
        for (const rule of rules) {
            logSteps && console.log('Running rule...', rule);
            const result = await this.evaluateRuleStep(rule);
            logSteps && console.log('...rule result', result);
            if (!result && !rule.optional) {
                return false;
            }
        }
        return true;
    }
}

const PopupHandlingMode = {
    None: -1,
    Reject: 0,
    Tier1: 1,
    Tier2: 2,
} as const;
type PopupHandlingMode = (typeof PopupHandlingMode)[keyof typeof PopupHandlingMode];

export class AutoConsentHeuristicCMP extends AutoConsentCMPBase {
    popups: [PopupHandlingMode, PopupData][] = [];
    mode: PopupHandlingMode;

    constructor(autoconsentInstance: AutoConsent, mode: PopupHandlingMode = PopupHandlingMode.Tier1) {
        super(autoconsentInstance);
        this.name = 'HEURISTIC';
        this.runContext = {
            main: true,
            frame: false, // do not run in iframes for security reasons
        } as RunContext;
        this.mode = mode;
    }

    get hasSelfTest(): boolean {
        return true;
    }

    get isIntermediate(): boolean {
        return false;
    }

    get isCosmetic(): boolean {
        return false;
    }

    async detectCmp(): Promise<boolean> {
        // wait for one tick to deprioritize heavy DOM operations
        await new Promise((resolve) => setTimeout(resolve, 0));
        this.autoconsent.config.performanceLoggingEnabled && performance.mark('heuristicDetectorStart');
        // popups filtered by mode and sorted so a popup with reject will always win.
        this.popups = getActionablePopups(this.autoconsent.config.heuristicPopupSearchTimeout)
            .map(
                (popup): [PopupHandlingMode, PopupData] => [
                    this.classifyPopup([...(popup.rejectButtons || []), ...(popup.otherButtons || [])]),
                    popup,
                ],
            )
            .filter(([mode]) => mode !== PopupHandlingMode.None && mode <= this.mode)
            .sort((a, b) => a[0] - b[0]);
        console.log('xxxs', this.popups);
        this.autoconsent.config.performanceLoggingEnabled && performance.mark('heuristicDetectorEnd');
        this.autoconsent.config.performanceLoggingEnabled &&
            performance.measure('heuristicDetector', 'heuristicDetectorStart', 'heuristicDetectorEnd');
        
        if (this.popups.length > 0) {
            this.name = `HEURISTIC-TIER${this.popups[0][0]}`;
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }

    classifyPopup(buttons: ButtonData[]): PopupHandlingMode {
        const { reject, settings, accept, acknowledge } = buttons.reduce((acc, button) => {
            if (button.regexClassification === 'reject') {
                acc.reject++;
            }
            if (button.regexClassification === 'settings') {
                acc.settings++;
            }
            if (button.regexClassification === 'acknowledge') {
                acc.acknowledge++;
            }
            if (button.regexClassification === 'accept') {
                acc.accept++;
            }
            return acc;
        }, { reject: 0, settings: 0, accept: 0, acknowledge: 0 });
        if (reject > 0) {
            return reject === 1 ? PopupHandlingMode.Reject : PopupHandlingMode.None;
        }
        if (settings > 0) {
            return PopupHandlingMode.None;
        }
        if (acknowledge > 0) {
            return acknowledge === 1 ? PopupHandlingMode.Tier1 : PopupHandlingMode.None;
        }
        if (accept > 0) {
            return accept === 1 ? PopupHandlingMode.Tier2 : PopupHandlingMode.None;
        }
        return PopupHandlingMode.None;
    }

    async detectPopup() {
        if (this.popups.length > 0) {
            if (this.popups.length > 1) {
                this.autoconsent.config.logs.errors && console.warn('Heuristic found multiple popups');
            }
            return true;
        }
        return false;
    }

    optOut(): Promise<boolean> {
        // use only the first found popup candidate
        const [level, popup] = this.popups[0];
        const buttons = [...(popup.rejectButtons || []), ...(popup.otherButtons || [])];
        const targetButtonType = level === PopupHandlingMode.Reject ? 'reject' : level === PopupHandlingMode.Tier1 ? 'acknowledge' : 'accept'
        const button = buttons.find((button) => button.regexClassification === targetButtonType);
        if (button) {
            return this.clickElement(button.element);
        }
        this.autoconsent.config.logs.errors && console.warn(`Heuristic found no button to click at ${targetButtonType}`, this.popups);
        return Promise.resolve(false);
    }

    optIn(): Promise<boolean> {
        throw new Error('Not Implemented');
    }

    openCmp(): Promise<boolean> {
        throw new Error('Not Implemented');
    }

    async test(): Promise<boolean> {
        const button = this.popups[0][1].rejectButtons?.[0];
        if (button) {
            await this.wait(500);
            return !isElementVisible(button.element);
        }
        return false;
    }
}
