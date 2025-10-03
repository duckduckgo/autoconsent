import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_choisirleservicepublic.gouv.fr_l8v', ['https://choisirleservicepublic.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
