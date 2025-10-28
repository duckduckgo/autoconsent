import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_playvalorant.com_6zt', ['https://playvalorant.com/en-us/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
