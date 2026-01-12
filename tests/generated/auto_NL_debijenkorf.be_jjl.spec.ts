import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_debijenkorf.be_jjl', ['https://www.debijenkorf.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
