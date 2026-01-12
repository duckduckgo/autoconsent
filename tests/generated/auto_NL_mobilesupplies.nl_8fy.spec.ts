import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mobilesupplies.nl_8fy', ['https://www.mobilesupplies.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
