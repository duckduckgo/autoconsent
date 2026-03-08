import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_association-psfdf.fr_req', ['https://association-psfdf.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
