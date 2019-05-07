
class StorageBase {
  constructor({ browser, tab }) {
    this.browser = browser;
    this.tab = tab;
  }

  async isThirdPartyIsolateEnabled() {
    if (this.browser && this.browser.privacy && this.browser.privacy.websites.firstPartyIsolate) {
      const isolateEnabled = await this.browser.privacy.websites.firstPartyIsolate.get({});
      return isolateEnabled.value;
    }
    return false;
  }

  async getCookiesQuery(opts, url) {
    if (await this.isThirdPartyIsolateEnabled()) {
      opts.firstPartyDomain = url.split('/')[2].replace('www.', '');
    }
    return opts;
  }

  async updateCookie(cookie, newValue) {
    const newCookie = {
      expirationDate: cookie.expirationDate,
      domain: cookie.domain.startsWith('.') ? cookie.domain : undefined,
      httpOnly: cookie.httpOnly,
      name: cookie.name,
      path: cookie.path,
      secure: cookie.secure,
      storeId: cookie.storeId,
      url: `${cookie.httpOnly ? 'http' : 'https'}://${cookie.domain.startsWith('.') ? cookie.domain.substring(1) : cookie.domain}${cookie.path}`,
      value: newValue,
    };
    if (await this.isThirdPartyIsolateEnabled()) {
      newCookie.firstPartyDomain = cookie.firstPartyDomain || '';
    }
    return this.browser.cookies.set(newCookie);
  }
}

export class EUConsentCookie extends StorageBase {
  constructor(opts) {
    super(opts);
    this.consent = opts.consent;
  }

  async exists() {
    return (await this.getConsentCookies()).length > 0;
  }

  async update(newConsent) {
    const newCookieValue = newConsent.getConsentString();
    const cookies = await this.getConsentCookies();
    return Promise.all(cookies.map(cookie => this.updateCookie(cookie, newCookieValue)));
  }

  async getConsentCookies() {
    const cookiesQuery = await this.getCookiesQuery(
      { storeId: this.tab.cookieStoreId },
      this.tab.url,
    );
    const cookies = await this.browser.cookies.getAll(cookiesQuery);
    const { consentData } = this.consent.consentData;

    let consentCookies = cookies.filter(c => c.value.startsWith(consentData));

    if (consentCookies.length === 0) {
      consentCookies = cookies.filter(c => this.tab.url.indexOf(c.domain) > -1 && c.name.toLowerCase() === 'euconsent');
    }

    if (await this.isThirdPartyIsolateEnabled()) {
      // if third party isolation is on, the previous query will have only got third-party cookies
      const firstPartyCookiesQuery = await this.getCookiesQuery({
        url: this.tab.url,
        storeId: this.tab.cookieStoreId,
      }, this.tab.url);

      const firstPartyCookies = (
        (await this.browser.cookies.getAll(firstPartyCookiesQuery))
          .filter(c => c.name.toLowerCase() === 'euconsent')
      );

      consentCookies = consentCookies.concat(firstPartyCookies);
    }

    return consentCookies;
  }
}

export class LocalStorageConsent {
  constructor({ localStorage }) {
    this.localStorage = localStorage;
    this.key = 'crfgL0cSt0r';
  }

  async exists() {
    return !!this.get();
  }

  async update(newConsent) {
    const lso = await this.get();
    lso.consent = newConsent.getConsentString();
    await this.localStorage.setItem(this.key, JSON.stringify(lso));
  }

  async get() {
    const consentLSORaw = await this.localStorage.getItem(this.key);

    if (consentLSORaw) {
      return JSON.parse(consentLSORaw);
    }

    return null;
  }
}

export class OilCookie extends StorageBase {
  async exists() {
    return !!this.get();
  }

  async update(newConsent) {
    const oilCookie = await this.get();
    const oilData = JSON.parse(decodeURIComponent(oilCookie.value));

    if (oilData.privacy === 1) {
      oilData.privacy = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      };
    }

    oilData.privacy = oilData.privacy || {};

    let optIn = false;
    Object.keys(oilData.privacy || {}).forEach((purpose) => {
      oilData.privacy[purpose] = newConsent.allowedPurposeIds.indexOf(Number(purpose)) !== -1;
      optIn = optIn || oilData.privacy[purpose];
    });
    oilData.opt_in = optIn;

    oilData.consentString = newConsent.getConsentString();

    await this.updateCookie(oilCookie, JSON.stringify(oilData));
  }

  async get() {
    return this.browser.cookies.get(await this.getCookiesQuery({
      name: 'oil_data',
      url: this.tab.url,
      storeId: this.tab.cookieStoreId,
    }, this.tab.url));
  }
}
