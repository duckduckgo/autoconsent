import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vocationservicepublic.fr_cfy', ['https://vocationservicepublic.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
