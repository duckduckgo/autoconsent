import generateCMPTests from '../playwright/runner';

// Only the banner's "Manage your cookies" link (which appends a locale query string) should be
// automated. Opening the same page without a query string is a deliberate user visit and is left
// untouched, so it is not covered here.
generateCMPTests('paypal-cookieprefs', ['https://www.paypal.com/myaccount/privacy/cookiePrefs?locale=en_US'], {});
generateCMPTests('paypal-cookieprefs', ['https://www.paypal.com/myaccount/privacy/cookiePrefs?locale=en_US'], { mobile: true });
