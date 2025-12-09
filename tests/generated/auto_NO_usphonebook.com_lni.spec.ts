import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_usphonebook.com_lni', ['https://www.usphonebook.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
