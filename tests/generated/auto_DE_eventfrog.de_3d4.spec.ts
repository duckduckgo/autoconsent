import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eventfrog.de_3d4', ['https://eventfrog.de/en/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
