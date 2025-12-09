import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_debijenkorf.be_78f', ['https://www.debijenkorf.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
