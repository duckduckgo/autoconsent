import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tourisme-occitanie.com_obw', ['https://www.tourisme-occitanie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
