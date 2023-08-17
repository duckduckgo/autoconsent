// @ts-nocheck

export const snippets = {
  EVAL_0: () => console.log(1),
  EVAL_CONSENTMANAGER_1: () => window.__cmp && typeof __cmp("getCMPData") === "object",
  EVAL_CONSENTMANAGER_2: () => !__cmp('consentStatus').userChoiceExists,
  EVAL_CONSENTMANAGER_3: () => __cmp('setConsent', 0),
  EVAL_CONSENTMANAGER_4: () => __cmp('setConsent', 1),
  EVAL_CONSENTMANAGER_5: () => __cmp('consentStatus').userChoiceExists,
  EVAL_COOKIEBOT_1: () => window.CookieConsent.hasResponse !== true,
  EVAL_COOKIEBOT_2: () => window.Cookiebot.dialog.submitConsent(),
  EVAL_COOKIEBOT_3: () => endCookieProcess(),
  EVAL_COOKIEBOT_4: () => window.CookieConsent.declined === true,
  EVAL_KLARO_1: () => klaro.getManager().config.services.every(c => c.required || !klaro.getManager().consents[c.name]),
  EVAL_ONETRUST_1: () => window.OnetrustActiveGroups.split(',').filter(s => s.length > 0).length <= 1,
  EVAL_TRUSTARC_TOP: () => window && window.truste && window.truste.eu.bindMap.prefCookie === '0',
  
}

export function getFunctionBody(snippetFunc: () => any) {
  const snippetStr = snippetFunc.toString();
  return snippetStr.substring(snippetStr.indexOf("()=>") + 4);
}
