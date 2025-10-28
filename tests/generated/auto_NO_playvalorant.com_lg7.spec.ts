import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_playvalorant.com_lg7', ['https://playvalorant.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
