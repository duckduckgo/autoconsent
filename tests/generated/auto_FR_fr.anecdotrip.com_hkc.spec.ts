import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.anecdotrip.com_hkc', ['https://fr.anecdotrip.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
