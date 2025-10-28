import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_huk-autoservice.de_ytw', ['https://www.huk-autoservice.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
