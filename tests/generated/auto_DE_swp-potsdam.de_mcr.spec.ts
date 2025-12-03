import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_swp-potsdam.de_mcr', ['https://www.swp-potsdam.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
