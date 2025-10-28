import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_betaseries.com_box', ['https://www.betaseries.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
