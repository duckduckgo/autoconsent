import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_recology.com_0', ['https://www.recology.com/?cookie-consent-set=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
