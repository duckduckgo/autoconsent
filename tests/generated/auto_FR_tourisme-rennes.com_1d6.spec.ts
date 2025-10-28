import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tourisme-rennes.com_1d6', ['https://www.tourisme-rennes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
