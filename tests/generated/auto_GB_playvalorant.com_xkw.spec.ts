import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_playvalorant.com_xkw', ['https://playvalorant.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
