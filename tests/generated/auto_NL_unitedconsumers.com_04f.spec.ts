import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_unitedconsumers.com_04f', ['https://www.unitedconsumers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
