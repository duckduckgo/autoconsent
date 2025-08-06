import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_unihosted.com_9r3', ['https://www.unihosted.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
