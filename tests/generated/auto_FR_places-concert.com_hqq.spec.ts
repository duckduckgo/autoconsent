import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_places-concert.com_hqq', ['https://www.places-concert.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
