import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_guide-toiture.com_29j', ['https://www.guide-toiture.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
