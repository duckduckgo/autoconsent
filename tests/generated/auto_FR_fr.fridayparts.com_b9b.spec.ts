import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.fridayparts.com_b9b', ['https://fr.fridayparts.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
