import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_suedtirol.com_59x', ['https://www.suedtirol.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
