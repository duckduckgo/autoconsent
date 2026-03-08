import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.bongacams.tv_726', ['https://fr.bongacams.tv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
