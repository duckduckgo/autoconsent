import generateCMPTests from '../playwright/runner';

generateCMPTests('swisscom-ecare', [
    'https://mywingo.wingo.ch/eCare/de/users/sign_in',
    'https://myaccount.coopmobile.ch/eCare/de/users/sign_in',
    'https://selfcare.mobile.migros.ch/eCare/de/users/sign_in',
]);
