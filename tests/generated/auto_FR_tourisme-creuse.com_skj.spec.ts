import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tourisme-creuse.com_skj', ['https://www.tourisme-creuse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
