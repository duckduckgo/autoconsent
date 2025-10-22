import { deserializeFilterList, getCosmeticStylesheet, getFilterlistSelectors } from './filterlist-utils';
import serializedEngine from './filterlist-engine';
import AutoConsent from './web';

export default class AutoConsentExtra extends AutoConsent {
    initializeFilterList() {
        super.initializeFilterList();
        try {
            if (serializedEngine && serializedEngine.length > 0) {
                this.filtersEngine = deserializeFilterList(serializedEngine);
            }
        } catch (e) {
            console.error('Error parsing filter list', e);
        }
        if (document.readyState === 'loading') {
            window.addEventListener('DOMContentLoaded', () => {
                this.applyCosmeticFilters();
            });
        } else {
            this.applyCosmeticFilters();
        }
    }

    undoCosmetics() {
        super.undoCosmetics();
        this.updateState({ cosmeticFiltersOn: false });
        this.config.logs.lifecycle && console.log('[undocosmetics]', this.cosmeticStyleSheet, location.href);
        this.domActions.removeStyleSheet(this.cosmeticStyleSheet);
    }

    filterListFallback() {
        if (!this.filtersEngine) {
            this.updateState({ lifecycle: 'nothingDetected' });
            return false;
        }

        const cosmeticStyles = getCosmeticStylesheet(this.filtersEngine);

        // this may be a false positive: sometimes filters hide unrelated elements that are not cookie pop-ups
        const cosmeticFiltersWorked = this.domActions.elementVisible(getFilterlistSelectors(cosmeticStyles), 'any');

        const logsConfig = this.config.logs;

        if (!cosmeticFiltersWorked) {
            logsConfig?.lifecycle && console.log("Cosmetic filters didn't work, removing them", location.href);
            this.undoCosmetics();
            this.updateState({ lifecycle: 'nothingDetected' });
            return false;
        } else {
            this.applyCosmeticFilters(cosmeticStyles); // do not wait for it to finish
            logsConfig?.lifecycle && console.log('Keeping cosmetic filters', location.href);
            this.updateState({ lifecycle: 'cosmeticFiltersDetected' });
            if (!this.state.filterListReported) {
                this.reportFilterlist();
            }

            this.sendContentMessage({
                type: 'optOutResult',
                cmp: 'filterList',
                result: true,
                scheduleSelfTest: false,
                url: location.href,
            });
            this.updateState({ lifecycle: 'done' });
            this.sendContentMessage({
                type: 'autoconsentDone',
                cmp: 'filterList',
                isCosmetic: true,
                url: location.href,
                duration: 0,
                totalClicks: this.state.clicks,
            });
            return true;
        }
    }

    /**
     * Apply cosmetic filters
     * @returns true if the filters were applied, false otherwise
     */
    async applyCosmeticFilters(styles?: string) {
        if (!this.filtersEngine) {
            return false;
        }
        const logsConfig = this.config.logs;
        if (!styles) {
            styles = getCosmeticStylesheet(this.filtersEngine);
        }

        setTimeout(() => {
            if (this.state.cosmeticFiltersOn && !this.state.filterListReported) {
                // if the cosmetic filters are actually working, report the hidden popup to the background.
                // This may still be overridden later if an autoconsent rule matches.
                // this may be a false positive: sometimes filters hide unrelated elements that are not cookie pop-ups
                const cosmeticFiltersWorked = this.domActions.elementVisible(getFilterlistSelectors(styles), 'any');
                if (cosmeticFiltersWorked) {
                    logsConfig?.lifecycle && console.log('Prehide cosmetic filters matched', location.href);
                    this.reportFilterlist();
                } else {
                    logsConfig?.lifecycle && console.log("Prehide cosmetic filters didn't match", location.href);
                }
            }
        }, 2000);

        this.updateState({ cosmeticFiltersOn: true });
        try {
            this.cosmeticStyleSheet = await this.domActions.createOrUpdateStyleSheet(styles, this.cosmeticStyleSheet);
            logsConfig?.lifecycle && console.log('[cosmetics]', this.cosmeticStyleSheet, location.href);
            document.adoptedStyleSheets.push(this.cosmeticStyleSheet);
        } catch (e) {
            this.config.logs && console.error('Error applying cosmetic filters', e);
            return false;
        }
        return true;
    }
}
