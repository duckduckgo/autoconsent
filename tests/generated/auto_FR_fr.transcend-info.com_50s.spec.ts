import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.transcend-info.com_50s', ['https://fr.transcend-info.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
