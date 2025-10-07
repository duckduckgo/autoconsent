import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eventfrog.de_r4i', ['https://eventfrog.de/en/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
