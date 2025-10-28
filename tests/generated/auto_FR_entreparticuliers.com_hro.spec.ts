import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_entreparticuliers.com_hro', ['https://www.entreparticuliers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
