import generateCMPTests from '../playwright/runner';

generateCMPTests('finsweet', [
    'https://finsweet.com/components/cookie-consent',
    'https://www.boltpharmacy.co.uk/',
    'https://consentpro.com/',
]);
