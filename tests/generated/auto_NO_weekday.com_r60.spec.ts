import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_weekday.com_r60', ['https://www.weekday.com/en-no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
