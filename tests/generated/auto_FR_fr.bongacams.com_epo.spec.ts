import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.bongacams.com_epo', ['https://fr.bongacams.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
