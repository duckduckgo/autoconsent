import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_choisirleservicepublic.gouv.fr_1ab', ['https://choisirleservicepublic.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
