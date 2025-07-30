import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_website-down.com_6hb', ['https://www.website-down.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
