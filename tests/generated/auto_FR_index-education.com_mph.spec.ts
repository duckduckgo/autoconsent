import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_index-education.com_mph', ['https://www.index-education.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
