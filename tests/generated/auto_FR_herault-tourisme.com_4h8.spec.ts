import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_herault-tourisme.com_4h8', ['https://www.herault-tourisme.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
