import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dometic.com_lkr', ['https://www.dometic.com/de-de/outdoor'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
