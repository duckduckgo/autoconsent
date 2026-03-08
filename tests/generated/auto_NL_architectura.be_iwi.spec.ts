import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_architectura.be_iwi', ['http://www.architectura.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
