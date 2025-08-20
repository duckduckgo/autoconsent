import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_powerofpositivity.com_sm5', ['https://www.powerofpositivity.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
