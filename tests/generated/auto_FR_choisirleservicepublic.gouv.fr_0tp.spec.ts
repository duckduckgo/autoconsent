import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_choisirleservicepublic.gouv.fr_0tp', ['https://choisirleservicepublic.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
