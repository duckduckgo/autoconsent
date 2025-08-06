import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stellantis-direktbank.de_bzu', ['https://www.stellantis-direktbank.de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
