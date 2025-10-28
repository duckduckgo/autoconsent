import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.weareholy.com_mmb', ['https://fr.weareholy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
