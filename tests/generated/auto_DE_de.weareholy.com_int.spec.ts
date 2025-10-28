import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.weareholy.com_int', ['https://de.weareholy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
