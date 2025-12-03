import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_xxlnutrition.com_y2v', ['https://xxlnutrition.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
