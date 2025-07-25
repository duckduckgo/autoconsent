import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_documentation.insp.gouv.fr_ec4', ['https://documentation.insp.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
