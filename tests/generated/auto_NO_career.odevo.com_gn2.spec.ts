import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_career.odevo.com_gn2', ['https://career.odevo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
