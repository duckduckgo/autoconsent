import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_enio24.onleihe.de_u18', ['https://enio24.onleihe.de/enio24/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
