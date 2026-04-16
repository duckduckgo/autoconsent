// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const snippets = {
    // code-based rules
    EVAL_0: () => console.log(1),
    EVAL_DIDOMI_OPT_OUT: () => {
        if (window.Didomi) {
            window.Didomi.setUserDisagreeToAll();
            return true;
        }
        return false;
    },
    EVAL_DIDOMI_TEST: () => {
        if (window.Didomi) {
            return window.Didomi.getUserConsentStatusForAll().purposes.disabled.length > 0;
        }
        return false;
    },
    EVAL_CONSENTMANAGER_1: () => window.__cmp && typeof __cmp('getCMPData') === 'object',
    EVAL_CONSENTMANAGER_2: () => !__cmp('consentStatus').userChoiceExists,
    EVAL_CONSENTMANAGER_3: () => __cmp('setConsent', 0),
    EVAL_CONSENTMANAGER_4: () => __cmp('setConsent', 1),
    EVAL_CONSENTMANAGER_5: () => __cmp('consentStatus').userChoiceExists,
    EVAL_COOKIEBOT_1: () => !!window.Cookiebot,
    EVAL_COOKIEBOT_2: () => !window.Cookiebot.hasResponse && window.Cookiebot.dialog?.visible === true,
    EVAL_COOKIEBOT_3: () => window.Cookiebot.withdraw() || true,
    EVAL_COOKIEBOT_4: () => window.Cookiebot.hide() || true,
    EVAL_COOKIEBOT_5: () => window.Cookiebot.declined === true,
    EVAL_KLARO_1: () => {
        const config = globalThis.klaroConfig || (globalThis.klaro?.getManager && globalThis.klaro.getManager().config);
        if (!config) {
            // with no klaro globals, we can't test on this page
            return true;
        }
        const optionalServices = (config.services || config.apps).filter((s) => !s.required).map((s) => s.name);
        if (klaro && klaro.getManager) {
            const manager = klaro.getManager();
            return optionalServices.every((name) => !manager.consents[name]);
        } else if (klaroConfig && klaroConfig.storageMethod === 'cookie') {
            const cookieName = klaroConfig.cookieName || klaroConfig.storageName;
            const consents = JSON.parse(
                decodeURIComponent(
                    document.cookie
                        .split(';')
                        .find((c) => c.trim().startsWith(cookieName))
                        .split('=')[1],
                ),
            );
            return Object.keys(consents)
                .filter((k) => optionalServices.includes(k))
                .every((k) => consents[k] === false);
        }
    },
    EVAL_KLARO_OPEN_POPUP: () => {
        klaro.show(undefined, true);
    },
    EVAL_KLARO_TRY_API_OPT_OUT: () => {
        if (window.klaro && typeof klaro.show === 'function' && typeof klaro.getManager === 'function') {
            try {
                // opt-out directly via API
                klaro.getManager().changeAll(false);
                klaro.getManager().saveAndApplyConsents();
                return true;
            } catch (e) {
                console.warn(e);
                return false;
            }
        }
        return false;
    },
    EVAL_ONETRUST_1: () => window.OnetrustActiveGroups.split(',').filter((s) => s.length > 0).length <= 1,
    EVAL_TRUSTARC_TOP: () => window && window.truste && window.truste.eu.bindMap.prefCookie === '0',
    EVAL_TRUSTARC_FRAME_TEST: () => window && window.QueryString && window.QueryString.preferences === '0',
    EVAL_TRUSTARC_FRAME_GTM: () => window && window.QueryString && window.QueryString.gtm === '1',

    // declarative rules
    EVAL_ADOPT_TEST: () => !!localStorage.getItem('adoptConsentMode'),
    EVAL_ADULTFRIENDFINDER_TEST: () => !!localStorage.getItem('cookieConsent'),
    EVAL_BAHN_TEST: () => utag.gdpr.getSelectedCategories().length === 1,
    EVAL_BIGCOMMERCE_CONSENT_MANAGER_DETECT: () => !!(window.consentManager && window.consentManager.version),
    EVAL_BORLABS_0: () =>
        !JSON.parse(
            decodeURIComponent(
                document.cookie
                    .split(';')
                    .find((c) => c.indexOf('borlabs-cookie') !== -1)
                    .split('=', 2)[1],
            ),
        ).consents.statistics,
    EVAL_CC_BANNER2_0: () => !!document.cookie.match(/sncc=[^;]+D%3Dtrue/),
    EVAL_COINBASE_0: () =>
        JSON.parse(decodeURIComponent(document.cookie.match(/cm_(eu|default)_preferences=([0-9a-zA-Z\\{\\}\\[\\]%:]*);?/)[2])).consent
            .length <= 1,
    EVAL_COOKIE_LAW_INFO_0: () => {
        if (CLI.disableAllCookies) CLI.disableAllCookies();
        if (CLI.reject_close) CLI.reject_close();
        document.body.classList.remove('cli-barmodal-open');
        return true;
    },
    EVAL_COOKIE_LAW_INFO_DETECT: () => !!window.CLI,
    EVAL_COOKIE_MANAGER_POPUP_0: () =>
        JSON.parse(
            document.cookie
                .split(';')
                .find((c) => c.trim().startsWith('CookieLevel'))
                .split('=')[1],
        ).social === false,
    EVAL_COOKIEALERT_0: () => document.querySelector('body').removeAttribute('style') || true,
    EVAL_COOKIEALERT_1: () => document.querySelector('body').removeAttribute('style') || true,
    EVAL_COOKIEALERT_2: () => window.CookieConsent.declined === true,
    EVAL_COOKIEFIRST_0: () =>
        ((o) => o.performance === false && o.functional === false && o.advertising === false)(
            JSON.parse(
                decodeURIComponent(
                    document.cookie
                        .split(';')
                        .find((c) => c.indexOf('cookiefirst') !== -1)
                        .trim(),
                ).split('=')[1],
            ),
        ),
    EVAL_COOKIEFIRST_1: () =>
        document
            .querySelectorAll('button[data-cookiefirst-accent-color=true][role=checkbox]:not([disabled])')
            .forEach((i) => i.getAttribute('aria-checked') === 'true' && i.click()) || true,
    EVAL_COOKIEINFORMATION_0: () => CookieInformation.declineAllCategories() || true,
    EVAL_COOKIEINFORMATION_1: () => CookieInformation.submitAllCategories() || true,
    EVAL_ETSY_0: () =>
        document.querySelectorAll('.gdpr-overlay-body input').forEach((toggle) => {
            toggle.checked = false;
        }) || true,
    EVAL_ETSY_1: () => document.querySelector('.gdpr-overlay-view button[data-wt-overlay-close]').click() || true,
    EVAL_EZOIC_0: () => ezCMP.handleAcceptAllClick(),
    EVAL_FIDES_DETECT_POPUP: () => window.Fides?.initialized,
    EVAL_GDPR_LEGAL_COOKIE_DETECT_CMP: () => !!window.GDPR_LC,
    EVAL_GDPR_LEGAL_COOKIE_TEST: () => !!window.GDPR_LC?.userConsentSetting,
    EVAL_IUBENDA_0: () =>
        document.querySelectorAll('.purposes-item input[type=checkbox]:not([disabled])').forEach((x) => {
            if (x.checked) x.click();
        }) || true,
    EVAL_IUBENDA_1: () => !!document.cookie.match(/_iub_cs-\d+=/),
    EVAL_KETCH_DETECT_CMP: () =>
        typeof window.ketch === 'function' && [...document.scripts].some((s) => s.src && /ketchcdn\.com|ketchjs\.com/i.test(s.src)),
    EVAL_KETCH_DETECT_POPUP: () => {
        const rejectRe =
            /\b(reject all|reject|decline all|decline|refuse all|refuse|deny all|deny|only necessary|necessary cookies only|use essential|essential only|alle ablehnen|alles ablehnen|tout refuser|refuser)\b/i;
        const walk = (root, visit) => {
            visit(root);
            const tree = root.querySelectorAll('*');
            for (let i = 0; i < tree.length; i++) {
                const el = tree[i];
                if (el.shadowRoot) walk(el.shadowRoot, visit);
            }
        };
        const isPresentationalOpen = (el) => {
            if (!(el instanceof HTMLElement)) return false;
            const r = el.getBoundingClientRect();
            return r.width >= 20 && r.height >= 20;
        };
        const visibleTextMatch = (el) => {
            if (!(el instanceof HTMLElement)) return false;
            const cs = getComputedStyle(el);
            if (cs.visibility === 'hidden' || cs.display === 'none' || cs.opacity === '0') return false;
            const r = el.getBoundingClientRect();
            if (r.width < 2 || r.height < 2) return false;
            const t = (el.textContent || '').trim();
            return rejectRe.test(t);
        };
        const scanOnce = () => {
            const backdrop = document.querySelector('[data-ketch-backdrop="true"]');
            if (backdrop instanceof HTMLElement) {
                const cs = getComputedStyle(backdrop);
                // Match prehide behavior: opacity may be 0 while the CMP is still present for detection.
                if (cs.display !== 'none' && cs.visibility !== 'hidden') {
                    const r = backdrop.getBoundingClientRect();
                    if (r.width > 10 && r.height > 10) {
                        return true;
                    }
                }
            }
            let foundBannerChrome = false;
            walk(document, (node) => {
                if (foundBannerChrome) return;
                if (!(node instanceof HTMLElement)) return;
                const id = node.id || '';
                if (
                    id === 'ketch-consent-banner' ||
                    id === 'ketch-purposes-modal' ||
                    id === 'ketch-preferences-purposes-tab' ||
                    id === 'ketch-preferences' ||
                    id.startsWith('ketch-preferences-')
                ) {
                    if (isPresentationalOpen(node)) {
                        foundBannerChrome = true;
                    }
                }
            });
            if (foundBannerChrome) {
                return true;
            }
            let found = false;
            walk(document, (node) => {
                if (found) return;
                if (!(node instanceof HTMLElement)) return;
                const id = node.id || '';
                if (
                    id === 'ketch-consent-banner' ||
                    id === 'ketch-purposes-modal' ||
                    id === 'ketch-preferences-purposes-tab' ||
                    id.startsWith('ketch-preferences')
                ) {
                    walk(node, (inner) => {
                        if (found) return;
                        if (inner instanceof HTMLElement && visibleTextMatch(inner)) found = true;
                    });
                }
            });
            return found;
        };
        if (scanOnce()) {
            return true;
        }
        const deadline = Date.now() + 2200;
        while (Date.now() < deadline) {
            if (scanOnce()) {
                return true;
            }
            const spin = Date.now();
            while (Date.now() - spin < 200) {
                /* wait for Ketch to render */
            }
        }
        return false;
    },
    EVAL_KETCH_OPT_OUT: () => {
        const tryKetchApiReject = () => {
            if (typeof window.ketch === 'function') {
                window.ketch('rejectAllConsent', false);
                return true;
            }
            const deadline = Date.now() + 12000;
            while (Date.now() < deadline) {
                const k = window.semaphore && window.semaphore.ketch;
                if (k && typeof k.rejectAllConsent === 'function') {
                    k.rejectAllConsent(false);
                    return true;
                }
                const spin = Date.now();
                while (Date.now() - spin < 100) {
                    /* wait for Ketch init */
                }
            }
            return false;
        };
        if (tryKetchApiReject()) {
            return true;
        }
        const rejectRe =
            /\b(reject all|reject|decline all|decline|refuse all|refuse|deny all|deny|only necessary|necessary cookies only|use essential|essential only|alle ablehnen|alles ablehnen|tout refuser|refuser)\b/i;
        const manageRe =
            /\b(manage preferences|manage choices|cookie settings|privacy settings|preferences|customize|options|settings|purposes|zwecke|paramètres|configuración)\b/i;
        const collectElements = (root, acc) => {
            acc.push(root);
            const tree = root.querySelectorAll('*');
            for (let i = 0; i < tree.length; i++) {
                const el = tree[i];
                if (el.shadowRoot) collectElements(el.shadowRoot, acc);
            }
        };
        const allUnder = (root) => {
            const acc = [];
            collectElements(root, acc);
            return acc;
        };
        const isVisible = (el) => {
            if (!(el instanceof HTMLElement)) return false;
            const cs = getComputedStyle(el);
            if (cs.visibility === 'hidden' || cs.display === 'none' || Number(cs.opacity) === 0) return false;
            const r = el.getBoundingClientRect();
            return r.width >= 2 && r.height >= 2;
        };
        const clickFirst = (root, testFn) => {
            for (const el of allUnder(root)) {
                if (el instanceof HTMLElement && el.tagName === 'BUTTON' && isVisible(el) && testFn(el)) {
                    el.click();
                    return true;
                }
            }
            return false;
        };
        const findKetchRoot = () => {
            const ids = ['ketch-consent-banner', 'ketch-purposes-modal', 'ketch-preferences-purposes-tab', 'ketch-preferences'];
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && isVisible(el)) return el;
            }
            return null;
        };
        const tryReject = (scope) => {
            if (!scope) return false;
            return clickFirst(scope, (btn) => rejectRe.test((btn.textContent || '').trim()));
        };
        const tryManage = (scope) => {
            if (!scope) return false;
            return clickFirst(scope, (btn) => manageRe.test((btn.textContent || '').trim()));
        };
        const deadline = Date.now() + 15000;
        while (Date.now() < deadline) {
            const root = findKetchRoot();
            if (root) {
                if (tryReject(document)) {
                    return true;
                }
                if (tryManage(root)) {
                    const innerDeadline = Date.now() + 10000;
                    while (Date.now() < innerDeadline) {
                        if (tryReject(document)) {
                            return true;
                        }
                        const spinA = Date.now();
                        while (Date.now() - spinA < 120) {
                            /* wait for nested UI */
                        }
                    }
                    return tryReject(document);
                }
            }
            const spinB = Date.now();
            while (Date.now() - spinB < 150) {
                /* wait for Ketch to mount */
            }
        }
        return tryReject(document);
    },
    EVAL_KETCH_OPT_IN: () => {
        const tryKetchApiAccept = () => {
            if (typeof window.ketch === 'function') {
                window.ketch('acceptAllConsent', false);
                return true;
            }
            const deadline = Date.now() + 12000;
            while (Date.now() < deadline) {
                const k = window.semaphore && window.semaphore.ketch;
                if (k && typeof k.acceptAllConsent === 'function') {
                    k.acceptAllConsent(false);
                    return true;
                }
                const spin = Date.now();
                while (Date.now() - spin < 100) {
                    /* wait for Ketch init */
                }
            }
            return false;
        };
        if (tryKetchApiAccept()) {
            return true;
        }
        const acceptRe = /\b(accept all|accept|agree|allow all|allow|i agree|got it|ok|continue)\b/i;
        const collectElements = (root, acc) => {
            acc.push(root);
            const tree = root.querySelectorAll('*');
            for (let i = 0; i < tree.length; i++) {
                const el = tree[i];
                if (el.shadowRoot) collectElements(el.shadowRoot, acc);
            }
        };
        const allUnder = (root) => {
            const acc = [];
            collectElements(root, acc);
            return acc;
        };
        const isVisible = (el) => {
            if (!(el instanceof HTMLElement)) return false;
            const cs = getComputedStyle(el);
            if (cs.visibility === 'hidden' || cs.display === 'none' || Number(cs.opacity) === 0) return false;
            const r = el.getBoundingClientRect();
            return r.width >= 2 && r.height >= 2;
        };
        const findKetchRoot = () => {
            const ids = ['ketch-consent-banner', 'ketch-purposes-modal', 'ketch-preferences'];
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && isVisible(el)) return el;
            }
            return null;
        };
        const root = findKetchRoot();
        if (!root) {
            return false;
        }
        for (const el of allUnder(root)) {
            if (el instanceof HTMLElement && el.tagName === 'BUTTON' && isVisible(el) && acceptRe.test((el.textContent || '').trim())) {
                el.click();
                return true;
            }
        }
        return false;
    },
    EVAL_KETCH_TEST: () => {
        const parseConsent = (raw) => {
            if (!raw) {
                return null;
            }
            try {
                return JSON.parse(atob(raw));
            } catch {
                try {
                    let decoded = raw;
                    try {
                        decoded = decodeURIComponent(raw);
                    } catch {
                        return null;
                    }
                    try {
                        return JSON.parse(decoded);
                    } catch {
                        let b64 = decoded.replace(/-/g, '+').replace(/_/g, '/');
                        while (b64.length % 4) {
                            b64 += '=';
                        }
                        return JSON.parse(atob(b64));
                    }
                } catch {
                    return null;
                }
            }
        };
        const isOptOutShape = (json) => {
            if (!json || typeof json !== 'object') {
                return false;
            }
            const keys = Object.keys(json);
            if (keys.length === 0) {
                return true;
            }
            return keys.every((k) => {
                if (k === 'essential_services') {
                    return true;
                }
                const v = json[k];
                return !v || v.status === 'denied' || v.status === 'opt_out';
            });
        };
        const fromLs = parseConsent(localStorage.getItem('_ketch_consent_v1_'));
        if (fromLs) {
            return isOptOutShape(fromLs);
        }
        const m = document.cookie.match(/(?:^|;\s*)_ketch_consent_v1_=([^;]+)/);
        const fromCookie = m ? parseConsent(m[1]) : null;
        if (fromCookie) {
            return isOptOutShape(fromCookie);
        }
        return true;
    },
    EVAL_MICROSOFT_0: () =>
        Array.from(document.querySelectorAll('div > button'))
            .filter((el) => el.innerText.match('Reject|Ablehnen'))[0]
            .click() || true,
    EVAL_MICROSOFT_1: () =>
        Array.from(document.querySelectorAll('div > button'))
            .filter((el) => el.innerText.match('Accept|Annehmen'))[0]
            .click() || true,
    EVAL_MICROSOFT_2: () => !!document.cookie.match('MSCC|GHCC'),
    EVAL_MOOVE_0: () =>
        document.querySelectorAll('#moove_gdpr_cookie_modal input').forEach((i) => {
            if (!i.disabled) i.checked = i.name === 'moove_gdpr_strict_cookies' || i.id === 'moove_gdpr_strict_cookies';
        }) || true,
    EVAL_NHNIEUWS_TEST: () => !!localStorage.getItem('psh:cookies-seen'),
    EVAL_PANDECTES_TEST: () =>
        document.cookie.includes('_pandectes_gdpr=') &&
        JSON.parse(
            atob(
                document.cookie
                    .split(';')
                    .find((s) => s.trim().startsWith('_pandectes_gdpr'))
                    .split('=')[1],
            ),
        ).status === 'deny',
    EVAL_POVR_GOBACK: () => window.history.back() || true,
    EVAL_PUBTECH_0: () =>
        document.cookie.includes('euconsent-v2') &&
        (document.cookie.match(/.YAAAAAAAAAAA/) || document.cookie.match(/.aAAAAAAAAAAA/) || document.cookie.match(/.YAAACFgAAAAA/)),
    EVAL_SKYSCANNER_TEST: () => document.cookie.match(/gdpr=[^;]*adverts:::false/) && !document.cookie.match(/gdpr=[^;]*init:::true/),
    EVAL_SIRDATA_UNBLOCK_SCROLL: () => {
        document.documentElement.classList.forEach((cls) => {
            if (cls.startsWith('sd-cmp-')) document.documentElement.classList.remove(cls);
        });
        return true;
    },
    EVAL_STEAMPOWERED_0: () =>
        JSON.parse(
            decodeURIComponent(
                document.cookie
                    .split(';')
                    .find((s) => s.trim().startsWith('cookieSettings'))
                    .split('=')[1],
            ),
        ).preference_state === 2,
    EVAL_TAKEALOT_0: () => document.body.classList.remove('freeze') || (document.body.style = '') || true,
    EVAL_TARTEAUCITRON_0: () => tarteaucitron.userInterface.respondAll(false) || true,
    EVAL_TARTEAUCITRON_1: () => tarteaucitron.userInterface.respondAll(true) || true,
    EVAL_TARTEAUCITRON_2: () => document.cookie.match(/tarteaucitron=[^;]*/)?.[0].includes('false'),
    EVAL_TESTCMP_STEP: () => !!document.querySelector('#reject-all'),
    EVAL_TESTCMP_0: () => window.results.results[0] === 'button_clicked',
    EVAL_TESTCMP_COSMETIC_0: () => window.results.results[0] === 'banner_hidden',
    EVAL_THEFREEDICTIONARY_0: () => cmpUi.showPurposes() || cmpUi.rejectAll() || true,
    EVAL_THEFREEDICTIONARY_1: () => cmpUi.allowAll() || true,
    EVAL_USERCENTRICS_API_0: () => typeof UC_UI === 'object',
    EVAL_USERCENTRICS_API_1: () => !!UC_UI.closeCMP(),
    EVAL_USERCENTRICS_API_2: () => !!UC_UI.denyAllConsents(),
    EVAL_USERCENTRICS_API_3: () => !!UC_UI.acceptAllConsents(),
    EVAL_USERCENTRICS_API_4: () => !!UC_UI.closeCMP(),
    EVAL_USERCENTRICS_API_5: () => UC_UI.areAllConsentsAccepted() === true,
    EVAL_USERCENTRICS_API_6: () => UC_UI.areAllConsentsAccepted() === false,
    EVAL_USERCENTRICS_BUTTON_0: () =>
        JSON.parse(localStorage.getItem('usercentrics')).consents.every((c) => c.isEssential || !c.consentStatus),
    EVAL_WAITROSE_0: () => Array.from(document.querySelectorAll('label[id$=cookies-deny-label]')).forEach((e) => e.click()) || true,

    EVAL_KETCH_TIME_TEST_OPT_OUT: () => {
        const m = document.cookie.match(/(?:^|;\s*)_ketch_consent_v1_=([^;]+)/);
        if (!m) {
            return false;
        }
        let raw = m[1];
        try {
            raw = decodeURIComponent(raw);
        } catch {
            return false;
        }
        let consent;
        try {
            consent = JSON.parse(raw);
        } catch {
            try {
                let b64 = raw.replace(/-/g, '+').replace(/_/g, '/');
                while (b64.length % 4) {
                    b64 += '=';
                }
                consent = JSON.parse(atob(b64));
            } catch {
                return false;
            }
        }
        return consent.analytics?.status === 'denied' && consent.behavioral_advertising?.status === 'denied';
    },
    EVAL_KETCH_TIME_TEST_OPT_IN: () => {
        const m = document.cookie.match(/(?:^|;\s*)_ketch_consent_v1_=([^;]+)/);
        if (!m) {
            return false;
        }
        let raw = m[1];
        try {
            raw = decodeURIComponent(raw);
        } catch {
            return false;
        }
        let consent;
        try {
            consent = JSON.parse(raw);
        } catch {
            try {
                let b64 = raw.replace(/-/g, '+').replace(/_/g, '/');
                while (b64.length % 4) {
                    b64 += '=';
                }
                consent = JSON.parse(atob(b64));
            } catch {
                return false;
            }
        }
        return consent.analytics?.status === 'granted' && consent.behavioral_advertising?.status === 'granted';
    },
};

export function getFunctionBody(snippetFunc: () => any) {
    const snippetStr = snippetFunc.toString();
    return `(${snippetStr})()`;
}
