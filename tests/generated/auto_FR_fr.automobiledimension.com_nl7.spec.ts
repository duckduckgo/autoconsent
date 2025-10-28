import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.automobiledimension.com_nl7', ['https://fr.automobiledimension.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
