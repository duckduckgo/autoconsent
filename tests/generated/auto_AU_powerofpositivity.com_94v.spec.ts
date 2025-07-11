import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_powerofpositivity.com_94v', ['https://www.powerofpositivity.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
