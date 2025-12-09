import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_allesoverseks.be_3y3', ['https://www.allesoverseks.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
