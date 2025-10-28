import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_education.gouv.fr_ooi', ['https://www.education.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
