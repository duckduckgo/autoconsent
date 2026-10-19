import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiereports', [
    'https://www.visa.co.uk/',
    'https://www.authorize.net/',
    'https://www.osborneclarke.com/',
    'https://www.devittinsurance.com/', // consent toggles on the first layer
    'https://www.smartpensionsuk.co.uk/',
]);

// the site navigates after consent is processed, so the self test runs on a fresh page
generateCMPTests('cookiereports', ['https://www.nk.se/'], {
    testSelfTest: false,
});
