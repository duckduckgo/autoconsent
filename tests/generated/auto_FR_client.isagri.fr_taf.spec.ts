import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_client.isagri.fr_taf', ['https://client.isagri.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
