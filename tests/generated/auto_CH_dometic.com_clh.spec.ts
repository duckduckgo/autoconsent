import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dometic.com_clh', ['https://www.dometic.com/de-de/outdoor'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
