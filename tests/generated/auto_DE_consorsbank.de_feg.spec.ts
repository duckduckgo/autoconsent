import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_consorsbank.de_feg', ['https://www.consorsbank.de/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
