import {
    checkHeuristicPatterns,
    classifyButtons,
    excludeContainers,
    getButtonData,
    isDialogLikeElement,
} from './heuristics';
import { PopupData } from './types';
import { isElementVisible } from './utils';

const MUTATION_ATTRIBUTE_FILTER = ['class', 'style', 'open', 'role', 'aria-modal', 'hidden', 'aria-hidden'];
const TABLE_ROW_MUTATION_TAGS = new Set(['TR', 'TD']);
const IDLE_CHUNK_MS = 5;
const IDLE_CALLBACK_TIMEOUT_MS = 100;

function awaitIdle(timeout = IDLE_CALLBACK_TIMEOUT_MS): Promise<void> {
    return new Promise((resolve) => {
        let settled = false;
        const finish = () => {
            if (!settled) {
                settled = true;
                resolve();
            }
        };
        setTimeout(finish, timeout);
        if (typeof requestIdleCallback === 'function') {
            requestIdleCallback(finish, { timeout });
        } else {
            setTimeout(finish, 0);
        }
    });
}

function isPopupLikeCandidate(node: HTMLElement): boolean {
    if (!isElementVisible(node)) {
        return false;
    }
    if (isDialogLikeElement(node)) {
        return true;
    }
    const cssPosition = window.getComputedStyle(node).position;
    return cssPosition === 'fixed' || cssPosition === 'sticky';
}

function buildPotentialPopup(el: HTMLElement): PopupData | null {
    if (!el.innerText) {
        return null;
    }
    return {
        text: el.innerText,
        element: el,
        buttons: getButtonData(el),
    };
}

function classifyActionablePopup(popup: PopupData): PopupData | null {
    const popupText = popup.text?.trim();
    if (!popupText) {
        return null;
    }
    const { patterns } = checkHeuristicPatterns(popupText);
    if (patterns.length === 0) {
        return null;
    }
    const { rejectButtons, otherButtons } = classifyButtons(popup.buttons);
    if (rejectButtons.length === 0) {
        return null;
    }
    return {
        ...popup,
        rejectButtons,
        otherButtons,
    };
}

async function scanAllPopupLikeElements(): Promise<HTMLElement[]> {
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT, {
        acceptNode(node: HTMLElement) {
            if (node.tagName === 'BODY') {
                return NodeFilter.FILTER_SKIP;
            }
            if (isPopupLikeCandidate(node)) {
                return NodeFilter.FILTER_ACCEPT;
            }
            return NodeFilter.FILTER_SKIP;
        },
    });

    await awaitIdle();
    let chunkStart = performance.now();
    const found: HTMLElement[] = [];
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        found.push(node as HTMLElement);
        if (performance.now() - chunkStart > IDLE_CHUNK_MS) {
            await awaitIdle();
            chunkStart = performance.now();
        }
    }
    return excludeContainers(found);
}

function collectPopupLikeInSubtree(root: Node): HTMLElement[] {
    const found: HTMLElement[] = [];
    if (root instanceof HTMLElement) {
        if (isPopupLikeCandidate(root)) {
            found.push(root);
        }
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
            acceptNode(node: HTMLElement) {
                if (node === root) {
                    return NodeFilter.FILTER_SKIP;
                }
                if (isPopupLikeCandidate(node)) {
                    return NodeFilter.FILTER_ACCEPT;
                }
                return NodeFilter.FILTER_SKIP;
            },
        });
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
            found.push(node as HTMLElement);
        }
    }
    return found;
}

/**
 * Incrementally tracks popup-like DOM elements and derived actionable popups.
 * Performs one full scan on first use, then updates from MutationObserver events.
 */
export class HeuristicPopupIndex {
    private candidates = new Set<HTMLElement>();
    private potentialPopups: PopupData[] = [];
    private actionablePopups: PopupData[] = [];
    private dirty = new Set<HTMLElement>();
    private observer: MutationObserver | null = null;
    private pendingRefresh: Promise<void> | null = null;
    private refreshScheduled = false;
    private initialScanDone = false;

    /**
     * Run a full DOM scan, populate the cache, and register the mutation observer.
     */
    async scan(): Promise<void> {
        await this.runFullScan();
        this.ensureObserver();
    }

    /**
     * Return cached actionable popups, running an initial scan or pending incremental updates first.
     */
    async getActionablePopups(): Promise<PopupData[]> {
        if (!this.initialScanDone) {
            await this.scan();
        } else {
            await this.flushUpdates();
        }
        return this.actionablePopups;
    }

    /**
     * Return cached potential popups (before cookie-text / reject-button filtering).
     */
    async getPotentialPopups(): Promise<PopupData[]> {
        if (!this.initialScanDone) {
            await this.scan();
        } else {
            await this.flushUpdates();
        }
        return this.potentialPopups;
    }

    /** Stop observing DOM mutations and cancel any scheduled incremental refresh. */
    disableObserver(): void {
        this.observer?.disconnect();
        this.observer = null;
        this.refreshScheduled = false;
        this.pendingRefresh = null;
    }

    /** Apply any pending incremental cache updates immediately. */
    async flushUpdates(): Promise<void> {
        if (this.pendingRefresh) {
            await this.pendingRefresh;
        }
        if (this.dirty.size > 0 || this.refreshScheduled) {
            this.refreshScheduled = false;
            this.pendingRefresh = null;
            await this.applyIncrementalUpdates();
        }
    }

    private async runFullScan(): Promise<void> {
        const elements = await scanAllPopupLikeElements();
        this.candidates = new Set(elements);
        this.dirty.clear();
        this.rebuildCache();
        this.initialScanDone = true;
    }

    private ensureObserver(): void {
        if (this.observer) {
            return;
        }
        this.observer = new MutationObserver((mutations) => this.handleMutations(mutations));
        this.observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: MUTATION_ATTRIBUTE_FILTER,
        });
    }

    private handleMutations(mutations: MutationRecord[]): void {
        let needsRefresh = false;
        for (const mutation of mutations) {
            if (!this.mutationAffectsCache(mutation)) {
                continue;
            }
            needsRefresh = true;
            if (mutation.type === 'childList') {
                mutation.removedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        this.removeCandidatesContainedIn(node);
                    }
                });
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement && !this.isTableRowMutationNode(node)) {
                        for (const el of collectPopupLikeInSubtree(node)) {
                            this.candidates.add(el);
                            this.dirty.add(el);
                        }
                    }
                });
            } else if (mutation.type === 'attributes' && mutation.target instanceof HTMLElement) {
                const el = mutation.target;
                if (this.candidates.has(el)) {
                    this.dirty.add(el);
                } else if (isPopupLikeCandidate(el)) {
                    this.candidates.add(el);
                    this.dirty.add(el);
                } else {
                    this.removeCandidatesContainedIn(el);
                }
            }
        }
        if (needsRefresh) {
            this.scheduleIncrementalRefresh();
        }
    }

    private mutationAffectsCache(mutation: MutationRecord): boolean {
        if (mutation.type === 'attributes') {
            return true;
        }

        for (const candidate of this.candidates) {
            if (mutation.target instanceof Node && mutation.target.contains(candidate)) {
                return true;
            }
        }

        for (const node of mutation.removedNodes) {
            if (node instanceof HTMLElement) {
                for (const candidate of this.candidates) {
                    if (node.contains(candidate) || node === candidate) {
                        return true;
                    }
                }
            }
        }

        for (const node of mutation.addedNodes) {
            if (node instanceof HTMLElement && !this.isTableRowMutationNode(node)) {
                return true;
            }
        }

        return false;
    }

    private isTableRowMutationNode(el: HTMLElement): boolean {
        return TABLE_ROW_MUTATION_TAGS.has(el.tagName);
    }

    private removeCandidatesContainedIn(node: HTMLElement): void {
        for (const candidate of [...this.candidates]) {
            if (node.contains(candidate) || node === candidate) {
                this.removeCandidate(candidate);
            }
        }
    }

    private removeCandidate(el: HTMLElement): void {
        this.candidates.delete(el);
        this.dirty.delete(el);
        this.potentialPopups = this.potentialPopups.filter((popup) => popup.element !== el);
        this.actionablePopups = this.actionablePopups.filter((popup) => popup.element !== el);
    }

    private scheduleIncrementalRefresh(): void {
        if (this.refreshScheduled) {
            return;
        }
        this.refreshScheduled = true;
        this.pendingRefresh = new Promise((resolve) => {
            awaitIdle().then(async () => {
                if (!this.refreshScheduled) {
                    resolve();
                    return;
                }
                this.refreshScheduled = false;
                this.pendingRefresh = null;
                await this.applyIncrementalUpdates();
                resolve();
            });
        });
    }

    private async applyIncrementalUpdates(): Promise<void> {
        if (this.dirty.size === 0) {
            this.reconcileDisconnectedCandidates();
            return;
        }

        for (const el of [...this.dirty]) {
            this.dirty.delete(el);
            this.removeCandidate(el);
            if (!el.isConnected) {
                continue;
            }
            if (isPopupLikeCandidate(el)) {
                this.candidates.add(el);
            }
        }

        this.rebuildCache();
    }

    private reconcileDisconnectedCandidates(): void {
        for (const candidate of [...this.candidates]) {
            if (!candidate.isConnected) {
                this.removeCandidate(candidate);
            }
        }
    }

    private rebuildCache(): void {
        this.reconcileDisconnectedCandidates();
        const leafCandidates = excludeContainers([...this.candidates]);
        this.potentialPopups = [];
        this.actionablePopups = [];

        for (const el of leafCandidates) {
            if (!el.isConnected) {
                this.candidates.delete(el);
                continue;
            }
            const potential = buildPotentialPopup(el);
            if (!potential) {
                continue;
            }
            this.potentialPopups.push(potential);
            const actionable = classifyActionablePopup(potential);
            if (actionable) {
                this.actionablePopups.push(actionable);
            }
        }
    }
}
