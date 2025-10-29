import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.bongacams.com_968', ['https://fr.bongacams.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
