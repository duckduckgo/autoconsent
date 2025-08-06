import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_swp-potsdam.de_p9c', ['https://www.swp-potsdam.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
