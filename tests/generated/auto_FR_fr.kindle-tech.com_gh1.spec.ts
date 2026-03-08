import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.kindle-tech.com_gh1', ['https://fr.kindle-tech.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
