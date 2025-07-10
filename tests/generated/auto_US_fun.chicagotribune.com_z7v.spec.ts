import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fun.chicagotribune.com_z7v', ['https://fun.chicagotribune.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
